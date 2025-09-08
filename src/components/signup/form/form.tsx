import style from "./form.module.css";
function Form() {
  return (
    <div>
      <form className={style.Container}>
        <label>이메일</label>
        <input placeholder="이메일을 입력해주세요"></input>
        <label>닉네임</label>
        <input placeholder="닉네임을 입력해주세요"></input>
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요"></input>
        <label>비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        ></input>
        <button className={style.FormButton}>회원가입</button>
      </form>
    </div>
  );
}

export default Form;
