"use client";

import AddPost from "@/components/home/AddPost";
import PostCard from "@/components/home/PostCard";
import ProfilCard from "@/components/home/ProfilCard";
import { Input } from "@/components/ui/input";
import useMediaQuery from "@/hooks/useResponsive";
import { FC, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";


const content = [
  "🌳🌞 Discover the Beauty of Our Local Forests! 🌞🌳 Join us for a guided nature walk this weekend and explore the wonders of our nearby woodlands. Bring your curiosity and sense of adventure as we learn about local flora, fauna, and conservation efforts. Let's celebrate the natural world together! 🍃🦌",
  "🌻🌼 Embrace Spring at Our Community Garden Festival! 🌼🌻 Dive into a day of gardening workshops, seed exchanges, and plant sales. Connect with fellow green thumbs and learn sustainable practices to cultivate a thriving garden and support local biodiversity. Let's grow together! 🌿🌸",
  "🌊🐬 Dive Into Ocean Conservation! 🐬🌊 Join our marine biologist-led expedition to study and protect local marine ecosystems. From coral reefs to sea turtle nesting grounds, your hands-on involvement will make a splash in ocean conservation. Together, let's ensure healthy seas for future generations! 🌊🐠",
  "🌲🦅 Trek Through Untouched Wilderness! 🦅🌲 Embark on a guided hike through pristine landscapes untouched by human hands. Discover hidden waterfalls, ancient trees, and panoramic vistas that will leave you in awe of nature's majesty. Lace up your boots and let's wander where the WiFi is weak but the connection is strong! 🌿🏞️",
  "🌿🦋 Connect with Nature: Butterfly Garden Planting Day! 🦋🌿 Help us create a haven for butterflies and pollinators with native plantings. Learn about the importance of biodiversity and how small actions can have a big impact on local ecosystems. Join us in fostering a vibrant natural habitat right in our community! 🌼💚"
]


const CommunityPage: FC = () => {
  const [posts, setPosts] = useState([]);
  const { isLg } = useMediaQuery();
  const isAuthenticated = Cookies.get("token");


  useEffect(() => {

    if (isAuthenticated === null || isAuthenticated === undefined) {
      console.log(isAuthenticated);
      redirect("/login");
    }

    console.log(isAuthenticated);

    const fetchPosts = async () => {

    }
  }, [isAuthenticated]);
  return (
    <section className="w-full flex gap-4">
      <div className=" w-full lg:w-2/3 flex flex-col gap-4">
        <AddPost />
        <PostCard username={"Soyed"} userHandle={"Yacine_MK"} userImage={"/user.png"} postImage={"/1.jpg"} content={content[0]} hashtags={"#Event #nature #peqce"} commentsCount={3} retweetsCount={4} likesCount={5} sharesCount={8} />
        <PostCard username={"Salmi siffedinr"} userHandle={"sifo.dev"} userImage={"/user.png"} postImage={"/2.jpg"} content={content[1]} hashtags={"#Event #nature #peqce"} commentsCount={3} retweetsCount={4} likesCount={5} sharesCount={8} />
        <PostCard username={"Hantiza"} userHandle={"Bc_Hantiza"} userImage={"/user.png"} postImage={"/3.jpg"} content={content[2]} hashtags={"#Event #nature #peqce"} commentsCount={3} retweetsCount={4} likesCount={5} sharesCount={8} />
        <PostCard username={"lain"} userHandle={"Lain_0x"} userImage={"/user.png"} postImage={"/image.png"} content={content[3]} hashtags={"#Event #nature #peqce"} commentsCount={3} retweetsCount={4} likesCount={5} sharesCount={8} />
        <PostCard username={"Gigs_67"} userHandle={"Jhon gigs"} userImage={"/user.png"} postImage={"/4.jpg"} content={content[4]} hashtags={"#Event #nature #peqce"} commentsCount={3} retweetsCount={4} likesCount={5} sharesCount={8} />
      </div>
      {isLg ? (
        <div className="lg:w-1/3">
          <Input placeholder="Search for a Valunteer or organisation " />
          <h1 className="text-sm mt-4 mb-3">suggestion for you</h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <ProfilCard />
            <ProfilCard />
            <ProfilCard />
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default CommunityPage;
