// src/components/ImageUploader.jsx
import React, { forwardRef } from "react";
import styles from "./imageUploader.module.css";

const ImageUploader = ({ images, onAdd, onRemove, maxCount = 5, inputRef }) => (
  <div className={styles.field}>
    <label>상품 이미지</label>
    <div className={styles.imageList}>
      {images.map((img, idx) => (
        <div key={idx} className={styles.imagePreview}>
          <img src={img.preview} alt={`preview-${idx}`} />
          <button
            type="button"
            className={styles.removeImageButton}
            onClick={() => onRemove(idx)}
          >
            ✕
          </button>
        </div>
      ))}
      {images.length < maxCount && (
        <div
          className={styles.imageAdd}
          onClick={() => inputRef.current.click()}
        >
          + 이미지 등록
          <input
            type="file"
            accept="image/*"
            multiple
            ref={inputRef}
            onChange={onAdd}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  </div>
);

export default ImageUploader;
