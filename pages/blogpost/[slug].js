import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {
  // const router = useRouter();
  const [blog, setblog] = useState(props.blogData)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <div>{blog.content}</div>
      </main>
    </div>
  )
}

export default Slug; 

export async function getServerSideProps(context) {
  const jsonfile = await fetch("http://localhost:3000/api/getblog?slug=" + context.query.slug);
  const blogData = await jsonfile.json();
  return { props: { blogData } }
}