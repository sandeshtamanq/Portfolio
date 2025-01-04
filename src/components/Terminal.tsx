import { useState } from "react";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to the portfolio terminal!",
    'Type "help" for available commands.',
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
    return;
    setOutput([...output, `$ ${input}`]);
    processCommand(input);
  };

  const processCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case "help":
        setOutput([...output, "Available commands: about, skills, contact"]);
        break;
      case "about":
        setOutput([
          ...output,
          "I am a passionate web developer with experience in React and Next.js.",
        ]);
        break;
      case "skills":
        setOutput([
          ...output,
          "My skills include: JavaScript, TypeScript, React, Next.js, Node.js, and more.",
        ]);
        break;
      case "contact":
        setOutput([
          ...output,
          "Email: your.email@example.com",
          "GitHub: github.com/yourusername",
        ]);
        break;
      default:
        setOutput([...output, `Command not found: ${command}`]);
    }
  };

  return (
    <div className="bg-black text-green-400 p-4 font-mono h-full">
      {/* <div className="mb-4">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <span className="mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="bg-transparent flex-grow focus:outline-none"
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal;
