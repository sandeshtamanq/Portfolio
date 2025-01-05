import { useEffect, useRef, useState } from "react";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [output, setOutput] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutput([...output, `$ ${input}`]);
    processCommand(input);
    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case "help":
        setOutput([...output, "Available commands: about, skills, contact"]);
        break;
      case "about":
        setOutput([
          ...output,
          "I am a passionate web developer with experience in React and Node.js",
        ]);
        break;
      case "skills":
        setOutput([
          ...output,
          "My skills include:  TypeScript, React, Asp.net, Node.js, and more.",
        ]);
        break;
      case "contact":
        setOutput([
          ...output,
          "Email: lamasandesh400@gmail.com",
          "GitHub: github.com/sandeshtamanq",
        ]);
        break;
      case "clear":
        setOutput([]);
        break;
      default:
        setOutput([...output, `Command not found: ${command}`]);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="bg-black text-green-400  font-mono h-full"
    >
      <div className="bg-black w-full p-4 rounded">
        <p>Welcome to the portfolio terminal!</p>
        <p>Type "help" for available commands.</p>
        <div className="mb-4">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <span className="mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              className="bg-transparent flex-grow focus:outline-none"
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
