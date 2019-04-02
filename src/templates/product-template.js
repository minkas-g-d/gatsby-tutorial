import React from 'react';
import Layout from './../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function productTemplate( { data } ) {
    console.log( 'data', data );
    const { title, price } = data.contentfulProduct;
    const { description } = data.contentfulProduct.description;
    const { fluid } = data.contentfulProduct.image;
    return (
        <Layout>
            <Img fluid={ fluid } />
            <h1>{ title } <span style={ { marginLeft: '2rem', color: 'purple' } }>{ price }</span></h1>
            <p>{ description }</p>
            <Link to='/products/'>Go to products</Link>
        </Layout>
    )
}

export const query = graphql`
    query( $id:String! ){
        contentfulProduct( id: { eq: $id } ) {
            id
            title
            price
            description {
                description
            }
            image {
                fluid {
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
        }
    }
`
