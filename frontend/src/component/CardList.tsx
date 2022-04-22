import {Todo} from "../model/Todo";
import Card from "./Card";

export type CardsProps = {
    todos: Todo []
}

export default function CardList({todos}:CardsProps) {
    return (
      <> <div>
            {
                todos.map(t => <Card todo={t}/>)
            }
      </div>
      </>
    )
}