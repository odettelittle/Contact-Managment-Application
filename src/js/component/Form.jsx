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
  useEffect(() => {
    id && setData(store.contactList.filter(element => element.id == id)[0])
  }, [])
  console.log("data on form",data)
  // const addContact = (e) => {
  //   e.preventDefault();
  //   console.log("ok")
  //   actions.addContact(data)
  // };
  // const editContact = (e) => {
  //   e.preventDefault();
  //   actions.editContact(data, data.id)
  //};
  return (
    <>
      <form>
        {
          id ? <h1>Edit</h1> : <h1>Add</h1>
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
              onClick={() => id ? actions.editContact(data, data.id) : actions.addContact(data)}
            > Save </button>
          </Link>
        </div>
      </form>

      <Link to="/">or get back to contacts</Link>
    </>
  );
};
