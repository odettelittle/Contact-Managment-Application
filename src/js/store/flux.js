const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],	
		},
		actions: { 
		
			getContact: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://assets.breatheco.de/apis/fake/contact/agenda/my_library", requestOptions)
					.then(response => response.text())
					.then(result => setStore({contactList : result}))
					.catch(error => console.log('error', error));

			},
			addContact: (contact) => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/my_library", {
				  method: "PUT",
				  redirect: "follow",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify([
					...getStore().contactList,
					{ label: contact, done: false },
				  ]),
				})
				  .then((response) =>
					response.status === 200 ? getActions().getData() : ""
				  )
				  .catch((error) => console.log("error", error));
			  },


		}
	};
};

export default getState;
