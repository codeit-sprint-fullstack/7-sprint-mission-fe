// src/pages/productRegisterPage.jsx

import styles from "./productRegisterPage.module.css";
import fieldStyles from "../components/formField.module.css";
import FormHeader from "../components/formHeader.jsx";
import FormField from "../components/formField.jsx";

import ImageUploader from "../components/imageUploader.jsx";
import TagInput from "../components/tagInput.jsx";

import useProductForm from "../hooks/useProductForm.js";
import { productFieldConfigs } from "../constants/fieldConfigs.js";

const ProductRegisterPage = () => {
  const {
    fields,
    images,
    loading,
    submissionError, // 서버 에러
    errors, // 필드별 에러 메시지 객체
    isValid,
    imageInputRef,
    onChange,
    addTag,
    removeTag,
    handleImageChange,
    handleRemoveImage,
    submit,
  } = useProductForm();

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className={styles.form}
      >
        <FormHeader
          title="상품 등록하기"
          onSubmit={submit}
          loading={loading}
          disabled={!isValid}
        />

        {submissionError && <p className={styles.error}>{submissionError}</p>}
        <ImageUploader
          images={images}
          inputRef={imageInputRef}
          onAdd={handleImageChange}
          onRemove={handleRemoveImage}
        />

        {fields &&
          productFieldConfigs.map(
            ({ key, label, type, placeholder, required }) => (
              <FormField
                key={key}
                label={label}
                errorMessage={errors?.[key] ?? ""}
              >
                {type === "textarea" ? (
                  <textarea
                    className={errors?.[key] ? fieldStyles.errorInput : ""}
                    value={fields[key] ?? ""}
                    onChange={onChange(key)}
                    placeholder={placeholder}
                    required={required}
                  />
                ) : (
                  <input
                    className={errors?.[key] ? fieldStyles.errorInput : ""}
                    type={type}
                    value={fields[key] ?? ""}
                    onChange={onChange(key)}
                    placeholder={placeholder}
                    required={required}
                  />
                )}
              </FormField>
            )
          )}

        <TagInput
          tags={fields?.tags}
          value={fields?.tagInput}
          onChange={onChange("tagInput")}
          onAdd={addTag}
          onRemove={removeTag}
          errorMessage={errors?.tagInput || errors?.tags}
        />
      </form>
    </div>
  );
};

export default ProductRegisterPage;
