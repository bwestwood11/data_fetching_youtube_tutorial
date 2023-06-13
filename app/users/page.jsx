import Link from "next/link"
import getUsers from "../libs/getUsers"

export default async function UsersPage() {
    const users = await getUsers()
  return (
    <div className="text-center mt-20">
        <h1 className="text-5xl font-bold">Users</h1>
        {users.map(user => {
            return (
                <>
                <p key={user.id} className="text-3xl mt-10">
                    <Link href={`/users/${user.id}`}>
                    {user.name}
                    </Link>
                </p>
                </>
            )
            })
        }
    </div>
  )
}
