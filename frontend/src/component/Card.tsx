import {Todo} from "../model/Todo";
import axios from "axios";

export type TodoProperty = {
    todo: Todo
}

export default function Card({todo}: TodoProperty) {

    const clickEvent = (todo:any) => {
        let status1
        {todo.status==="open" ? status1 = "pending" : status1 = "closed"}
        const newTodo: Todo = {id: todo.id, description: todo.description, status: status1}
        axios.put("/api/todo/" + todo.id, newTodo)
            .then(response => response.data)
            .catch(e => console.log(e))
    }

    return (
        <>
            <div>{todo.id}</div>
            <div>{todo.description}</div>
            <div>{todo.status}</div>
            { todo.status !== "closed" ?
                <button onClick={clickEvent}>Advance</button> : <div>H</div>
            }
        </>
    )
}