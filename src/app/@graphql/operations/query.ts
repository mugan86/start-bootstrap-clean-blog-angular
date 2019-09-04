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
            active
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
            result {
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


export const mostImportantPostData = gql`
query takeImportant {
    mostImportantPost {
        id
        title
        subtitle
        text
        author {
            id
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
`;

export const selectPost = gql`
query selectPost($id: ID!) {
    post(id: $id) {
        id
        title
        subtitle
        text
        author {
            id
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
`;


export const getPortfolioData = gql`
    query getPortfolio($id: ID!){
        projects {
            ...ProjectData
        }
        project(id: $id) {
            ...ProjectData
        }
    }
    fragment ProjectData on Project {
        id
        name
        intro
        description
        categories {
            id
            title
            color
        }
        url
        urlTitle
        startData
        finishData
        active
        important
        finish
        thumbnail
        details
    }
`;


