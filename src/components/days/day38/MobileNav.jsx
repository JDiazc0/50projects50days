import React, { useState } from "react";
import "./MobileNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faBookOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "../../FloatingButton";

export default function MobileNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contents = [
    {
      src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
      alt: "home",
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "work",
    },
    {
      src: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      alt: "blog",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      alt: "about",
    },
  ];

  const navItems = [
    { icon: faHome, text: "Home" },
    { icon: faBox, text: "Work" },
    { icon: faBookOpen, text: "Blog" },
    { icon: faUsers, text: "About Us" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="38" className="section-MobileNav">
      <FloatingButton
        day="38"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day38"
        position="left"
      />
      <div className="phone">
        {contents.map((content, index) => (
          <img
            key={content.alt}
            src={content.src}
            alt={content.alt}
            className={`content ${index === activeIndex ? "show" : ""}`}
          />
        ))}
        <nav className="nav-day38">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={item.text}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleClick(index)}>
                <FontAwesomeIcon icon={item.icon} />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
