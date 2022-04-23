import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const ContactCard = () => {
  const { store, actions } = useContext(Context);
  console.log (store)
  return (
    <ul>
      {store.contactList &&
        store.contactList.map((data, index) => {
            return (
          <div key={index}className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
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
