import getUser from "@/app/libs/getUser";
import getUserPosts from "@/app/libs/getUserPosts";
import { Suspense } from "react";
import UserPosts from "@/app/components/UserPosts";

export default async function UserPage({params: {id}}) {
    // initiate both request in parallel
    const userData = getUser(id)
    const userPosts = getUserPosts(id)

 const user = await userData

    return (
        <div>
            <h1 className="text-5xl font-bold">User Information</h1>
            <p className="text-3xl mt-10">{user.name}</p>
            <Suspense fallback={<p className="text-center text-5xl">Loading...</p>}>
          <UserPosts promise={userPosts} />
        </Suspense>
        </div>
    )
}