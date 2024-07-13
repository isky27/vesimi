import React from 'react'
import { getImageUrl } from 'utils'


const ProductCard = ({imageName, isPath, tag, link, price, subTag}:any) => {
    return (
        <div className="item">
            <div className="productCols position-relative">
                <a href={link ?? "#"} className="text-dark text-decoration-none">
                    <picture><img src={isPath ? getImageUrl(imageName) : require(`assets/images/${imageName}`)} alt={imageName}/></picture>

                    <div className="py-2">
                        <h3 className="text-uparcase">{tag}</h3>
                        <p className="text-gray ">{subTag}</p>
                        <small className="font-semibold">₹{price}</small>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProductCard