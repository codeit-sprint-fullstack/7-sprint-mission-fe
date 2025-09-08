import style from "./area.module.css";

interface SectionProps {
  imgLink: string;
  subTitle: string;
  title: string;
  context: string;
  option?: boolean;
}

function Section({
  imgLink,
  subTitle,
  title,
  context,
  option = false,
}: SectionProps) {
  const AreaOption: string = option ? style.AreaBoxOption : "";
  return (
    <div className={style.Area}>
      <div className={`${style.AreaBox} ${AreaOption}`}>
        <img src={imgLink} alt="이미지" />
        <div>
          <p className={style.subTitle}>{subTitle}</p>
          <p className={style.Title}>{title}</p>
          <p className={style.Context}>{context}</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
