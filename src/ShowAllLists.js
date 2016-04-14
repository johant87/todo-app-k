import React from 'react';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';
import ListItem from './ListItem';

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
      test
      {this.state.lists.map(function(list, i) {
        return(
          <ListItem key={list.id} id={list.id} title={list.title}/>
          );
        }, this)}
      </div>
      );
  }
}

export default ShowAllLists;
