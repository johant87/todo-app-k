import React from 'react';
import jQuery from 'jquery';

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

  render() {
    return (
      <div>
      listitem
       <h2>{this.state.title}</h2>
      </div>
      );
  }
}

export default ListItem;
