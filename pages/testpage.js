import { realGetArticles } from "@/pages/api/articles";

export default function TestPage() {
  const res = async () => {
    const data = await realGetArticles();
    console.log(data);
    return data;
  };
  return (
    <div>
      <p>그저 테스트를 위한페이지</p>
      <button onClick={res}>확인버튼</button>
    </div>
  );
}
