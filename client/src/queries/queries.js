import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
{
    authors {
      name
      id
    }
}`;

const getBooksQuery = gql`
{
    books{
        title
        id
    }
}`;

const addBookMutation = gql`
mutation ($title: String!,$genre: String!, $authorid: ID!){
    addBook(title:$title, genre:$genre, authorid:$authorid){
        title
        id
    }
}
`;

const getBookQuery = gql`

    query($id: ID){
        book(id:$id){
            id
            title
            genre
            author{
                id
                name
                age
                books{
                    id
                    title
                }
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery};