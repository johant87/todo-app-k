import React from 'react';
import jQuery from 'jquery';

class AddListItem extends React.Component {
  constructor(){
    super();
  }

  createList(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.list.value;
    let newList = {
      id: null,
      title: title,
      finished: false
    };
    jQuery.ajax({
      type: "POST",
      url: "https://todo-api-johan.herokuapp.com/lists.json",
      data: JSON.stringify({
          list: newList
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.list.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }



  render() {
    return (
      <div>
       <form onSubmit={this.createList.bind(this)}>
         <div className="form-group">
           <input type="Task" ref="list" className="form-control"  placeholder="Add new to do List" />
         </div>
       </form>
     </div>
    );
  }
}

export default AddListItem;
