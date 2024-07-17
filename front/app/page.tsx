import PostService from "@/services/PostService";

export const revalidate = 5;

export default async function Page() {
  const allProps = await PostService.getList()

  return (
    <div>
      {allProps.map((data) => {
        return <p key={data.id}>{data.title}</p>
      })}

    </div>
  )
}
