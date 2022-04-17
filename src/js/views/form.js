import React, { useEffect, useState } from "react";

export const Form = () => {
	const [data, setData] =
		useState({
			full_name: "",
			email: "",
			phone:"",
			address:"",
			agenda_slug:"my_library",
			email:"",
		});
  np
	useEffect(() => {


		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/my_library")
  		.then(response => response.text())
  		.then(result => console.log(result))
 	 	.catch(error => console.log('error', error));
	}, []);


/////////////////////////

const addContact = (newContact) => {
      const newData = [...data,{ label: newContact, done : false}];

	  var myHeaders = new Headers();
	  myHeaders.append("Content-Type", "application/json");

	  var raw = JSON.stringify(newList);

	  var requestOptions = {
		  method: "PUT",
		  headers: myHeaders,
		  body: raw,
		  redirect: "follow",
	  };

	  fetch(
		  "https://assets.breatheco.de/apis/fake/todos/user/my_library",
		  requestOptions
	  )
	  .then((response) =>
				response.status === 200 ? setList(newData) : ""
			)
			.catch((error) => console.log("error", error));
	};

////////////////////

const deleteContact = (itemDelete) => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify(itemDelete);

	var requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/my_library",
		requestOptions
	)
		.then((response) =>
			response.status === 200 ? setList(itemDelete) : ""
		)
		.catch((error) => console.log("error", error));
};

////////////////////////

};
