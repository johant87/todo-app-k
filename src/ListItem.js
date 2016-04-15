import React from 'react';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';

class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      title: '',
    };
  }

componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title
    });
  }


  deleteListItem(event) {
    event.preventDefault();

    let component = this;

    jQuery.ajax({
      type: "DELETE",
      url: "https://todo-api-johan.herokuapp.com/lists/" +  this.props.id + ".json",
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        console.log("list item Deleted!");
      })

      .fail(function(error) {
        console.log(error);
      })

      .always(function() {
        component.props.onDestroy();
      });
  }

  render() {
    return (
      <div>
       <h2><Link to={`/lists/${this.state.id}`}>{this.state.title}</Link></h2> <button onClick={this.deleteListItem.bind(this)}><i className="fa fa-trash-o"></i>delete</button>
      </div>
      );
  }
}

export default ListItem;
