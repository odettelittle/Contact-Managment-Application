import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
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
    const { store, actions } = useContext(Context)
    let { id } = useParams();

  console.log("id", id)
  return (
    <>
      <form>
        {
          // contact ?
          //   <h1>Edit Contact</h1> :
            <h1>Add a Contact</h1>
        }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
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
          <label htmlFor="exampleInputEmail1" className="form-label">
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
          <label htmlFor="exampleInputEmail1" className="form-label">
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
          <label htmlFor="exampleInputEmail1" className="form-label">
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
          <Link to="/">
            <button className="btn btn-success align-self-center"
              onClick={(e) => {
                actions.addContact(data)
                e.preventDefault()
              }}
            > Save </button>
          </Link>
        </div>
      </form>

      <Link to="/">or get back to contacts</Link>
    </>
  );
};
