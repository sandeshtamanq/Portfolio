import {
  Folder,
  FileText,
  Briefcase,
  Terminal,
  Search,
  Wifi,
  Volume2,
  Battery,
  MessageSquare,
} from "lucide-react";

interface TaskbarProps {
  openWindows: string[];
  activeWindow: string | null;
  minimizedWindows: string[];
  onWindowClick: (id: string) => void;
  isStartMenuOpen: boolean;
  toggleStartMenu: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({
  openWindows,
  activeWindow,
  minimizedWindows,
  onWindowClick,
  isStartMenuOpen,
  toggleStartMenu,
}) => {
  const getIcon = (windowId: string) => {
    switch (windowId) {
      case "projects":
        return <Folder className="w-4 h-4" />;
      case "cv":
        return <FileText className="w-4 h-4" />;
      case "experience":
        return <Briefcase className="w-4 h-4" />;
      case "terminal":
        return <Terminal className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black bg-opacity-70 backdrop-blur-md text-white p-1 flex items-center justify-between">
      <div className="flex items-center">
        <button
          className={`p-2 rounded-md hover:bg-white hover:bg-opacity-10 ${
            isStartMenuOpen ? "bg-white bg-opacity-10" : ""
          }`}
          onClick={toggleStartMenu}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 23 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"
            />
          </svg>
        </button>
        <button className="p-2 rounded-md hover:bg-white hover:bg-opacity-10 ml-2">
          <Search className="w-5 h-5" />
        </button>
      </div>
      <div className="flex space-x-1">
        {openWindows.map((windowId) => (
          <button
            key={windowId}
            className={`p-2 rounded-md text-black ${
              activeWindow === windowId
                ? "bg-white bg-opacity-10"
                : minimizedWindows.includes(windowId)
                ? "opacity-50 hover:opacity-100"
                : "hover:bg-white hover:bg-opacity-10"
            }`}
            onClick={() => onWindowClick(windowId)}
          >
            <div className="flex items-center">
              {getIcon(windowId)}
              <span className="ml-2">
                {windowId.charAt(0).toUpperCase() + windowId.slice(1)}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <Wifi className="w-4 h-4" />
        <Volume2 className="w-4 h-4" />
        <Battery className="w-4 h-4" />
        <MessageSquare className="w-4 h-4" />
        <span className="text-sm">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
