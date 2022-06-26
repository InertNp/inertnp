import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export const NavButton = ({
  bg,
  textColor,
  value,
  textHover,
  path,
  active,
}) => {
  return (
    <div
      className={`${bg} ${textColor} hover:${textHover} flex justify-center `}
    >
      <NavLink
        to={path}
        className={(e) => (e.isActive ? `${textHover}` : `${textColor}`)}
      >
        <button>
          <FontAwesomeIcon icon={value} size={`2x`} />
        </button>
      </NavLink>
    </div>
  );
};
