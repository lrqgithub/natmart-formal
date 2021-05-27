import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
ReactDOM.render(
<ApolloProvider client = {client}>
    <App></App>
</ApolloProvider>, document.getElementById('root'));
