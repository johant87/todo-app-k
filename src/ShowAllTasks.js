import React from 'react';
import jQuery from 'jquery';
import TaskItem from './TaskItem';
import TaskForm from './AddTaskItem';

class ShowAllTasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      counter: 1,
      id: null,
      title: ""
    };
  }

  showTasks(event) {
    let ListId = this.props.listId;
    let component = this;

    jQuery.getJSON("https://todo-api-johan.herokuapp.com/lists/" + ListId + "/tasks", function(data) {
      console.log(data);

      component.setState({
        tasks: data.tasks
      });
    });
  }

  tasksLeft(){
      return this.state.tasks.filter(function(task, i) {
        return task.finished !== true
      });
    }

    checkDone(){
        let component = this;
        if (component.tasksLeft().length === 0 && component.props.projectdone === false){
        component.props.projectFinished();
        };
      }

  componentDidMount() {
    this.showTasks();
  }

  render() {
    return (
          <div>
              <TaskForm onChange={this.showTasks.bind(this)} listId={this.props.listId} />

                    <label>
                      {this.state.tasks.map(function(task, i) {
                        return(
                          <TaskItem key={task.id} id={task.id} title={task.title} finished={task.finished} listId={task.list_id}  onChange={this.showTasks.bind(this)} checkFinished={this.checkDone.bind(this)} onDestroy={this.showTasks.bind(this)} />
                        );
                      }, this)}
                     </label>
          </div>

    );
  }
}








export default ShowAllTasks;
