import { LegacyRef, useEffect, useRef } from "react";
import Terminal from "./components/Terminal/Terminal";
import TitleBar from "./components/TitleBar/TitleBar";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const ascArt = `
   _____           _         _      _____
  |   __|___ ___ _| |___ ___| |_   |_   _|___ _____ ___ ___ ___
  |__   | .'|   | . | -_|_ -|   |    | | | .'|     | .'|   | . |
  |_____|__,|_|_|___|___|___|_|_|    |_| |__,|_|_|_|__,|_|_|_  |
                                                           |___|
  `;

  const mobAscArt = `      
 +-++-++-++-++-++-++-+
 |S||a||n||d||e||s||h|
 +-++-++-++-++-++-++-+`;
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="">
      <div className="p-5 font-ibmPlex md:h-[53rem] rounded-md" ref={terminalRef}>
        <div onClick={() => inputRef.current?.focus()}>
          <TitleBar />
          <div className="p-4 border small-scrollbar border-gray-900 md:max-h-[52rem] overflow-auto rounded-b-lg">
            <pre className="hidden md:block">{ascArt}</pre>
            <pre className="md:hidden">{mobAscArt}</pre>
            <Welcome />
            <Terminal inputRef={inputRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
