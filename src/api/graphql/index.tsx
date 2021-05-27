import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {gql} from 'apollo-boost'
const client=new ApolloClient ({
    uri:'http://localhost:3000/graphql'
})
client.query({
    query:gql`
        query{
            getCategories{
                id,name
            }
        }
    `
}).then(result=>console.log(result))