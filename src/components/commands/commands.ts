import { about, contact, education, help, projects } from "./commandLists";

export const commands = (command: string): string => {
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

    case "":
      return "";

    default:
      return `'${command}' is not recognized as an internal command. Please type 'help' to view all the available commands`;
  }
};
