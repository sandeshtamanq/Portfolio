import React from "react";

const Welcome: React.FC = () => {
  return (
    <>
      <div className="pb-10">Welcome to my terminal portfolio.</div>
      <div className="text-red-500 pb-10">
        Type <span className="text-yellow-500 y-10">`help`</span> into the terminal and hit enter to see lists of all the commands or type
        <span className="text-yellow-500"> `go gui`</span> to open the Graphical version of portfolio
      </div>
      <div className="pb-10"></div>
    </>
  );
};

export default Welcome;
