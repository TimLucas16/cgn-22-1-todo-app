import {Todo} from "../model/Todo";

export type TodoProperty = {
    todo: Todo
}

export default function Card({todo}: TodoProperty) {
    return (
        <>
            <div>{todo.id}</div>
            <div>{todo.description}</div>
            <div>{todo.status}</div>
        </>
    )
}