import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";
import "bootstrap/dist/css/bootstrap.min.css";

function Lists(props) {
  let listRows = [];

  props.alldata.forEach((element) => {
    listRows.push(
      // MongoDB documents use _id as the unique identifier
      <tr key={element._id}>
        <td>{element.title}</td>
        <td>{element.author}</td>
        <td>
          <UpdateList
            elementId={element._id}
            singledata={props.singledata}
            getList={props.getList}
            updateList={props.updateList}
            handleChange={props.handleChange}
          />
        </td>
        <td>
          <DeleteList
            elementId={element._id}
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}
          />
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{listRows}</tbody>
    </table>
  );
}

export default Lists;
