exports.createSchemaCustomization = ({ actions }) => {
    
    const { createTypes } = actions

    createTypes(`
      type SiteSiteMetadata {
        author: Author
        siteUrl: String
        social: Social
      }
  
      type Author {
        name: String
        summary: String
      }
  
      type Social {
        twitter: String
      }
  
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
  
      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
      }
  
      type Fields {
        slug: String
      }

      type StrapiAaaactivite implements Node @infer {
        unAutreTitre: String!
      }

    `)
  }