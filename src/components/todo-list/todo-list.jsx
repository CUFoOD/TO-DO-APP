import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import React from "react";
import "./todo-list.scss";

export const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo));
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <Grid container spacing={2}>
          {todos.map((todoItem) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={todoItem.id}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent style={{ maxHeight: "calc(100% - 48px)", overflowY: "auto" }}>
                  <div className="todo-item">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={todoItem.checked}
                          onChange={() => toggleCheck(todoItem.id)}
                          sx={{
                            '&.Mui-checked': {
                              color: 'green',
                            },
                          }}
                        />
                      }
                      label={todoItem.label}
                    />
                  </div>
                </CardContent>
                <div className="button-container">
                  <Button
                    onClick={() => handleDelete(todoItem.id)}
                    size="small" // Set the size to small
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'darkred',
                      },
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
