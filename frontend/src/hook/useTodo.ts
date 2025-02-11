import axios from "axios";
import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";

export default function useTodo(id:string){
    const [todo, setTodo] = useState<Todo>()

    useEffect(() => {
        axios.get("/api/todo/" + id)
            .then(response => response.data)
            .then(body => {
                setTodo(body);
                console.log(body)})
            .catch(console.error)
    })

    return todo
}
