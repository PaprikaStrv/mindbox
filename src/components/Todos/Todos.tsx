import { Box } from "@mui/material";
import React, {  useState } from "react";
import { TodosFooter } from "./components/TodosFooter/TodosFooter";
import { TodosList } from "./components/TodosList/TodosList";
import { TodosInput } from "./components/TodosInput/TodosInput";

export enum TodoStateEnum {
  active,
  completed,
}

export enum FilterTodosEnum {
  all = "all",
  active = "active",
  completed = "completed",
}

export interface TodosDTO {
  id: string;
  title: string;
  state: TodoStateEnum;
}

const defaultTodos = [
  {
    id: `testTodo1 ${new Date().toISOString()}`,
    title: "testTodo1",
    state: TodoStateEnum.active,
  },
  {
    id: `testTodo2 ${new Date().toISOString()}`,
    title: "testTodo2",
    state: TodoStateEnum.completed,
  },
];

export const Todos = () => {
  const [todos, setTodos] = React.useState<TodosDTO[]>(defaultTodos);
  const [filterValue, setFilterValue] = useState(FilterTodosEnum.all);

  const handleAddTodo = (todo: TodosDTO) => {
    setTodos([...todos, todo]);
  };

  const activeTodos =
    filterValue === FilterTodosEnum.completed
      ? []
      : todos.filter((todo) => todo.state === TodoStateEnum.active);

  const handleCompleteTodo = (todoId: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, state: TodoStateEnum.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  return (
    <Box
      sx={{
        padding: 4,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <TodosInput
        onAddTodo={handleAddTodo}
        resetFilterValue={() => setFilterValue(FilterTodosEnum.all)}
      />
      <TodosList
        todos={todos}
        filterValue={filterValue}
        onCompleteTodo={handleCompleteTodo}
      />
      <TodosFooter
        activeItemsAmount={activeTodos.length}
        filterValue={filterValue}
        setFilterValue={(filterNewValue: FilterTodosEnum) =>
          setFilterValue(filterNewValue)
        }
        onClearTodos={handleClearTodos}
      />
    </Box>
  );
};
