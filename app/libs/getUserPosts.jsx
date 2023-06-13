export default async function getUserPosts(id) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    if(!response.ok) {
        throw new Error('failed to fetch user posts')
    }

    return response.json()
}