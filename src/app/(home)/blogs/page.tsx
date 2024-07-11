import BlogPost from "@/components/home/BlogPost";
import { FC } from "react";



const BlogPage: FC = () => {
    return (
        <>
            <h1 className="mb-7 text-xl text-black">Blogs</h1>
            <div className="grid gap-7 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div>
        </>
    )
}

export default BlogPage
