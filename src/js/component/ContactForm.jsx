import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Form = () => {
  const [data, setData] = useState 
  ({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "my_library",
    email: "",
  });

const {store,actions} = useContext(Context)

  console.log(data)
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Full name 
          </label>
          <input
            type="input"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setData({ ...data, full_name: e.target.value })}
            value={data.full_name}
          />
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
          <label for="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="input"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            value={data.phone}
          />
          <label for="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            type="input"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address} />

        </div>
        <div className=" d-flex justify-content-center">
          <button className="btn btn-success align-self-center"
          onClick={(e)=>{ 
          actions.addContact(data)
          e.preventDefault()
        }}

          > Save </button>
        </div>
      </form>

      <Link to="/">or get back to contacts</Link>
    </>
  );
};
