import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import CustomCard from '../components/CustomCard'
import axios from 'axios'

const HomeScreen = () => {

  const [products, setproducts] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setproducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <React.Fragment>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/*<Product product={product} />*/}
            <CustomCard product={product} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}

export default HomeScreen
