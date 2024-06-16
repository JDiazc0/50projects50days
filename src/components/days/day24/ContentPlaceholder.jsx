import React, { useState, useEffect } from "react";
import "./ContentPlaceholder.css";
import FloatingButton from "../../FloatingButton";

export default function ContentPlaceholder() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        header:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        title: "Lorem ipsum dolor sit amet",
        excerpt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
        profile_img: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "John Doe",
        date: "Oct 08, 2020",
      });
    }, 2500);
  }, []);

  return (
    <section id="24" className="section-ContentPlaceholder">
      <FloatingButton
        day="24"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day24"
        position="left"
      />
      <div className="card">
        <div className={`card-header ${!data ? "animated-bg" : ""}`}>
          {data && <img src={data.header} alt="Beautiful landscape" />}
        </div>
        <div className="card-content">
          <h3
            className={`h3-day24 ${
              !data ? "animated-bg animated-bg-text" : ""
            }`}>
            {data ? data.title : ""}
          </h3>
          <p className="card-excerpt">
            {data ? (
              data.excerpt
            ) : (
              <>
                <span className="animated-bg animated-bg-text">&nbsp;</span>
                <span className="animated-bg animated-bg-text">&nbsp;</span>
                <span className="animated-bg animated-bg-text">&nbsp;</span>
              </>
            )}
          </p>
          <div className="author-day24">
            <div className={`profile-img ${!data ? "animated-bg" : ""}`}>
              {data && <img src={data.profile_img} alt="John Doe's portrait" />}
            </div>
            <div className="author-info-day24">
              <strong
                className={` ${!data ? "animated-bg animated-bg-text" : ""}`}>
                {data ? data.name : ""}
              </strong>
              <small
                className={` ${!data ? "animated-bg animated-bg-text" : ""}`}>
                {data ? data.date : ""}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
