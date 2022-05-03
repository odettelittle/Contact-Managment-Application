const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      getContact: () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/my_library",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setStore({ contactList: result }))
          .catch((error) => console.log("error", error));
      },
      addContact: (contact) => {
        var requestOptions = {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        };
        fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
          .then((response) =>
            response.status === 200 ? getActions().getContact() : ""
          )
          .catch((error) => console.log("error", error));
      },
      deleteContact: (contact_id) => {
        var requestOptions = {
          method: "DELETE",
        };
        fetch(
          `https://assets.breatheco.de/apis/fake/contact/${contact_id}`,
          requestOptions
        )
          .then((response) =>
            response.status === 200 ? getActions().getContact() : ""
          )
          .catch((error) => console.log("error", error));
      },

      editContact: (contact, contact_id) => {
        var requestOptions = {
          method: "PUT",
          redirect: "follow",
          headers: {
          "Content-Type":"application/json",
          },
          body: JSON.stringify(contact)
        };
        fetch(
          `https://assets.breatheco.de/apis/fake/contact/${contact_id}`,
          requestOptions
        )
          .then((response) =>
            response.status === 200 ? getActions().getContact() : ""
          )
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;

// (application/json)

//  body:
//     {
//         "full_name": "Dave Bradley",
//         "email": "dave@gmail.com",
//         "agenda_slug": "my_super_agenda",
//         "address":"47568 NW 34ST, 33434 FL, USA",
//         "phone":"7864445566"
//     }
