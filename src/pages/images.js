import React from 'react'
import Layout from './../components/layout'
import {  graphql } from 'gatsby'

export default function images( { data } ) {
  
    const images = data.allFile.edges;
    return (
    <Layout>
      { images.map( ( { node }, index ) => <h3 key={ index }>{  node.relativePath }</h3>  ) }
    </Layout>
  )
}

export const query = graphql`
{
    allFile(filter: {relativeDirectory: {eq: "test"}}) {
      totalCount
      edges {
        node {
          relativePath
        }
      }
    }
}
  
`
