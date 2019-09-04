export interface Project {
    id: string;
    intro: string;
    description: string;
    categories?: any;
    startData: string;
    finishData: string;
    active: boolean;
    important: boolean;
    finish: boolean;
    thumbnail: string;
    detauls: string[];
}
