import { Link } from "react-router-dom";
import { PATH } from "../utils/path";

const UserMenu = ({ className }) => {
  return (
    <Link to={PATH.login()} className={className}>
      로그인
    </Link>
  );
};

export default UserMenu;
