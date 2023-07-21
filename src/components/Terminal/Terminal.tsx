import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { commands } from "../commands/commands";
import UserInfo from "./integrate/UserInfo";
import CommandListsContainer from "../commands/CommandListsContainer";

interface terminalProps {
  inputRef: React.RefObject<HTMLInputElement>;
}
interface resultType {
  header: string;
  data: { key: string; description: string }[];
  css: string;
}
const Terminal: React.FC<terminalProps> = ({ inputRef }) => {
  const [command, setCommand] = useState("");
  const [commandLists, setCommandLists] = useState<string[]>([]);
  const [result, setResult] = useState<resultType[]>([]);
  const lastRef = useRef<HTMLDivElement>(null);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (command === "clear") {
      setResult([]);
      setCommandLists([]);
      setCommand("");
      return;
    }
    const result: resultType = commands(command);
    setResult((preVal: any) => {
      return [...preVal, result];
    });
    setCommandLists((preVal) => {
      return [...preVal, command];
    });
    setCommand("");
  };

  useEffect(() => {
    lastRef.current?.scrollIntoView();
  }, [commandLists]);
  return (
    <div className="bg-black overflow-auto">
      {result.length > 0 &&
        result?.map((item, index) => {
          return (
            <>
              <div className="flex flex-col md:flex-row md:items-center py-1" key={index}>
                <UserInfo lastRef={null} />
                <div className="flex items-center">
                  <div className="md:hidden">{">"}</div>
                  <div>{commandLists[index]}</div>
                </div>
              </div>
              {/* <p dangerouslySetInnerHTML={{ __html: item }}></p> */}
              <CommandListsContainer {...item} />
            </>
          );
        })}

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center">
        <UserInfo lastRef={lastRef} />
        <div className="flex md:block">
          <div className="md:hidden mr-2"> {">"} </div>
          <input
            ref={inputRef}
            className="w-[calc(100vh - 24px)] focus:outline-none"
            spellCheck="false"
            autoComplete="off"
            type="text"
            id="command"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            name="command"
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal;
