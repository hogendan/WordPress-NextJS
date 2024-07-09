import Image from "next/image";
import PostService from "@/services/PostService";

export default function Home() {
  const postService = PostService
  postService.getList().then((data) => console.log(JSON.stringify(data)))
  return (
    <div></div>
  )
}