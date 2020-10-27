import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CustomCard from '../components/CustomCard'
// import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <React.Fragment>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          {/*<Product product={product} />*/}
            <CustomCard product={product}/>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}

export default HomeScreen
