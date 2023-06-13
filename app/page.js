import Link from "next/link";


export default async function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Home</h1>
      <Link href="/users">Go to Users </Link>
    </div>
  )
}
