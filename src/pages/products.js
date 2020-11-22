import React, { Component } from 'react'
import Layout from '../components/layout'
import styles from '../components/products.module.css'
console.log(styles);


export default class products extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.page}>
                    <h1>This is our product page</h1>
                    <p className={styles.text}>
                        lorem25
                    </p>
                </div>
            </Layout>
        )
    }
}

