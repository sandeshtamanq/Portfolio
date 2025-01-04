import { ReactNode } from "react";
import DesktopIcon from "./DesktopIcon";

interface DesktopProps {
  children: ReactNode;
  toggleWindow: (id: string) => void;
}

const Desktop: React.FC<DesktopProps> = ({ children, toggleWindow }) => {
  const icons = [
    { id: "projects", label: "My Projects" },
    { id: "cv", label: "My CV" },
    { id: "experience", label: "My Experience" },
    { id: "terminal", label: "Terminal" },
  ];

  return (
    <div className="flex-grow bg-[url('https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg')] bg-cover relative">
      <div className="absolute top-4 left-4 grid grid-cols-1 gap-4">
        {icons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            onClick={() => toggleWindow(icon.id)}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Desktop;
