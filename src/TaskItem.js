import React from 'react';
import jQuery from 'jquery';

class TaskItem extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      title: '',
    }
  }



  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      finished: this.props.finished
    });
  }

  toggleTaskStatus(event) {
    let listId = this.props.listId
    let component = this;



		let oldState = {
	     	id: this.state.id,
	     	title: this.state.title,
	     	finished: this.state.finished
	    }


		this.state.finished = !this.state.finished;


		let changedState = {
	     	finished: this.state.finished
	    }


		let newState = jQuery.extend(oldState, changedState);

	    this.setState(newState);
      let id = this.props.id

	    jQuery.ajax({
	      	type: "PUT",
	      	url: "https://todo-api-johan.herokuapp.com/lists/" + listId + "/tasks/" + id + ".json",
	      	data: JSON.stringify({
	          	task: newState
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	    })

	    .done(function(data) {
        console.log(data);

        component.setState({
          id: data.task.id,
          title: data.task.title,
          finished: data.task.finished
        });
        component.props.onChange();
        component.props.checkFinished();
      })

	    .fail(function(error) {
	        console.log(error);
	    });
  }

  deleteItem(event) {
    event.preventDefault();
    console.log("Destroy clicked!");
    let component = this;
    let id = this.props.id
    let listId = this.props.listId
    jQuery.ajax({
      type: "DELETE",
      url: "https://todo-api-johan.herokuapp.com/lists/" + listId + "/tasks/" + id + ".json",
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        console.log(data);
        console.log("Deleted! :)");
      })
      .fail(function(error) {
        console.log(error);
      })
      .always(function() {
        component.props.onDestroy();
      });
  }


  render() {
    return(
            <div>
               <button onClick={this.deleteItem.bind(this)}></button>
               <label className= "slide">
               <input className="slide-input" id={this.state.id} type="checkbox" ref="finished" checked={this.state.finished ? "finished" : ""} onChange={this.toggleTaskStatus.bind(this)}  />
               <span className="slide-knop"></span>{this.props.title}</label>
            </div>
    );
  }
}







export default TaskItem;
