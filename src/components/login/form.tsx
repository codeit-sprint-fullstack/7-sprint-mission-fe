import style from "./form.module.css";
function Form() {
  return (
    <form className={style.Container}>
      <label>이메일</label>
      <input placeholder="이메일을 입력해주세요"></input>
      <label>비밀번호</label>
      <input placeholder="비밀번호를 입력해주세요"></input>
      <button className={style.FormButton}>로그인</button>
    </form>
  );
}

export default Form;
