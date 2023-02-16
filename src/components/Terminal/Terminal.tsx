import React, { SyntheticEvent, useState } from "react";
import { commands } from "../commands/commands";
import UserInfo from "./integrate/UserInfo";

interface terminalProps {
  inputRef: React.RefObject<HTMLInputElement>;
}
const Terminal: React.FC<terminalProps> = ({ inputRef }) => {
  const [command, setCommand] = useState("");
  const [commandLists, setCommandLists] = useState<string[]>([]);
  const [result, setResult] = useState<string[]>([]);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const result = commands(command);
    setResult((preVal: string[]) => {
      return [...preVal, result];
    });
    setCommandLists((preVal) => {
      return [...preVal, command];
    });
    setCommand("");
  };
  return (
    <div className="bg-black overflow-auto">
      {result.length > 0 &&
        result.map((item, index) => (
          <>
            <div className="flex items-center py-1" key={index}>
              <UserInfo />
              <div>{commandLists[index]}</div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: item }}></p>
          </>
        ))}

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center">
        <UserInfo />
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
