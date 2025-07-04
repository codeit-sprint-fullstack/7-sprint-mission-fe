import Board from "@/component/board/board";
import UserBoard from "@/component/board/userBoard";
export default function Home() {
  return (
    <>
      <div>
        <Board />
        <UserBoard></UserBoard>
      </div>
    </>
  );
}
