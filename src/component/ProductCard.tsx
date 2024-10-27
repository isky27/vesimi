import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({imageName, isPath, tag, link, price, subTag, arg}:any) => {
    return (
        <div {...arg} className="item">
            <div className="productCols position-relative">
                <Link to={link ?? "/"} className="text-dark text-decoration-none">
                    <picture><img src={isPath ? imageName : require(`assets/images/${imageName}`)} alt={imageName}/></picture>
                    <div className="py-2">
                        <h3 className="text-uparcase">{tag}</h3>
                        <p className="text-gray ">{subTag}</p>
                        <small className="font-semibold">{price}</small>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard