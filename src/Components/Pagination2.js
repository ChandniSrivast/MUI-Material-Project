import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const [postperPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/photos");
    const data = resp.data;
    const indexOfLastPost = currentPage * postperPage;
    const indexOfFirstPost = indexOfLastPost - postperPage;
    const slice = data.slice(indexOfFirstPost, indexOfLastPost);
    const postData = slice.map((item) => {
      return (
        <div
          style={{ display: "flex", justifyContent: "space-evenly" }}
          key={item.id}
        >
          <h2>{item.id}</h2>
          <h5>{item.title}</h5>
          <img src={item.thumbnailUrl} alt="demo" />
        </div>
      );
    });
    setData(postData);
    setPageCount(Math.ceil(data.length / postperPage));
  };
  useEffect(() => {
    getData();
  }, [currentPage]);
  const handleClickPage = (e) => {
    let selected = e.selected;
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <div>
        {data}

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"li"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handleClickPage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>{" "}
    </>
  );
}

export default Pagination2;
