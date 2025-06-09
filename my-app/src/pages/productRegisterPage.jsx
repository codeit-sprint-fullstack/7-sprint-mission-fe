import React, { useState } from "react";
import styles from "./productRegisterPage.module.css";
import { createProduct } from "../api/product.js";
import { useNavigate } from "react-router-dom";

const ProductRegisterPage = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  // ✅ 등록 API 호출 상태 관리용 loading, error state 추가
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // ✅ 등록 후 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      productName,
      description,
      price,
      tags,
    });
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.header}>
          <h2>상품 등록하기</h2>
          <button type="submit" className={styles.submitButton}>
            등록
          </button>
        </div>

        <div className={styles.field}>
          <label>상품명</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="상품명을 입력해주세요"
          />
        </div>

        <div className={styles.field}>
          <label>상품 소개</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="상품 소개를 입력해주세요"
          />
        </div>

        <div className={styles.field}>
          <label>판매 가격</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="판매 가격을 입력해주세요"
          />
        </div>

        <div className={styles.field}>
          <label>태그</label>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="태그를 입력해주세요"
          />
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className={styles.tagRemoveButton}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductRegisterPage;
