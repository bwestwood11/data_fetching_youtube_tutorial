import React from 'react'

export default async function UserPosts({promise}) {
    const posts = await promise
  return (
    <div>
 <ul>
            {posts.map((post) => (  
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
