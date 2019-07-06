import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-4 my-3">
               <div className="card">
                   <ProductConsumer>
                       {(value)=>(<div className="img-container py-5" onClick={()=>value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="" className="card-img-top"/>
                            </Link>
                            <button className="cart-btn" disabled={inCart?true:false} 
                            onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                            }}
                            >
                            {inCart?(<p className="text-capitalize mb-0">In Cart</p>)
                            :(<i className="fas fa-shopping-cart"></i>)}
                            </button>
                        </div>)}
                        
                    </ProductConsumer>

                   <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}  </p>
                            <span className="text-blue font-italic mb-0">
                              <span className="mr-1">&#8377;</span>{price}
                            </span>
                        
                   </div>
               </div>
            </ProductWrapper>
        );
    }
}
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}
const ProductWrapper=styled.div`
.card{
    border-color:transparent;
    transition:all 0.1s linear;
}
.card-footer{
    border-color:transparent;
    transition:all 0.1s linear;
}

&:hover{
    .card{
        border:0.004rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 8px 0px;
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition:all 0.2s linear;
    }
    .img-container:hover .card-img-top{
        transform:scale(1.2);
    }
    .cart-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        background: var(--lightblue);
        border:none;
        color:var(--mainwhite);
        font-size:2rem;
        border-radius:0.5rem 0 0 0;
        transform:translate(100%,100%);
        transition:all 0.2s linear;
        

    }
    .cart-btn:hover{
        color:var(--maindark);
    }
    .img-container:hover .cart-btn{
        transform:translate(0,0);
        
    }

`;

export default Product;