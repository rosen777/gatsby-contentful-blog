import React from 'react'
import Layout from '../components/layout'
import styles from "../components/blog.module.css"

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>this is our blog page</h1>
                <p className={styles.text}>
                    lorem25
                </p>
            </div>
        </Layout>
    )
}

export default blog
