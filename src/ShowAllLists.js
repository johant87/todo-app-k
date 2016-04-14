import React from 'react';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';
import ListItem from './ListItem';
import AddListItem from './AddListItem';

class ShowAllLists extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      id: null,
      title: ''
    };
  }

  showLists(event) {
    let component = this;
    jQuery.getJSON("https://todo-api-johan.herokuapp.com/lists.json", function(data){
      component.setState({
        lists: data.lists
      });
    });
  }

  componentDidMount() {
    this.showLists();
  }


  render() {
      console.log("showlist mount",this.state.lists);
    return (
      <div>
      <AddListItem onChange={this.showLists.bind(this)} />
      {this.state.lists.map(function(list, i) {
        return(
          <ListItem onChange={this.showLists.bind(this)} key={list.id} id={list.id} title={list.title} onDestroy={this.showLists.bind(this)}/>
          );
        }, this)}
      </div>
      );
  }
}

export default ShowAllLists;
