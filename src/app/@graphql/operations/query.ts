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
            cuponCode
            publishDate
            updatedDate
            time
            novelty
            categories {
                id
                title
                color
            }
        }
    }
`;

export const getPosts = gql`
    query postList($page: Int!, $itemsPage: Int!) {
        posts (page: $page, itemsPage: $itemsPage) {
            info {
                page
                pages
                total
                itemsPage
            }
            results {
                id
                title
                subtitle
                text
                author {
                    id
                    name
                    lastname
                    email
                    username
                    role {
                        name
                    }
                }
                categories {
                    id
                    title
                }
                thumbnail
                createdAt
                updatedAt
                active
                important
            }
        }
    }
`;


export const meData = gql`
query {
  me {
    status
    message
    user {
      id
      name
      lastname
      email
      registerDate
    }
  }
}
`;

export const login = gql`
query login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    status
    message
    token
  }
}
`;
