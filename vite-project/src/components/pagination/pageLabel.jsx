import clsx from "clsx";
import "./pageLabel.css";
export const PageLabel = ({
  children,
  disabled,
  isActive = false,
  handlePageClick,
}) => {
  return (
    <button
      onClick={handlePageClick}
      disabled={disabled}
      className={clsx("page-label", {
        "page-label--active": isActive,
      })}
    >
      {children}
    </button>
  );
};
