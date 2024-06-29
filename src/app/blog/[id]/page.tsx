import { fetchBlogpost } from '@/actions/fetch-blogposts'
import InspectClient from '@/components/blogpost/inspect';
import Image from 'next/image'
import React from 'react'

async function InspectBlogPostPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const blogPost = await fetchBlogpost(id as string);

    return <InspectClient blogpost={blogPost} />
}


export default InspectBlogPostPage
