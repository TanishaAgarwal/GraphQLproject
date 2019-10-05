import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import * as compose from 'lodash.flowright';

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: "",
            genre: "",
            authorid: ""
        };
    }
  displayAuthors() {
    var data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled> Loading authors... </option>;
    } else {
      return data.authors.map(author => {
        return <option key={author.id} value={ author.id }> {author.name} </option>;
      });
    }
  }

submitForm(e){
 e.preventDefault();
//  console.log(this.state);
this.props.addBookMutation({
    variables:{
        title: this.state.title,
        genre: this.state.genre,
        authorid: this.state.authorid,
    },
    refetchQueries: [{ query: getBooksQuery }]
});
}

  render() {
    return (
      <form id="add-book" onSubmit={ this.submitForm.bind(this) }>
        <div className="field">
          <label> Book Name </label> 
          <input type="text" onChange={(e) => this.setState({ title: e.target.value })}/>
        </div>{" "}
        <div className="field">
          <label> Genre </label> 
          <input type="text" onChange={(e) => this.setState({ genre: e.target.value })}/>
        </div>{" "}
        <div className="field">
          <label> Author </label>
           <select onChange={(e) => this.setState({ authorid: e.target.value })}>
               <option>Select Author</option>
               { this.displayAuthors() }
           </select>{" "}
        </div>

        <button>+</button>

      </form>
    );
  }
}

export default compose(
    graphql(getAuthorsQuery,{ name:"getAuthorsQuery"}),
    graphql(addBookMutation,{ name:"addBookMutation"})
)(AddBook);
