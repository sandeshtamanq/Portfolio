import { Folder, FileText, Briefcase, Terminal } from "lucide-react";

interface DesktopIconProps {
  id: string;
  label: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, label, onClick }) => {
  const getIcon = () => {
    switch (id) {
      case "projects":
        return <Folder className="w-10 h-10 text-yellow-500" />;
      case "cv":
        return <FileText className="w-10 h-10 text-blue-500" />;
      case "experience":
        return <Briefcase className="w-10 h-10 text-green-500" />;
      case "terminal":
        return <Terminal className="w-10 h-10 text-gray-300" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-24 h-24 text-center cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors duration-200"
      onClick={onClick}
    >
      <div className="bg-black bg-opacity-40 p-2 rounded-lg mb-1">
        {getIcon()}
      </div>
      <span className="text-sm text-white font-medium ">{label}</span>
    </div>
  );
};

export default DesktopIcon;
