import React from "react";
interface UserInfoProps {
  lastRef: React.RefObject<HTMLDivElement> | null;
}
const UserInfo: React.FC<UserInfoProps> = ({ lastRef }) => {
  return (
    <>
      <div ref={lastRef} className="flex items-center">
        <div className="text-yellow-400">guest</div>@<div className="text-green-400 mr-2">sandeshtmg.com.np:$ ~ </div>
      </div>
    </>
  );
};

export default UserInfo;
