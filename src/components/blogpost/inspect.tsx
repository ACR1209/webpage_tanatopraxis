"use client";
import React from "react";
import { BlogPost as BlogPostType } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { pocketBaseUrl } from "@/utils";

export default function InspectClient({
  blogpost,
}: {
  blogpost: BlogPostType;
}) {
  const content = { __html: blogpost.content };

  return (
    <div>

      <Image
        src={`${pocketBaseUrl}api/files/posts/${blogpost.id}/${blogpost.banner}`}
        alt="Imagen"
        className="w-full h-full object-cover"
        width={2000}
        height={2000}
      />
      <div className="px-10 py-10">
        <h1 className="text-4xl font-bold mt-5">{blogpost.title}</h1>
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

        <div dangerouslySetInnerHTML={content}></div>
      </div>
    </div>
  );
}
