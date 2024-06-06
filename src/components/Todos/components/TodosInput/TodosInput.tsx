import { TodoStateEnum, TodosDTO } from "@components/Todos/Todos";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import {v4 as uuid } from "uuid";

interface TodosInputProps {
  onAddTodo: (todo: TodosDTO) => void;
  resetFilterValue: () => void;
}

export const TodosInput: React.FC<TodosInputProps> = ({
  onAddTodo,
  resetFilterValue,
}) => {
  const [value, setValue] = useState("");

  const onInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    onAddTodo({
      id: uuid(),
      state: TodoStateEnum.active,
      title: value,
    });
    setValue("");
    resetFilterValue();
  };

  return (
    <Box display={"flex"} alignItems={"center"}>
      <TextField
        value={value}
        onChange={onInputChange}
        fullWidth
        placeholder="Input todo title"
        inputProps={{
          "data-testid": "todo-input-field",
        }}
      />
      <Button data-testid="add-todo-test-id" variant="outlined" sx={{ ml: 4 }} onClick={handleAddTodo}>
        Add
      </Button>
    </Box>
  );
};
