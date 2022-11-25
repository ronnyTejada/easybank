import React from "react";
import right from "../../assets/right.png";

const Next = ({ setCurrentPage, setStart, setEnd }) => {
  const handleClick = () => {
    setCurrentPage((prev) => prev + 1);

    // setStart((prev) => (prev += 5));
    // setEnd((prev) => (prev += 5));
  };

  return (
    <div className="paginate__wrapper">
      <button className="paginate__btn" onClick={() => handleClick()}>
        Next
      </button>
      <img src={right} alt="" />
    </div>
  );
};

export default Next;
