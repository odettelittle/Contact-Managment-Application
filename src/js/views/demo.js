import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../component/Form.jsx"

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Form/>
		</div>
	);
};
