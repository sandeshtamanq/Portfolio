import { help, about, error, education, contact, projects } from "../../commands/commandList";

export const commands = (command: string): any => {
  switch (command) {
    case "help":
      return help;

    case "about":
      return about;

    case "projects":
      return projects;

    case "education":
      return education;

    case "contact":
      return contact;

    default:
      return error;
  }
};
