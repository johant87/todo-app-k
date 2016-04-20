import React from 'react';
import jQuery from 'jquery';

class AddListItem extends React.Component {
  constructor(){
    super();
  }

  createList(event) {
    event.preventDefault();
    console.log("Creating list...")
    let component = this;
    let title = this.refs.list.value;
    let description = this.refs.description.value;
    let newList = {
      id: null,
      title: title,
      body: description,
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
        component.refs.description.value = "";
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
           <input ref="list" className="form-control"  placeholder="Add new to do List" />
          </div>
          <div classNAme="form-group">
           <input ref="description" className="form-control"  placeholder="Description" />
         </div>
        <button type="submit" className="btn btn-default">Submit</button>
       </form>
     </div>
    );
  }
}

export default AddListItem;
