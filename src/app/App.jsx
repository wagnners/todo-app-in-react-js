import React, { Component } from 'react';
import Board from 'app/components/Board';
import Form from 'app/components/Form';
import { db } from '../firebase';
import { STATUS } from 'constants/status';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import { Box, Container, Typography } from "@mui/material";
import { schemaValidate } from 'utils/validations';
import TodoContext from 'providers/TodoProvider';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      idToEdit: null,
      task: "",
      errors: {}
    };
  }

  componentDidMount() {
    const q = query(collection(db, 'todo'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.setState({
        todos: querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      });

    });
    return () => unsubscribe();
  }

  validate = async () => {

    const { error } = await schemaValidate.validate({ task: this.state.task });

    if (error && error.details) {
      error.details.forEach((error) => {
        this.setState({
          errors: {
            [error.path[0]]: error.message
          }
        });
      });
    } else {
      this.setState({
        errors: {}
      });
    }

    return error;

  }

  createTodo = async (e) => {

    e.preventDefault(e);

    const error = await this.validate();

    if (!error) {

      if (this.state.idToEdit) {
        await updateDoc(doc(db, 'todo', this.state.idToEdit), {
          task: this.state.task
        });
      } else {
        await addDoc(collection(db, 'todo'), {
          task: this.state.task,
          status: STATUS.OPEN,
        });
      }

      this.setState({
        idToEdit: null,
        task: ""
      });
    }

  };

  onChangeTaskInput = (task) => {
    this.setState({
      task
    });

  };

  changeStatus = (id, status) => {
    updateDoc(doc(db, 'todo', id), {
      status
    });
  };

  deleteTodo = (id) => {
    deleteDoc(doc(db, 'todo', id));
  };

  editTodo = (task, id) => {
    this.setState({
      idToEdit: id,
      task
    });
  }

  render() {
    return (
      <TodoContext.Provider value={{
        todos: this.state.todos,
        idToEdit: this.state.idToEdit,
        task: this.state.task,
        errors: this.state.erros,
        onChangeTaskInput: this.onChangeTaskInput,
        changeStatus: this.changeStatus,
        deleteTodo: this.deleteTodo,
        editTodo: this.editTodo,
      }}>
        <Box className="App__bar">
          <Typography variant="h6" className='App__title'>
            TodoApp
          </Typography>
        </Box>
        <Container fixed>
          <Form
            createTodo={this.createTodo}
          />
          <Board
            idToEdit={this.state.idToEdit}
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            changeStatus={this.changeStatus}
            editTodo={this.editTodo}
          />
        </Container>
      </TodoContext.Provider>
    )
  }
}

export default App;