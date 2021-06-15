import React, { useState } from "react";
import Modal from "react-modal";

function ListItems({ item }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <div className="item-content" onClick={openModal}>
        <div>
          <h5>{item.word}</h5>
        </div>
        <p>
          <i>({item.items && item.items[0].category})</i>{" "}
          <span>{item.items && item.items[0].definitions[0]}</span>
        </p>
      </div>
      <Modal isOpen={modal} ariaHideApp={true}>
        <div className="modal-header">
          <h3 className="modal-word-header">
            {item.word && item.word.toLowerCase()}
          </h3>
          <button
            className="btn btn-dark btn-sm close-btn"
            onClick={() => setModal(false)}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="modal-content">
          <p>
            {item.items &&
              item.items.map((e) => {
                return (
                  <>
                    <i style={{ color: "gray" }}>{e.category}</i>
                    <ul>
                      {e.definitions.map((def) => {
                        return <li>{def}</li>;
                      })}
                    </ul>
                  </>
                );
              })}
          </p>
        </div>
      </Modal>
    </>
  );
}

export default ListItems;
