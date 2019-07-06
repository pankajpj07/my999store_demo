import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,material,img,info,price,title,inCart}=value.detailProduct
                    return (
                        <div className="container py-5">
                            {/*Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-darkblue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end Title */}
                            {/*Product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} alt="product" className="img-fluid"/>
                                </div>
                            {/*Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Fabric : <span className='text-uppercase'>{material}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span>&#x20B9;</span>{price}
                                        </strong>

                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        more info about the product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons*/}
                                    <div>
                                        <Link to='/product-list'>
                                            <ButtonContainer>
                                                Back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false}
                                            onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                                {inCart?'inCart':'add to cart'}
                                        </ButtonContainer>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                 }}
            </ProductConsumer>
        );
    }
}

export default Details;