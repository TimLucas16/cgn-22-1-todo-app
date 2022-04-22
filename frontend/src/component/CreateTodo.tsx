import {ChangeEvent, FormEvent, useState} from "react";
import {Todo} from "../model/Todo";
import usePost from "../hook/usePost";

export default function CreateTodo() {

    const [description, setDescription] = useState("")
    const status = "open"

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        const todo:Todo = {description, status}
        usePost(todo)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"}  required value={description} onChange={handleChange}/>
                <button type={"submit"} value={"Submit"}>submit</button>
            </form>
        </div>
    )
}