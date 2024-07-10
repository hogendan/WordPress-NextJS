import Image from "next/image";
import PostService from "@/services/PostService";
import PostType from "@/PostType";
import { GetStaticProps } from "next";

export default async function Home() {
  const allProps = await PostService.getList()
  return (
    <div>
      {allProps.map((data) => {
        return <p key={data.id}>{data.title}</p>
      })}

    </div>
  )
}
