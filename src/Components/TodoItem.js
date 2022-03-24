import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { Button, Box } from "@mui/material";
import Pagination2 from "./Pagination2.js";
import TableBody from "@mui/material/TableBody";

function TodoItem() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  function getdataList() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.data)
      .then((data) => {
        setData(data);
      });
  }
  useEffect(() => {
    getdataList();
  }, []);
  // const handlePrevClick = () => {
  //   setPagination({ currentPage: pagination.currentPage - 1 })
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/posts${pagination.currentPage-1}`)
  //   .then((resp) => resp.data)
  //   .then((data) => {
  //     setData(data);
  //   });
  // }
  // const handleNextClick = () => {
  //   setPagination({ currentPage: pagination.currentPage + 1 });
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/posts${pagination.currentPage+1}`)
  //   .then((resp) => resp.data)
  //   .then((data) => {
  //     setData(data);
  //   });
  // }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="table">
        <Paper
          sx={{
            border: "1px solid black",
            mt: "30px",
            width: "100vh",
            height: "100vh",
            variant: "outlined",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UserId</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentPosts.map((item) => {
                return (
                  <TableRow hover key={item.id}>
                    <TableCell>{item.userId}</TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.body}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {/* <Box sx={{display:"flex", justifyContent:"space-between"}}> 
    <Button variant="contained"  >&larr;Previous</Button>
          <Button variant="contained" >Next&rarr;</Button></Box> */}
          {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          /> */}
          {/* <Pagination2/> */}
        </Paper>
      </div>
    </>
  );
}

export default TodoItem;
