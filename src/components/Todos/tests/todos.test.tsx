import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodosInput } from "../components/TodosInput/TodosInput";
import { TodoStateEnum } from "../Todos";

describe("Todo input tests", () => {
  it("should render input and button", () => {
    render(<TodosInput onAddTodo={() => {}} resetFilterValue={() => {}} />);
    expect(screen.getByTestId("todo-input-field")).toBeInTheDocument();
    expect(screen.getByTestId("add-todo-test-id")).toBeInTheDocument();
  });

  it("should call onAddTodo handler", () => {
    const onAddTodoSpy = vi.fn();
    const inputValue = "test input value";


    render(<TodosInput onAddTodo={onAddTodoSpy} resetFilterValue={() => {}} />);

    const input = screen.getByTestId("todo-input-field");
    const addButton = screen.getByTestId("add-todo-test-id");

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.click(addButton);

    expect(onAddTodoSpy).toHaveBeenCalledWith({
      id: expect.any(String),
      state: TodoStateEnum.active,
      title: inputValue,
    });
  });

  it("should clear input after add todo", () => {
    render(<TodosInput onAddTodo={() => {}} resetFilterValue={() => {}} />);

    const input = screen.getByTestId("todo-input-field") as HTMLInputElement;
    const addButton = screen.getByTestId("add-todo-test-id");

    fireEvent.change(input, { target: { value: "inputValue" } });
    fireEvent.click(addButton);

    expect(input.value).toBe("");
  });
});
