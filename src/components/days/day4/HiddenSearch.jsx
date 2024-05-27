import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./HiddenSearch.css";
import FloatingButton from "../../FloatingButton";

export default function HiddenSearch() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleButton = () => {
    setActiveSearch(!activeSearch);
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
    <>
      <section id="4" className="section-HiddenSearch">
        <FloatingButton
          day="4"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day4"
          position="right"
        />
        <div
          className={`search-day4 ${
            activeSearch === true ? "active-day4" : ""
          }`}>
          <input
            ref={inputRef}
            type="number"
            className="input-day4"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <button className="btn-day4" onClick={handleButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </section>
    </>
  );
}
