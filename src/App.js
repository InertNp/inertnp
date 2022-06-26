import { useState } from "react";
import { Main } from "./Components/PageRoutes";
import { MediaContainerDesktop } from "./Components/Shared/Containers";

function App() {
  const [theme] = useState({
    state: "light",
    bg: "bg-white",
    textColor: "text-gray-400",
    textHover: "text-sky-500",
  });

  return (
    <MediaContainerDesktop
      className={`container ${theme.bg} w-full h-full flex flex-row overflow-hidden `}
    >
      <Main theme={theme} />
    </MediaContainerDesktop>
  );
}

export default App;
