import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const InfoQuery = graphql`
{
    info: site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const StaticQueryComponent = () => {
  return (
    <StaticQuery query={ InfoQuery } render={ data => {
        const siteData = data.info.siteMetadata;
        const { title, description, author } = siteData;
        return (
            <div>
                <h2>title: { title }</h2>
                <p>description: { description }</p>
                <p>author: { author }</p>
            </div>
        );
    } } />
  )
}

export default StaticQueryComponent