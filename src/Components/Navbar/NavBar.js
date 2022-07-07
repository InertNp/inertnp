// import { Link } from "react-router-dom";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavButton } from "../Shared/Button";
export function NavBar({ theme }) {
  return (
    <div
      className={`w-1/12 h-full flex justify-center items-center ${theme.bg}`}
    >
      <nav className={`flex flex-col h-72 justify-evenly w-full `}>
        <NavButton
          value={faHome}
          bg={theme.bg}
          textColor={theme.textColor}
          textHover={theme.textHover}
          path={`/`}
        />

        <NavButton
          value={faUser}
          bg={theme.bg}
          textColor={theme.textColor}
          textHover={theme.textHover}
          path={"/skills"}
        />
        <NavButton
          value={faEnvelope}
          bg={theme.bg}
          textColor={theme.textColor}
          textHover={theme.textHover}
          path={"/connect"}
        />
      </nav>
    </div>
  );
}
