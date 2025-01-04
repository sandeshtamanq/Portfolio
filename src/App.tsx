"use client";

import { useState } from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import Terminal from "./components/Terminal";
import ProjectsContent from "./components/ProjectsContent";
import CVContent from "./components/CVContent";
import ExperienceContent from "./components/ExperienceContent";
import StartMenu from "./components/StartMenu";

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleWindow = (id: string) => {
    if (openWindows.includes(id)) {
      if (minimizedWindows.includes(id)) {
        setMinimizedWindows(
          minimizedWindows.filter((windowId) => windowId !== id)
        );
        setActiveWindow(id);
      } else {
        setOpenWindows(openWindows.filter((windowId) => windowId !== id));
        setActiveWindow(openWindows[openWindows.length - 2] || null);
      }
    } else {
      setOpenWindows([...openWindows, id]);
      setActiveWindow(id);
    }
  };

  const minimizeWindow = (id: string) => {
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(
        minimizedWindows.filter((windowId) => windowId !== id)
      );
      setActiveWindow(id);
    } else {
      setMinimizedWindows([...minimizedWindows, id]);
      setActiveWindow(openWindows[openWindows.length - 2] || null);
    }
  };

  const windowContents: { [key: string]: React.ReactNode } = {
    projects: <ProjectsContent />,
    cv: <CVContent />,
    experience: <ExperienceContent />,
    terminal: <Terminal />,
  };

  return (
    <div className="h-screen bg-[url('/windows-11-background.jpg')] bg-cover bg-center overflow-hidden flex flex-col">
      <Desktop toggleWindow={toggleWindow}>
        {openWindows.map((windowId) => (
          <Window
            key={windowId}
            title={windowId.charAt(0).toUpperCase() + windowId.slice(1)}
            isActive={activeWindow === windowId}
            isMinimized={minimizedWindows.includes(windowId)}
            onClose={() => toggleWindow(windowId)}
            onFocus={() => setActiveWindow(windowId)}
            onMinimize={() => minimizeWindow(windowId)}
          >
            {windowContents[windowId]}
          </Window>
        ))}
      </Desktop>
      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        minimizedWindows={minimizedWindows}
        onWindowClick={(id) => {
          if (minimizedWindows.includes(id)) {
            minimizeWindow(id);
          } else {
            setActiveWindow(id);
          }
        }}
        isStartMenuOpen={isStartMenuOpen}
        toggleStartMenu={() => setIsStartMenuOpen(!isStartMenuOpen)}
      />
      {isStartMenuOpen && (
        <StartMenu
          onAppClick={(appId) => {
            toggleWindow(appId);
            setIsStartMenuOpen(false);
          }}
        />
      )}
    </div>
  );
}
