"use client";
import { fetchBlogposts } from "@/actions/fetch-blogposts";
import BlogPost from "@/components/blogpost/blogpost";
import Spinner from "@/components/blogpost/spinner";
import { BlogPost as BlogPostType } from "@/types/blog";
import { useEffect, useState } from "react";

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    fetchBlogposts().then(setBlogPosts);
  }, []);

  return (
    <div className="px-12 py-10">
      <h1 className="text-3xl font-bold">Blog</h1>

      {blogPosts.length === 0 && <Spinner />}

      <div className="flex flex-col gap-5 mt-5">
        {blogPosts?.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;

