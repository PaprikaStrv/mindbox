import { FilterTodosEnum } from "@components/Todos/Todos";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

interface TodosFooterProps {
  activeItemsAmount: number;
  filterValue: FilterTodosEnum;
  onClearTodos: () => void;
  setFilterValue: (filterValue: FilterTodosEnum) => void;
}

export const TodosFooter: React.FC<TodosFooterProps> = ({
  activeItemsAmount,
  filterValue,
  onClearTodos,
  setFilterValue,
}) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography>{activeItemsAmount} items left</Typography>
      <Stack direction={"row"} spacing={1}>
        <Button
          variant={filterValue === FilterTodosEnum.all ? "outlined" : "text"}
          onClick={() => setFilterValue(FilterTodosEnum.all)}
        >
          All
        </Button>
        <Button
          variant={filterValue === FilterTodosEnum.active ? "outlined" : "text"}
          onClick={() => setFilterValue(FilterTodosEnum.active)}
        >
          Active
        </Button>
        <Button
          variant={
            filterValue === FilterTodosEnum.completed ? "outlined" : "text"
          }
          onClick={() => setFilterValue(FilterTodosEnum.completed)}
        >
          Completed
        </Button>
      </Stack>
      <Button onClick={() => onClearTodos()}>Clear all</Button>
    </Box>
  );
};
