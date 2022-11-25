import React from "react";
import left from "../../assets/left.png";

const Prev = ({ setCurrentPage, currentPage, setStart, setEnd }) => {
  const handleClick = () => {
    setCurrentPage((prev) => prev - 1);
    // setStart((prev)=> prev -= 5)
    //    setEnd((prev)=> prev -= 5)
  };
  return (
    <div className="paginate__wrapper">
      <img src={left} alt="" />
      <button
        className="paginate__btn"
        disabled={currentPage === 1}
        onClick={() => handleClick()}
      >
        Previous
      </button>
    </div>
  );
};

export default Prev;
