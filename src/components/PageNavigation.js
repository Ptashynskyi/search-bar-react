import React from "react";

export default props => {
  const {
    loading,
    showPrevLink,
    showNextLink,
    handlePrevClick,
    handleNextClick
  } = props;
  return (
    <div className="nav-link-container">
      <button
        className={`nav-link${showPrevLink ? "show" : "hide"}
        ${loading ? "greyed-out" : ""}`}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className={`nav-link ${showNextLink ? "show" : "hide"}
					${loading ? "greyed-out" : ""}`}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};
