import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import CustomCard from '../components/CustomCard'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <React.Fragment>
      <h1>Latest products</h1>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/*<Product product={product} />*/}
              <CustomCard product={product} />
            </Col>
          ))}
        </Row>
      }
    </React.Fragment>
  )
}

export default HomeScreen
