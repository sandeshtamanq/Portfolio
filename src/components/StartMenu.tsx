import { Folder, FileText, Briefcase, Terminal, User, Cog } from "lucide-react";

interface StartMenuProps {
  onAppClick: (appId: string) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onAppClick }) => {
  const apps = [
    { id: "projects", name: "Projects", icon: Folder },
    { id: "cv", name: "CV", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "terminal", name: "Terminal", icon: Terminal },
  ];

  return (
    <div className="absolute bottom-12 left-0 w-96 bg-black bg-opacity-70 backdrop-blur-md text-white rounded-lg p-4 shadow-lg">
      <div className="grid grid-cols-3 gap-4">
        {apps.map((app) => (
          <button
            key={app.id}
            className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            onClick={() => onAppClick(app.id)}
          >
            <app.icon className="w-10 h-10 mb-2" />
            <span className="text-sm">{app.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white border-opacity-20 flex justify-between">
        <button className="flex items-center space-x-2 hover:bg-white hover:bg-opacity-10 rounded-lg p-2">
          <User className="w-6 h-6" />
          <span>User</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-white hover:bg-opacity-10 rounded-lg p-2">
          <Cog className="w-6 h-6" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
