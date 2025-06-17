import "./likes.css";
import HeartIcon from "/ic_heart.svg";
export const Likes = ({ likeCount = 0 }) => {
  return (
    <div className="like">
      <img src={HeartIcon} alt="좋아요 아이콘" />
      <span className="like__count">{likeCount}</span>
    </div>
  );
};
