import React from 'react';
import Layout from './../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Products( { data } ) {
    return (
        <Layout>
            <h1>Products</h1>
            <Link to="/">Go back to homepage</Link>
            { data.products.edges.map( ( { node: product } ) => {
                return (
                    <div key={ product.id } style={ { padding: '1rem', margin: '1rem 0' } }>
                        <Img fixed={ product.image.fixed } />
                        <h3 style={ { marginBottom: '2rem' } }>
                            { product.title } <small style={ { color: 'grey', marginLeft: '2rem' } }>{ product.price } $</small>
                        </h3>
                        {/* <p>{ product.description.description }</p> */}
                        <Link to={ `/products/${ product.title }` }><h4>Details</h4></Link>
                    </div>
                );
            } ) 
            }
        </Layout>
    )
}

export const query = graphql`
{
    products: allContentfulProduct {
        edges {
            node {
                id
                title
                description {
                    description
                }
                price
                image {
                    fixed( width: 300 ) {
                        ...GatsbyContentfulFixed_tracedSVG
                    }
                }
            }
        }
    }
}  
`

