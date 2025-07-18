import { Link } from "react-router-dom";

export const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer text-blue-600 hover:text-blue-800" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};
