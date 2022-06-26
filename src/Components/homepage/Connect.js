import { aboutme } from "../../Data/Aboutme";
import { Container, SubContainer } from "../Shared/Containers";


export function Connect() {
  return (
    <Container className="w-11/12 bg-gray-100">
      <SubContainer className={`border-2`}>
        <div>
          <h1 className={`text-lg font-bold`}>Connect With Me:</h1>
          <h2>
            <a href={aboutme.github}></a>
          </h2>
        </div>
      </SubContainer>
    </Container>
  );
}
