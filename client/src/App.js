import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


//importing components
import BookList from './compoment/BookList';
import AddBook from './compoment/AddBook';


//Apollo Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Tanisha's Reading List!!!..</h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}
