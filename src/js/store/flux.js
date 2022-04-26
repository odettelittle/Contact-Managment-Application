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
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(),
        })
          .then((response) =>
            response.status === 200 ? getActions().getData() : ""
          )
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;

// POST: /apis/fake/contact/
// Request (application/json)

//     body:
//     {
//         "full_name": "Dave Bradley",
//         "email": "dave@gmail.com",
//         "agenda_slug": "my_super_agenda",
//         "address":"47568 NW 34ST, 33434 FL, USA",
//         "phone":"7864445566"
//     }
