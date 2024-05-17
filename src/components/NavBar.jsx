import React, { useRef, useState } from "react";
import "../utils/styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const sectionToGo = document.getElementById(search);
      if (sectionToGo) {
        sectionToGo.scrollIntoView({ behavior: "smooth" });
      }
      setSearch("");
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <h2 className="nav-h2">50 Projects 50 Days</h2>
        <ul className="nav-ul">
          <li className="nav-ul-li link">
            <a
              href="https://github.com/JDiazc0"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <div className="search-box">
              <button className="btn-search" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                ref={inputRef}
                type="number"
                value={search}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                placeholder="Search"
                className="input-search"
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
