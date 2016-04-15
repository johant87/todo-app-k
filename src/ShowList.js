import React from 'react';
// import AllTasks from './Alltasks';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';

class ShowList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {}
    };
  }

  // updateList(event) {
  //     console.log("doing something")
  //     let listId = this.props.params.listId;
  //     let component = this;
  //         let oldState = {
  //             id: this.state.id,
  //             title: this.state.title,
  //             finished: this.state.finished
  //         }
  //         this.state.finished = true;
  //     console.log("changing state!");
  //         let changedState = {
  //             finished: this.state.finished
  //         }
  //         let newState = jQuery.extend(oldState, changedState);
  //         this.setState(newState);
  //         jQuery.ajax({
  //             type: "PUT",
  //             url: "https://dry-shelf-45398.herokuapp.com/lists/" + listId + ".json",
  //             data: JSON.stringify({
  //                 list: newState
  //             }),
  //             contentType: "application/json",
  //             dataType: "json"
  //         })
  //         .done(function(data) {
  //         console.log(data);
  //         component.setState({
  //           id: data.list.id,
  //           title: data.list.title,
  //           finished: data.list.finished
  //         });
  //       })
  //         .fail(function(error) {
  //             console.log(error);
  //         });
  //   }
  componentDidMount() {
    this.fetchList();
  }
  fetchList() {
    let listId = this.props.params.listId;
    console.log("show me the monny", listId)
    let component = this;
    jQuery.getJSON("https://todo-api-johan.herokuapp.com/lists/" + listId + ".json", function(data){
      component.setState({
        list: data.list
      });
    });
  }


  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
            <h2>{this.state.list.title}</h2>
        </div>
      </div>
        {/*<TaskList listdone={this.state.list.finished}
        listFinished={this.updateList} listId={this.props.params.listId} />*/}
      </div>
    );
  }
}

export default ShowList;
