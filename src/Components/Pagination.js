import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <a onClick={(e) => e.preventDefault()}>&laquo;</a>
      {/* <ul style={{ display: "flex", justifyContent:"space-between"}}> */}
      {pageNumbers.map((number) => {
        return (
          <>
            <a
              key={number}
              className="active"
              href="#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </>
        );
      })}
      {/* </ul> */}
      <a onClick={(e) => e.preventDefault()} href="/">&raquo;</a>
    </div>
  );
};
export default Pagination;
