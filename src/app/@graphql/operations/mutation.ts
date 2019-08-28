import gql from 'graphql-tag';
export const addMessage = gql`
mutation addMessageContact($contact: ContactInput!) {
    addContact(contact: $contact) {
        status
        message
        contact {
            id
            name
            email
        }
    }
}
`;
