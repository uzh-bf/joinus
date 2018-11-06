import React from 'react'
import { Link } from 'gatsby'
import { Segment } from 'semantic-ui-react'

import Layout from '../components/layout'
import Image from '../components/image'
import 'semantic-ui-css/semantic.min.css';

const IndexPage = () => (
  <Layout>
      {/*<h1 style={{ color: `purple`, fontSize: `72px` }}>Hi there</h1>
    <p>Welcome to your new Bf Job site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
      <Link to="/page-2/">Go to page 2</Link>*/}
    <Segment>Beim insti zu arbeiten ist soooo cool.</Segment>
  </Layout>

)

export default IndexPage
