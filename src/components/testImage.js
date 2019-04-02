import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const getImgSrc = graphql`
{
    file(relativePath:{eq:"test/_DSC0120.JPG" }){
      childImageSharp{
        fluid{
...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default function testImage() {
  return (
<StaticQuery query={ getImgSrc } render={ ( { file } ) => {
    const fluid = file.childImageSharp.fluid;
    console.log( 'fluid', fluid );
    return (
        <div style={ { maxWidth: 300 } }>
            <Img fluid={ fluid } />
        </div>
    )
} }  />
  )
}
