import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([
        { task: "sample-task", id: uuidv4(), isDone: false }
    ]);

    let [newTodo, setNewTodo] = useState("");

    // Add new task
    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                {
                    task: newTodo,
                    id: uuidv4(),
                    isDone: false
                }
            ];
        });

        setNewTodo("");
    };

    // Update input value
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // Delete task
    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id != id);
        });
    };

    // Mark ONE task as done
    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    // Convert ALL tasks to done
    let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone:true,
                };
            })
        );
    };

    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />

            <br />

            <button onClick={addNewTask}>
                Add Task
            </button>

            <br />
            <br />

            <hr />

            <h4>Tasks Todo</h4>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={
                                todo.isDone
                                    ? { textDecorationLine: "line-through" }
                                    : {}
                            }
                        >
                            {todo.task}
                        </span>

                        &nbsp;&nbsp;&nbsp;

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>

                        <button onClick={() => markAsDone(todo.id)}>
                            Done
                        </button>
                    </li>
                ))}
            </ul>

            <br />

            <button onClick={markAllDone}>
               All Donel
            </button>
        </div>
    );
}