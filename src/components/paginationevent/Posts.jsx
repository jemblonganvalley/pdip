import React from 'react'
import './Posts.scss'


const Posts = ({ posts, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <ul className="loadingEvent">
                {posts.map(post => (
                    <li key={post.id} className="bagianEvent">
                        {post.title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Posts