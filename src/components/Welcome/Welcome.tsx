import React from "react";

const Welcome: React.FC = () => {
  return (
    <>
      <div className="pb-10">Welcome to my terminal portfolio.(Beta)</div>
      <div className="text-red-500 pb-10">
        Type <span className="text-yellow-500 y-10">`help`</span> into the terminal and hit enter to see lists of all the commands
      </div>
      <div className="pb-10"></div>
    </>
  );
};

export default Welcome;
