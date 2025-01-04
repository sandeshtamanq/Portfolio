import { ReactNode, useState, useRef, useEffect, useCallback } from "react";
import { X, Minus, Maximize, Minimize } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  isMinimized: boolean;
  onClose: () => void;
  onFocus: () => void;
  onMinimize: () => void;
}

const Window: React.FC<WindowProps> = ({
  title,
  children,
  isActive,
  isMinimized,
  onClose,
  onFocus,
  onMinimize,
}) => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMinimize = () => {
    onMinimize();
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.classList.contains("window-header") &&
      !isFullscreen
    ) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && !isFullscreen) {
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;
        setPosition({ x: newX, y: newY });
      }
    },
    [isDragging, isFullscreen, dragStart]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isFullscreen, position, dragStart, handleMouseMove]);

  if (isMinimized) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className={`absolute bg-white rounded-lg shadow-lg overflow-hidden ${
        isActive ? "z-10" : "z-0"
      } ${isFullscreen ? "w-full h-full top-0 left-0" : ""}`}
      style={
        isFullscreen
          ? {}
          : {
              width: "75%",
              height: "75%",
              top: `${position.y}px`,
              left: `${position.x}px`,
            }
      }
      onClick={onFocus}
      onMouseDown={handleMouseDown}
    >
      <div className="window-header bg-gray-200 px-4 py-2 flex justify-between items-center">
        <h2 className="text-sm font-semibold text-black">{title}</h2>
        <div className="flex space-x-2">
          <button onClick={handleMinimize} className="focus:outline-none">
            <Minus className="w-4 h-4 text-black" />
          </button>
          <button onClick={handleFullscreen} className="focus:outline-none">
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-black" />
            ) : (
              <Maximize className="w-4 h-4 text-black" />
            )}
          </button>
          <button onClick={onClose} className="focus:outline-none">
            <X className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
      <div className="p-4 h-[calc(100%-2.5rem)] overflow-auto text-black">
        {children}
      </div>
    </div>
  );
};

export default Window;
