import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content";
import Modal from "react-modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWordtoDictAsync } from "./reducers/dictionarySlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (word === "") {
      alert("Please enter a word to proceed");
    } else {
      dispatch(addWordtoDictAsync({ word: word.toLowerCase() }));
      setWord("");
      setModal(false);
    }
  };

  return (
    <div className="App container">
      <div className="app-header">
        <h1 className="header-content">Vocab</h1>
        <div className="search">
          <input
            type="text"
            id="search-word"
            placeholder="Search"
            onChange={(e) =>
              setSearchWord(e.target.value.replace(/[^A-Za-z]/, ""))
            }
            value={searchWord}
            autoComplete="off"
          />
          <button>
            <i class="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <Content searchWord={searchWord} />
      <button className="add-word-btn" onClick={(e) => setModal(true)}>
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      <Modal isOpen={modal} ariaHideApp={true} style={customStyles}>
        <div className="modal-header">
          <h4 className="modal-word-header">Add Word</h4>
          <button
            className="btn btn-dark btn-sm close-btn"
            onClick={() => setModal(false)}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="add-word-modal-content">
          <input
            type="text"
            id="word"
            onChange={(e) => setWord(e.target.value.replace(/[^A-Za-z]/gi, ""))}
            value={word}
            placeholder="Enter the word.."
            autoComplete="off"
          />
          <button className="btn-primary add-word" onClick={handleClick}>
            Add Word
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
