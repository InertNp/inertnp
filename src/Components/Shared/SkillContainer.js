import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export function SkillContainer({ icon, name }) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 300 }}
      className={`w-48 h-48 shadow-xl flex flex-col items-center p-10 bg-gray-100`}
    >
      <FontAwesomeIcon icon={icon} size={`5x`} />
      <h1 className="text-xl capitalize mt-3">{name}</h1>
    </motion.div>
  );
}
