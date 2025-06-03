import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./productModal.module.css";
import { useEffect } from "react";

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  // useEffect(() => {
  //   console.log("🔥 Modal Mount됨, isOpen:", isOpen, "product:", product);
  // }, [isOpen, product]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false} // accessibility 경고 없애기
    >
      {product && ( //product 있을때만 렌더링
        <div className={styles.modalContent}>
          <Swiper
            modules={[Navigation]}
            navigation
            loop={product?.images?.length > 1}
            className={styles.swiper}
          >
            {product.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${product.name} 이미지 ${idx + 1}`}
                  className={styles.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.info}>
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString()}원</p>
            <button className={styles.likeButton}>❤️ 찜하기</button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ProductModal;
