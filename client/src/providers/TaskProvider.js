import React, { Component } from 'react';
import axios from 'axios';

const TaskContext = React.createContext();

export const TaskConsumer = TaskContext.Consumer;

class TaskProvider extends Component {
  state = { tasks: [] }

  getAllTasks = (user_id) => {
    axios.get(`/api/users/${user_id}/tasks`)
      .then( res => {
        this.setState({ tasks: res.data })
      })
      .catch( err => console.log(err) )
  }

  addTask = (user_id, task) => {
    axios.post(`/api/users/${user_id}/tasks`, { task } )
      .then( res => {
        const { tasks } = this.state
        this.setState({ tasks: [ ...tasks, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  updateTask = (user_id, id, task, history) => {
    axios.put(`/api/users/${user_id}/tasks/${id}`, { task } )
    .then( res => {
      const tasks = this.state.tasks.map( t => {
        if (t.id === id) {
          return res.data
        }
        return t
      })
      this.setState({ tasks: tasks })
      history.push('/tasks')
    })
    .catch( err => console.log(err) )
  }

  deleteTask = (user_id, id, history) => {
    axios.delete(`/api/users/${user_id}/tasks/${id}`)
      .then( res => {
        const { tasks } = this.state
        this.setState({ tasks: tasks.filter( t => t.id !== id )})
        history.push('/tasks')
      })
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <TaskContext.Provider value={{
        ...this.state,
        getAllTasks: this.getAllTasks,
        addTask: this.addTask,
        updateTask: this.updateTask,
        deleteTask: this.deleteTask,
      }}>
        { this.props.children }
      </TaskContext.Provider>
    )
  }
}

export default TaskProvider;