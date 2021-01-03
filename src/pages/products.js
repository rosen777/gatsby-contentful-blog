import React, { Component } from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import styles from '../components/products.module.css'
import Image from 'gatsby-image'



const ComponentName = ({data}) => {
    const {allContentfulProduct: {nodes: products}} = data;

    return (
        <Layout>
            <section className={styles.page}>
                {products.map(product => {
                    return (
                        <article key={product.id}>
                            <Image fluid={product.image.fluid} alt={product.title}>
                            </Image>
                                <h3>
                                    {product.title}
                                    <span>${product.price}</span>
                                </h3>
                                <Link to={`/products/${product.slug}`}>
                                    more details
                                </Link>
                        </article>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`{
    allContentfulProduct {
        nodes {
        id
        image {
            fluid {
                ...GatsbyContentfulFluid
            }
        }
        title
        price
        }
    }
}
`

export default ComponentName;

// export default class products extends Component {
//     render() {
//         return (
//             <Layout>
//                 <div className={styles.page}>
//                     <h1>This is our product page</h1>
//                     <p className={styles.text}>
//                         lorem25
//                     </p>
//                 </div>
//             </Layout>
//         )
//     }
// }

