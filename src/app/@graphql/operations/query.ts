import gql from 'graphql-tag';
export const getUsers = gql`
    query getUsers($skipRole: Boolean!) {
        users {
            id
            name
            lastname
            email
            username
            registerDate
            role @skip(if: $skipRole) {
                id
                name
                descriptionEu
                descriptionEs
                descriptionEn
            }
        }
    }
`;

export const getCourse = gql`
    {
        courses {
            id
            title
            description
            image
            url
            isPaid
            publish
            youtubeVideo
        }
    }
`;
