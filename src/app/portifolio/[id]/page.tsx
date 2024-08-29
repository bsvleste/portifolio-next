import { Sidebar } from "@/components/Sidebar";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Sidebar />
      <div>My Post: {params.slug}</div>
    </>
  )
}