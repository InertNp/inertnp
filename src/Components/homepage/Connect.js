import { aboutme } from "../../Data/Aboutme";
import { Container, SubContainer } from "../Shared/Containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { containerVariant } from "../Shared/Theme";

import { motion } from "framer-motion";
export function Connect() {
  return (
    <Container className="w-11/12 bg-gray-200">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-full w-full flex items-center justify-center"
      >
        <SubContainer className={`shadow-md bg-gray-100`}>
          <div className={`flex  h-full justify-center items-center flex-col`}>
            <h1 className={`text-2xl font-bold pl-3`}>Connect With Me:</h1>
            <div>
              <p className="text-3xl">sabhi1757@gmail.com</p>
            </div>
            <h2 className={`p-5 `}>
              <a href={aboutme.github} className={`pl-3 hover:text-sky-500`}>
                <FontAwesomeIcon icon={faGithub} size={`5x`} />
              </a>
              <a href={aboutme.linkedin} className={`pl-3 hover:text-sky-500`}>
                <FontAwesomeIcon icon={faLinkedin} size={`5x`} />
              </a>
              <a href={aboutme.twitter} className={`pl-3 hover:text-sky-500`}>
                <FontAwesomeIcon icon={faTwitter} size={`5x`} />
              </a>
              <a href={`/`} className={`pl-3 hover:text-sky-500`}>
                <FontAwesomeIcon icon={faDiscord} size={`5x`} />
              </a>
            </h2>
          </div>
        </SubContainer>
      </motion.div>
    </Container>
  );
}
