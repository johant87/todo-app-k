import React from 'react';
import jQuery from 'jquery';

class TaskForm extends React.Component {
  constructor() {
    super();
  }

  createTask(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.newTaskInput.value;
    let description = this.refs.newTaskDescription.value;
    let listId = this.props.listId;

    let newTask = {
      id: null,
      title: title,
      body: description,
      finished: false
    };

    jQuery.ajax({
      type: "POST",
      url: "https://todo-api-johan.herokuapp.com/lists/" + listId + "/tasks.json",
      data: JSON.stringify({
          task: newTask
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.newTaskInput.value = "";
        component.refs.newTaskDescription.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
       <form onSubmit={this.createTask.bind(this)}>
         <div className="form-group">
           <input type="Task" ref="newTaskInput" className="form-control"  placeholder="Add new task" />
        </div>
          <div className="form-group">
           <input type="Description" ref="newTaskDescription" className="form-control"  placeholder="description" />
         </div>
       </form>
     </div>

    );
  }
}

export default TaskForm;
