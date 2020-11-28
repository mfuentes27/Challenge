import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "illustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      couple1: file(relativePath: { eq: "couple1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      couple2: file(relativePath: { eq: "couple2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      couple3: file(relativePath: { eq: "couple3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="text">
            <h1 className="main-text">There's always something better coming <span className="red-letters">around the corner</span>.</h1>
          </div>
        </div>
        <div className="illustration">
          <Img fluid={data.mainImage.childImageSharp.fluid} alt="Illustration about a boy in love looking at his cellphone" />
        </div>
      </div>

      <div className="features">
        <h1>A match made by the stars✨</h1>
        <p>Are creatures of the cosmos. Citizens of distant epochs Flatland tendrils of gossamer clouds ship of the imagination Jean-FranÃƒÂ§ois Champollion hundreds of thousands at the edge of forever Orion’s sword decipherment muse about, cosmos from which we spring consciousness citizens.</p>
        <div class="row">
          <div class="column">
            <div class="card">
            <h1>❤️</h1>
              <h3>Feature</h3>
              <p>Billions upon billions!</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
            <h1>❤️</h1>
              <h3>Feature</h3>
              <p>Billions upon billions!</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h1>❤️</h1>
              <h3>Feature</h3>
              <p>Billions upon billions!</p>
            </div>
          </div>

        </div>
      </div>

      <div className="testimonies">
      <h1>Our favorite stories👩‍❤️‍👨</h1>
        <p>Are creatures of the cosmos. Citizens of distant epochs Flatland tendrils of gossamer clouds ship of the imagination Jean-FranÃƒÂ§ois Champollion hundreds of thousands at the edge of forever Orion’s sword decipherment muse about, cosmos from which we spring consciousness citizens.</p>
        <div class="row">
          <div class="column">
            <div class="card">
            <Img fluid={data.couple1.childImageSharp.fluid} alt="Happy couple" />
            <p>David and Liz have been together for 4 months!</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
            <Img fluid={data.couple2.childImageSharp.fluid} alt="Happy couple" />
            <p>Rebecca and Jack met 4 years ago on Love Zodiac!</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
            <Img fluid={data.couple3.childImageSharp.fluid} alt="Happy couple" />
            <p>Zoe and Tan's second anniversary is almost near!</p>
            </div>
          </div>

        </div>
      </div>

    </div>

    
  )
}

export default LandingPage