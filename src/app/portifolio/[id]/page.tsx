import { Sidebar } from "@/components/Sidebar";
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Sidebar />
      <div>My Post: {params.slug}</div>
    </>
  )
}