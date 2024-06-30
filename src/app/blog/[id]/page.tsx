import { fetchBlogpost } from '@/actions/fetch-blogposts'
import InspectClient from '@/components/blogpost/inspect';
import React from 'react'

export const revalidate = 3600 / 2; // 30 minutes

async function InspectBlogPostPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const blogPost = await fetchBlogpost(id as string);

    if (!blogPost) {
        return <div>Blogpost not found</div>
    }
    
    return <InspectClient blogpost={blogPost} />
}


export default InspectBlogPostPage
