import defaultImg from "../../assets/ui/img_default.png";
import hearticon from "../../assets/icons/ic_heart.svg";
import style from "./table.module.css";
interface TableProps {
  Count: number;
  title: string;
  price: number;
  like: number;
  option?: boolean;
}
function Table({ Count, title, price, like, option = false }: TableProps) {
  const optins = option ? `${style.Option}` : undefined;
  return (
    <>
      <div className={`${style.Container} ${optins}`}>
        {Array.from({ length: Count }).map((_, index) => (
          <div key={index}>
            <img src={defaultImg} />
            <p>{title}</p>
            <p>{price} 원</p>
            <div>
              <img src={hearticon} alt="하트" />
              <p>{like}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Table;
