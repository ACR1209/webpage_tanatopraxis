export type BlogPost = {
    id: string;
    title: string;
    content: string;
    author: string; 
    banner: string;
    description: string;
    created: string;
    updated: string;
    expand?: BlogPostExpand;
}

export type Author = {
    id: string;
    name: string;
    title: string;
    profile_pic: string;
}

export type BlogPostExpand = {
    author: Author;
}
