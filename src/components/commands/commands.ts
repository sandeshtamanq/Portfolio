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
      return "This command doesn't exist please type help";
  }
};
