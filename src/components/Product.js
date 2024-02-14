import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { ProductConsumer } from './Context';

export default class Product extends Component {
  render() {
    console.log("this = "+ this);
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className='co-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <ProductConsumer>
          {(value)=>(
          <div className='img-container p-5' onClick={()=>value.handleDetail(id)}>
          
          <Link to="/details">  
            <img src={img} alt='product' className='card-img-top images'></img>
          </Link>
          
          <button className='cart-btn' disabled={inCart ? true : false} onClick={() => {
            value.addToCart(id);
            value.openModal(id); 
            }}
            >{inCart ? (<p className='text-capitalize mb-0' disabled>in Cart</p>) : <i className='fas fa-cart-plus'></i>}
          </button>   
          </div>)}
          </ProductConsumer>

          <div className="card-footer d-flex justify-content-between">
            <p className='align-self-center mb-0' >{title}</p>
            <h5 className='text-blue'>INR {price}</h5>
          </div>
        </div>
        
      </ProductWrapper> 
    )
  }
}
const ProductWrapper = styled.div`
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 0.2s linear;
}
.images{
  // height: 90px;
  // width: 100px;
}
&:hover {
  .card{
    border: 0.08rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2); 
  }
  .card-footer {
      background: rgba(247, 247, 247);
  }
}
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.2s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.05);
  }
  .cart-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--lightBlue);
  border: none;
  color: var(--mainWhite);
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0 ;
  transform: translate(100%,100%);
  transition:0.3s;
}
.img-container:hover .cart-btn{
  transform: translate(0,0);
}
.cart-btn: hover {
  color: var(--mainBlue);
  cursor: pointer;
}

`
