import axios from "axios";
import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";

export default function useTodo(id:string){
    const [todos, setTodos] = useState<Todo[]>([])

    const path:string = "/api/todo/"

    useEffect(() => {
        axios.get("http://localhost:8080/api/todo/"+id)
            .then(response => response.data)
            .then(body => {
                setTodos(body);
                console.log(body);
                console.log(body)})
            .catch(console.error)
    },[])

    return todos[0]
}