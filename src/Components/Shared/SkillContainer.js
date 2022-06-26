import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SkillContainer({ icon, name }) {
  return (
    <div className={`w-48 h-48 shadow-xl flex flex-col items-center p-10`}>
      <FontAwesomeIcon icon={icon} size={`5x`} />
        <h1 className="text-xl capitalize mt-3">{name}</h1>
    </div>
  );
}
