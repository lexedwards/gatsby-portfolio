import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            about {
              author
              email
              github
              linkedIn
              twitter
            }
            description
            headline
            image
            logo
            siteURL
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}