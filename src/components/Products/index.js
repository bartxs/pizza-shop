import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductTitle,
    ProductInfo,
    ProductButton,
    ProductDesc,
    ProductPrice,
} from './ProductsElements'

const Products = ({ heading, data, id }) => {

    return (
        <ProductsContainer id={id}>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
