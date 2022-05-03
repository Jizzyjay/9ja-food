import React from 'react'
import {
    ProductsContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductElement'


const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((product1, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product1.img} alt={product1.alt} />
                            <ProductInfo>
                                <ProductTitle>{product1.name}</ProductTitle>
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