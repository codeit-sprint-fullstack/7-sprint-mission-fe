import deleteIcon from "../../../assets/icons/ic_x.svg";
import style from "./tag.module.css";
interface TagProps {
  value: string;
  onDelete: () => void;
}

function Tag({ value, onDelete }: TagProps) {
  return (
    <div className={style.Container}>
      <p>#{value}</p>
      <img
        className={style.deleted}
        src={deleteIcon}
        alt="X"
        onClick={onDelete}
      />
    </div>
  );
}
export default Tag;
