import { Container, SubContainer } from "../Shared/Containers";
import { aboutme } from "../../Data/Aboutme";
import img from "../../img/me.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Time } from "../Time/Time";

export function Home({ theme }) {
  return (
    <Container className={`bg-gray-200 `}>
      <Time />
      <SubContainer className={`bg-gray-100 shadow-xl flex flex-row`}>
        <img src={img} alt={`Inert`} className={`clear-left w-6/12 h-full object-cover`} />
        <div className="flex flex-col justify-center">
          <h1 className={` text-center text-5xl font-extrabold p-3`}>
            {aboutme.name}
          </h1>

          <h2 className={` text-center p-3`}>{aboutme.desc}</h2>

          <button className={``}>
            <Link to={"/skills"}>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`bg-gray-200 text-black w-10 h-10 rounded-full mt-6 hover:bg-gray-300 shadow-md animate-bounce`}
              />
            </Link>
          </button>
        </div>
      </SubContainer>
    </Container>
  );
}
