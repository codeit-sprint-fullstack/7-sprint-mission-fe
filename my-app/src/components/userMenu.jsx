import { Link } from "react-router-dom";
import { PATH } from "../utils/path";

const UserMenu = () => {
  return <Link to={PATH.login()}>로그인</Link>;
};

export default UserMenu;
