import { useStaticQuery, graphql } from "gatsby"

export const useCTAAreaQuery = () => {
  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }

    query CTAQuery {
      cta: wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          citat1Author
          citat1Text
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }
        }
      }
    }
  `)
  return data
}