"use server";

import { BlogPost } from "@/types/blog";
import { client } from "@/utils";

export async function fetchBlogposts() {
    const records = await client.collection<BlogPost>('posts').getFullList({ 
        expand: 'author'
    });
    return records;
}

export async function fetchBlogpost(id: string) {
    const record = await client.collection<BlogPost>('posts').getOne(id, {
        expand: 'author'
    });
    return record;
}