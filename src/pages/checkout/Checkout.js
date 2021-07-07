import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Row, Col } from 'react-bootstrap';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItems from '../../components/checkoutItems/CheckoutItems';
import StripeButton from '../../components/stripeButton/StripeButton';
import './Checkout.css';

const Checkout = ({ cartItems, total }) => (
    <>
        <Container class="checkout my-5">
            <Row class="description my-5">
                <Col>Remove</Col>
                <Col>Product</Col>
                <Col>Name</Col>
                <Col>Quantity</Col>
                <Col>Price</Col>
            </Row>
            <Row>
                {cartItems.map(cartItem =>
                    (<CheckoutItems key={cartItem.id} cartItem={cartItem} />))
                }
            </Row>
            <div class="total">Total: ${total}</div>
        </Container>
        <div className="text-center mb-5">
            <p>*Please use the following test credit card for payments*</p>
            <p>4242 4242 4242 4242 - Exp: 07/21 -CVV: 123</p>
            <p>Please use current Month/Year for Exp</p>
            <StripeButton price={total} />
        </div>
    </>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);