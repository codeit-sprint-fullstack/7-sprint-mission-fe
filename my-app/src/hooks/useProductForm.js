// src/hooks/useProductForm.js
import { useState, useRef } from "react";
import { createProduct } from "../api/product.js";
import { useNavigate } from "react-router-dom";

export default function useProductForm() {
  const [fields, setFields] = useState({
    productName: "",
    description: "",
    price: "",
    tagInput: "",
    tags: [],
  });
  const [images, setImages] = useState([]); // { file, preview }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const imageInputRef = useRef();

  const onChange = (key) => (e) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
  };

  const addTag = () => {
    const tag = fields.tagInput.trim();
    if (tag && !fields.tags.includes(tag)) {
      setFields((f) => ({
        ...f,
        tags: [...f.tags, tag],
        tagInput: "",
      }));
    }
  };

  const removeTag = (tagToRemove) => {
    setFields((f) => ({
      ...f,
      tags: f.tags.filter((t) => t !== tagToRemove),
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImgs = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((imgs) => [...imgs, ...newImgs]);
  };

  const handleRemoveImage = (idx) => {
    setImages((imgs) => {
      URL.revokeObjectURL(imgs[idx].preview);
      return imgs.filter((_, i) => i !== idx);
    });
  };

  const submit = async () => {
    setLoading(true);
    setError("");
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
      setError("상품 등록에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return {
    fields,
    images,
    loading,
    error,
    imageInputRef,
    onChange,
    addTag,
    removeTag,
    handleImageChange,
    handleRemoveImage,
    submit,
  };
}
