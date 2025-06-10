// src/hooks/useProductForm.js
import { useState, useRef, useCallback, useMemo } from "react";
import { createProduct } from "../api/product.js";
import { useNavigate } from "react-router-dom";
import { productFieldConfigs } from "../constants/fieldConfigs.js";

export default function useProductForm() {
  const [fields, setFields] = useState({
    productName: "",
    description: "",
    price: "",
    tagInput: "",
    tags: [],
  });
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]); // { file, preview }
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const imageInputRef = useRef();

  const validateField = (key, value) => {
    let message = "";

    switch (key) {
      case "productName":
        if (value.length > 10) message = "10자 이내로 입력해주세요";
        break;
      case "description":
        if (value.length < 10) message = "10자 이상 입력해주세요";
        break;
      case "price":
        if (!/^\d+$/.test(value)) message = "숫자로 입력해주세요";
        break;
      case "tagInput":
        if (value.length > 5) message = "5글자 이내로 입력해주세요";

        break;
      default:
        break;
    }
    // console.log("validateField", key, value, "→", message || "✅ 통과");
    setErrors((prev) => ({ ...prev, [key]: message }));
    return message === "";
  };

  const isValid =
    Object.values(errors).every((m) => !m) &&
    productFieldConfigs.every(
      ({ key, required }) =>
        !required || (fields[key] && fields[key].toString().trim() !== "")
    ) &&
    fields.tags.length > 0;

  const onChange = (key) => (e) => {
    const onChangeValue = e.target.value;
    setFields((prevFields) => ({ ...prevFields, [key]: e.target.value }));
    validateField(key, onChangeValue);
  };

  const addTag = () => {
    const tag = fields.tagInput.trim();

    if (tag === "") {
      setErrors((prev) => ({
        ...prev,
        tagInput: "",
      }));
      return;
    }

    if (!validateField("tagInput", tag)) return;

    if (fields.tags.includes(tag)) {
      setErrors((prev) => ({
        ...prev,
        tagInput: "이미 입력된 태그입니다",
      }));
      return;
    }

    setFields((prevFields) => ({
      ...prevFields,
      tags: [...prevFields.tags, tag],
      tagInput: "",
    }));

    setErrors((prev) => ({ ...prev, tagInput: "", tags: "" }));
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = fields.tags.filter((tag) => tag !== tagToRemove);
    setFields((prevFields) => ({
      ...prevFields,
      tags: updatedTags,
    }));

    if (updatedTags.length > 0) {
      setErrors((prev) => ({
        ...prev,
        tags: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImgs = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImgs) => [...prevImgs, ...newImgs]);
  };

  const handleRemoveImage = (idx) => {
    setImages((prevImgs) => {
      URL.revokeObjectURL(prevImgs[idx].preview);
      return prevImgs.filter((_, i) => i !== idx);
    });
  };

  const submit = async () => {
    let formIsValid = true;

    productFieldConfigs.forEach(({ key }) => {
      const valid = validateField(key, fields[key]);
      if (!valid) formIsValid = false;
    });
    if (fields.tags.length === 0) {
      setErrors((prev) => ({
        ...prev,
        tags: "최소 1개 이상의 태그를 입력해주세요",
      }));
      formIsValid = false;
    }

    if (!formIsValid) return;

    if (!isValid) return;
    setLoading(true);
    setErrors({});
    try {
      const formData = new FormData();
      formData.append("name", fields.productName);
      formData.append("description", fields.description);
      formData.append("price", parseFloat(fields.price));
      formData.append("tags", JSON.stringify(fields.tags));
      images.forEach((img) => formData.append("images", img.file));
      await createProduct(formData);
      navigate("/used-market");
    } catch (e) {
      console.error(e);
      setErrors((prev) => ({
        ...prev,
        submit: "상품 등록에 실패했습니다.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return {
    fields,
    images,
    loading,
    errors,
    submissionError: errors.submit ?? "",
    imageInputRef,
    isValid,
    onChange,
    addTag,
    removeTag,
    handleImageChange,
    handleRemoveImage,
    submit,
  };
}
