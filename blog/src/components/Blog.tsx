import React, {useEffect, useState} from 'react';
import axios from "axios";
import {List} from "./List";


export interface BlogInterface {
    id?: number,
    title: string,
    body: string,
    userId?: string;
}

function Blog() {

    const [posts, setPosts] = useState<BlogInterface[]>([]);
    const [visibleBlogs, setVisibleBlogs] = useState<BlogInterface[]>([]);
    const [buttonText, setButtonText] = useState<string>("Show blogs")
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        const response = await axios.get<BlogInterface[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
        setVisibleBlogs(response.data)
    }

    function showBlog() {
        console.log(`Before if ${isVisible}`)
        if (!isVisible) {
            setPosts(visibleBlogs);
            setButtonText("Show blogs")
        } else {
            setButtonText("Hide blogs")
            setPosts([])
        }
        setVisible(!isVisible)
    }

    return (
        <section>
            <h2>My Blog Posts</h2>
            <button onClick={showBlog}>{buttonText}</button>
            <ul>
                <List items={posts} renderItem={(post: BlogInterface) =>
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                }/>
            </ul>
            {/*<ul>*/}
            {/*    {posts.map(post => (*/}
            {/*        <li key={post.id}>*/}
            {/*            <h3>{post.title}</h3>*/}
            {/*            <p>{post.body}</p>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </section>
    );
}

export default Blog;
