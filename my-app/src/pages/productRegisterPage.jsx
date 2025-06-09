// src/pages/productRegisterPage.jsx

import styles from "./productRegisterPage.module.css";
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
    error,
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
        <FormHeader title="상품 등록하기" onSubmit={submit} loading={loading} />
        {error && <p className={styles.error}>{error}</p>}
        <ImageUploader
          images={images}
          inputRef={imageInputRef}
          onAdd={handleImageChange}
          onRemove={handleRemoveImage}
        />

        <FormField label="" />

        {productFieldConfigs.map(
          ({ key, label, type, placeholder, required }) => (
            <FormField key={key} label={label}>
              {type === "textarea" ? (
                <textarea
                  value={fields[key]}
                  onChange={onChange(key)}
                  placeholder={placeholder}
                  required={required}
                />
              ) : (
                <input
                  type={type}
                  value={fields[key]}
                  onChange={onChange(key)}
                  placeholder={placeholder}
                  required={required}
                />
              )}
            </FormField>
          )
        )}

        <TagInput
          tags={fields.tags}
          value={fields.tagInput}
          onChange={onChange("tagInput")}
          onAdd={addTag}
          onRemove={removeTag}
        />
      </form>
    </div>
  );
};

export default ProductRegisterPage;
