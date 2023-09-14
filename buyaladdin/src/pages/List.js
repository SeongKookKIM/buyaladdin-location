import React, { useState } from "react";
import { LuChevronLeft, LuPlus } from "react-icons/lu";
import country from "../data/Country";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

function List() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  function handlerLink(it) {
    if (it.name === "KOREA") {
      navigate("/detail", { state: it });
    } else {
      handleShow();
    }
  }

  return (
    <div className="list">
      <div className="list-nav">
        <LuChevronLeft
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="nav-logo">
          <img src="/assets/image/logo.png" />
        </div>
      </div>

      <div className="list-title">
        <strong>Country Selection</strong>
        <span>
          Please select the country <br />
          you want to find.
        </span>
      </div>
      <div className="country">
        <ul>
          {country ? (
            <>
              {country.map((it, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      handlerLink(it);
                    }}
                  >
                    <img src={it.src} />
                    <span>{it.name}</span>
                  </li>
                );
              })}
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
      <Modal show={show} onHide={handleClose}>
        <div className="comming-soon">
          <LuPlus className="close" onClick={handleClose} />
          <Spinner animation="border" className="loader" />
          <strong>COMMIN SOON!</strong>
          <span>The service is not ready yet.</span>
        </div>
      </Modal>
    </div>
  );
}

export default List;
