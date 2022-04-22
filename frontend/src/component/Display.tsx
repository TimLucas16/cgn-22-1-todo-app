import CardList from "./CardList";
import useTodos from "../hook/useTodos";
import {Todo} from "../model/Todo";
//import "../stylesheets/Display.css"

export default function Display() {

    const todos: Todo [] = useTodos()

    const todosOpen = todos.filter(
        t => t.status === "open"
    )

    const todosPending = todos.filter(
        t => t.status === "pending"
    )

    const todosClosed = todos.filter(
        t => t.status === "closed"
    )

    return (
        <>
            <div><CardList todos={todosOpen}/></div>
            <div><CardList todos={todosPending}/></div>
            <div><CardList todos={todosClosed}/></div>
        </>
    )
}