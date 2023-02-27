import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, hanldeToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <h1>TodoApp { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-6">
                    <TodoList
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ hanldeToggleTodo }
                    />
                </div>
                <div className="col-5 offset-1">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>

        </>
    )
}
