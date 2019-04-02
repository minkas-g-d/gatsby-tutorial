const path = require( 'path' );
module.exports.createPages = ( { graphql, actions } ) => {
    const { createPage } = actions;

    // graphql returns promise
    return graphql(`
        {
            allContentfulProduct {
                edges {
                    node {
                    id
                    title
                    }
                }
            }
        }
    `).then( result => {
        result.data.allContentfulProduct.edges.forEach( ( { node } ) => {
            createPage( { 
                path: `products/${ node.title }`,
                component: path.resolve( './src/templates/product-template.js' ),
                context: {
                    id: node.id
                } 
            } )
        } )
    } ).catch( err => console.log( 'createPages error', err ) )
}