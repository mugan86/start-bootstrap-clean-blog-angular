export interface ResultPosts {
    info: Info;
    posts: Post[];
}

export interface Post {
    id: string;
    title: string;
    subtitle: string;
    text: string;
    author: Author;
    createdAt: string;
    updatedAt: string;
    active: boolean;
}

export interface Author {
    id: string;
    name: string;
    lastname: string;
    email: string;
    username?: any;
}

export interface Info {
    itemsPage: number;
    page: number;
    pages: number;
    total: number;
}
