export interface Course {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    isPaid: Boolean;
    publish: Boolean;
    youtubeVideo: string;
    cuponCode?: string;
    publishDate: string;
    updatedDate?: string;
    time: number;
}
