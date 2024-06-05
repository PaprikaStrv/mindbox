import {
  FilterTodosEnum,
  TodoStateEnum,
  TodosDTO,
} from "@components/Todos/Todos";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";

interface TodosList {
  todos: TodosDTO[];
  filterValue: FilterTodosEnum;
  onCompleteTodo: (todoId: string) => void;
}

export const TodosList: React.FC<TodosList> = ({
  todos,
  filterValue,
  onCompleteTodo,
}) => {
  const [isOpen, setOpen] = React.useState(true);

  const filterTodosList = () => {
    switch (filterValue) {
      case FilterTodosEnum.all:
        return todos;
      case FilterTodosEnum.active:
        return todos.filter((todo) => todo.state === TodoStateEnum.active);
      case FilterTodosEnum.completed:
        return todos.filter((todo) => todo.state === TodoStateEnum.completed);
      default:
        return todos;
    }
  };

  return (
    <List>
      <ListItemButton onClick={() => setOpen(!isOpen)}>
        Show/hide todos list
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={isOpen}>
        {filterTodosList().map(({ id, title, state }) => (
          <ListItemButton
            key={id}
            disabled={state === TodoStateEnum.completed}
            onClick={() => onCompleteTodo(id)}
          >
            <Checkbox checked={state === TodoStateEnum.completed} />
            <Typography
              sx={{
                textDecoration:
                  state === TodoStateEnum.completed ? "line-through" : "none",
              }}
            >
              {" "}
              {title}
            </Typography>
          </ListItemButton>
        ))}
      </Collapse>
    </List>
  );
};
