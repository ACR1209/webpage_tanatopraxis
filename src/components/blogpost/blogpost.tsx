import { BlogPost as BlogPostType } from "@/types/blog";
import { pocketBaseUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogPost(blogpost: BlogPostType) {
  const description = { __html: blogpost.description };

  return (
    <Link href={`/blog/${blogpost.id}`} className="flex flex-col md:flex-row items-end cursor-pointer border hover:bg-gray-200 transition-all p-5 rounded-lg">
      <div className="flex-none w-full md:w-[300px] h-[300px]">
        <Image
          src={`${pocketBaseUrl}api/files/posts/${blogpost.id}/${blogpost.banner}`}
          alt="Imagen"
          className="w-full h-full object-cover rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-grow mt-2 md:mt-0 pl-0 md:pl-5 h-full flex justify-end flex-col">
        <h2 className="text-2xl font-bold">{blogpost.title}</h2>
        <div className="mt-3 flex flex-col gap-1">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full">
              <Image
                src={`${pocketBaseUrl}api/files/authors/${
                  blogpost.expand!.author.id
                }/${blogpost.expand!.author.profile_pic}`}
                alt="Imagen"
                className="w-full h-full object-cover rounded-full"
                width={500}
                height={500}
              />
            </div>
            <p className="ml-2 font-semibold">{blogpost.expand!.author.name}</p>
          </div>
          <p className="text-sm">Publicado el {new Date(blogpost.updated).toLocaleDateString()}</p>
        </div>
        <hr className="my-5"/>
        <p dangerouslySetInnerHTML={description}></p>
      </div>
    </Link>
  );
}

export default BlogPost;
