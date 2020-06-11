import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const services = () => (
  <Layout>
    <SEO title="services" />
    <h1>Services</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa
      repellendus magnam ipsa eligendi debitis maiores eveniet, aliquid laborum
      incidunt nam sequi consequuntur quidem iste mollitia ullam fuga excepturi,
      amet voluptate minus assumenda reiciendis et ad. Aspernatur commodi
      repellendus delectus.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa
      repellendus magnam ipsa eligendi debitis maiores eveniet, aliquid laborum
      incidunt nam sequi consequuntur quidem iste mollitia ullam fuga excepturi,
      amet voluptate minus assumenda reiciendis et ad. Aspernatur commodi
      repellendus delectus.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default services
