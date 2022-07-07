import { useState } from "react";
import { Main } from "./Components/PageRoutes";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
function App() {
  const [theme] = useState({
    state: "light",
    bg: "bg-white",
    textColor: "text-gray-400",
    textHover: "text-sky-500",
  });
  const [done, setDone] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setDone(true);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{!done ? <Loading /> : <Page theme={theme} />}</>;
}

function Loading() {
  return (
    <motion.div
      animate={{ x: [-200, 1600] }}
      transition={{ duration: 1 }}
      className="flex items-center h-full "
    >
      <FontAwesomeIcon icon={faDragon} size="9x" />
    </motion.div>
  );
}

function Page({ theme }) {
  return (
    <motion.div
      className={`container-full ${theme.bg} h-full flex flex-row overflow-hidden `}
    >
      <Main theme={theme} />
    </motion.div>
  );
}
export default App;
