import { Container, SubContainer } from "../Shared/Containers";
import { skills } from "../../Data/Aboutme";
import { SkillContainer } from "../Shared/SkillContainer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export function Skills() {
  return (
    <Container className=" bg-gray-100">
      <div className="flex justify-start w-full ml-20 pl-20 mb-5">
        <h1 className={`font-bold text-xl`}>My Skills:</h1>
      </div>
      <SubContainer className=" grid grid-cols-4 gap-0">
        {skills.map((e) => {
          return <SkillContainer icon={e.icon} name={e.name} key={e.id} />;
        })}
      </SubContainer>
      <button className={``}>
        <Link to={"/connect"}>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`bg-gray-200 text-black w-10 h-10 rounded-full mt-6 hover:bg-gray-300 shadow-md animate-bounce`}
          />
        </Link>
      </button>
    </Container>
  );
}
