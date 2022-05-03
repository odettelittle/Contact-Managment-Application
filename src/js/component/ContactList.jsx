import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";

const ContactCard = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();

  return (
    <ul>
      {store.contactList &&
        store.contactList.map((data, index) => {
          console.log(data.id)
          return (
            <div key={index} className="card mb-3 mx-auto" style={{ maxWidth: "640px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" className="img-fluid rounded-circle ms-2" alt="..." />
                </div>
                <div className="col-md-4 offset-md-4">
                  <button className="w-5 align-self-center mt-5"
                    onClick={(e) => {
                      actions.deleteContact(data.id)
                    }}
                  ><i className="fa-solid fa-trash-can"></i></button>
                  <button className="w-5 align-self-center mt-5"
                    onClick={(e) => {
                      history.push(`/edit-contact/${data.id}`);
                    }}
                  ><i className="fa-solid fa-pencil"></i></button>
                </div>
                <div className="col-md-8 col-md-4 offset-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{data.full_name}</h5>
                    <p className="card-text">{data.address}</p>
                    <p className="card-text">{data.phone}</p>
                    <p className="card-text">{data.email}</p>
                  </div>
                </div>
              </div>
            </div>);
        })}
    </ul>
  );
};

export default ContactCard;

