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
            posts {
                id
                title
                text
                author {
                    id
                    name
                    lastname
                    role {
                        name
                    }
                }
                thumbnail
                createdAt
                updatedAt
                active
            }
        }
    }
`;
