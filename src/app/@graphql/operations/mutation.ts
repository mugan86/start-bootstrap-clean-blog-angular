import gql from 'graphql-tag';
export const addMessage = gql`
mutation addMessageContact($contact: ContactInput!) {
    addContact(contact: $contact) {
        status
        message
        result {
            id
            name
            email
            reason
            createdAt
        }
    }
}
`;
