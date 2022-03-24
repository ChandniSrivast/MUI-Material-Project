// import { useEffect, useState } from "react";
// import Footer from "./Components/Footer";
import Pagination2 from './Components/Pagination2'
import "./App.css";
// import GoogleMap from "./Components/GoogleMap";
import TodoItem from "./Components/TodoItem";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
  //     result.json().then((resp) => {
  //       // console.log('result',resp);
  //       setData(resp);
  //     });
  //   });
  // }, []);
  // console.log("data", data);

  return (
    <div className="App">
      {/* <TodoItem /> */}
      <Pagination2/>
      
  {/* <GoogleMap/> */}
      {/* <Footer data={data}/> */}
    </div>
  );
}

export default App;
