import React from "react";
import TodoRowItem from "./TodoRowItem";

function TodoTable(props: {todos: TodoModel[], deleteTodo: Function}) {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Description</th>
          <th scope='col'>Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(todo => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
        {/* <TodoRowItem
                rowNumber={props.todos[0].rowNumber}
                rowDescription={props.todos[0].rowDescription}
                rowAssigned={props.todos[0].rowAssigned}
              /> */}

      </tbody>
    </table>
  )
}

export default TodoTable;