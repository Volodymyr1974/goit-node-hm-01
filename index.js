const argv = require("yargs").argv;
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContactsList = await contacts.listContacts();
      console.table(allContactsList);
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      console.table(contactById);

      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.table(newContact);

      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.table(removeContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
