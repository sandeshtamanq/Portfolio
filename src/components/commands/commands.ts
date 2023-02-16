import { help } from "./commandLists";

export const commands = (command: string): string => {
  const about = `
    <div>Hello My name is Sandesh Tamang</div>
  `;
  switch (command) {
    case "help":
      return help;

    case "about":
      return about;

    case "projects":
      return "Ooops Nothing to show yet! Please check back later";

    case "education":
      return "Ooops Nothing to show yet! Please check back later";

    case "contact":
      return "Ooops Nothing to show yet! Please check back later";

    case "":
      return "";

    default:
      return "This command doesn't exist please type help";
  }
};
