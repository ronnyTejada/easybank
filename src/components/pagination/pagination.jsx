import React, { useEffect, useState } from "react";
import Next from "./next";
import Prev from "./prev";
import "./style.css";

const Pagination = ({ rows, setStart, setEnd, setCurrentPage, currentPage }) => {
  const [limit, setLimit] = useState(10);
  const [init, setInit] = useState(1);
 
  useEffect(() => {
    if (currentPage === limit) {
      setInit((prev) => (prev = limit));
      setLimit((prev) => (prev += 10));
    } else if (currentPage < init) {
      setInit((prev) => (prev -= 10));
      setLimit((prev) => (prev -= 10));
    }
  }, [currentPage]);

  

  return (
    <div>
      <ul className="paginate">
        {rows.slice(init, limit).map((item) => {
          return (
            <li
              className={`paginate__item ${
                currentPage === item ? "paginate__item--active" : ""
              }`}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="btn__wrapper">
        <Prev
          setCurrentPage={setCurrentPage}
          setLimit={setLimit}
          currentPage={currentPage}
          setEnd={setEnd}
          setStart={setStart}
        />
        {currentPage + 1 !== rows.length && (
          <Next
            setCurrentPage={setCurrentPage}
            setEnd={setEnd}
            setStart={setStart}
            setLimit={setLimit}
          />
        )}
      </div>
    </div>
  );
};

export default Pagination;
