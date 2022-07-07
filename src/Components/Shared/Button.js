import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const NavButton = ({
  bg,
  textColor,
  value,
  textHover,
  path,
  active,
}) => {
  return (
    <motion.div
      className={`${bg} ${textColor} hover:${textHover} flex justify-center `}
    >
      <NavLink
        to={path}
        className={(e) => (e.isActive ? `${textHover}` : `${textColor}`)}
      >
        <motion.button whileHover={{ scale: 1.2 }}>
          <FontAwesomeIcon icon={value} size={`2x`} />
        </motion.button>
      </NavLink>
    </motion.div>
  );
};
