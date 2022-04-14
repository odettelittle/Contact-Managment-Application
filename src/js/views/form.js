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
  
    return (

	useEffect(() => {


		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/my_library")
  		.then(response => response.text())
  		.then(result => console.log(result))
 	 	.catch(error => console.log('error', error));
	}, [])


/////////////////////////

const addContact = (newContact) => {
      const newData = [...data,{ ]

)        
};
