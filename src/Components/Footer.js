import React from 'react'

function Footer(props) {
  return (
      <div className="table table-hover">Footer 
      <table striped bordered hover>
           
        <tr >
          {" "}
          <td>UserId</td>
          <td>Id</td>
          <td>Email</td>
          <td>Body</td>
        </tr>
        
       
        
        {props.data.map((item) => (
          <tr className="table-hover" key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>



    </div>
  )
}

export default Footer