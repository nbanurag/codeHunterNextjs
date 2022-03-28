import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

const Blog = (props) => {
  const [blogsData, setblogsData] = useState(props.blogsData)

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs").then(async data => {
  //     const dataObj = await data.json();
  //     setblogsData(dataObj);
  //   })
  // }, [])
  return (
    <div className={styles.main}>
      <div className={styles.blogItem}>
        {blogsData.map(blog => (
          <div key={blog.slug}>
            <Link href={"/blogpost/" + blog.slug}  passHref>
              <h3 style={{cursor: 'pointer'}}>{blog.title}</h3>
            </Link>
            <p className={styles.blogPara}>{blog.content.substring(0, 140)}...</p>
          </div>))}
      </div>
    </div>
  )
}

//getServerSideProps
export async function getServerSideProps(context) {
  const jsonfile = await fetch(`${process.env.API_URL}/api/blogs`);
  const blogsData = await jsonfile.json();
  return { props: { blogsData } }
}

export default Blog

// export async function getStaticProps() {
//   let blogData = [];
//   const pathnew = path.join(process.cwd(), 'blogdata/');
//   const jsonsInDir = await fs.readdirSync(pathnew);
//   jsonsInDir.forEach(file => {
//     const fileData = fs.readFileSync(path.join(pathnew, file));
//     const json = JSON.parse(fileData.toString());
//     blogData = [...blogData, json]
//   });
//   return { props: { blogData } }
// }
