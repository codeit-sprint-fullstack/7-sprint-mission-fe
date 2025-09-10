import { useState, type JSX } from "react";
import style from "./button.module.css";
import { useUser } from "../../../hooks/login/useUser";
import UserImg from "../../../assets/ui/ic_profile.svg";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Button(): JSX.Element {
  const [open, setOpen] = useState(false);
  const { data: user, isLoading } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  if (isLoading) return <p>로딩중...</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    queryClient.removeQueries({ queryKey: ["me"] });
    navigate("/login");
    setOpen(false);
  };
  return (
    <>
      {user ? (
        <>
          <div
            className={style.LoginImg}
            onClick={() => setOpen((prev) => !prev)}
          >
            <img
              src={user.img || UserImg}
              alt={"사진"}
              className={style.Avatar}
            />
            <p className={style.LoginImgText}>{user.name}</p>
            {open && (
              <div className={style.LogOutContainer}>
                <p onClick={handleLogout}>로그아웃</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <div className={style.Container}>
              <p className={style.Text}>로그인</p>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default Button;
