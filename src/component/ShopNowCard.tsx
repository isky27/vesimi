import React from 'react'
import { Link } from 'react-router-dom'

import { getImageUrl } from 'utils'

const ShopNowCard = ({ imageName, isPath, tag, link, subTag }: any) => {
    return (
        <div className="productCols position-relative mb-3">
            <Link to={link ?? "#"}>
                <picture><img src={isPath ? getImageUrl(imageName) : require(`assets/images/${imageName}`)} alt={imageName} /></picture>
                <div className="py-2 text-center">
                    <h3 className="Playfair text-dark fs-5 my-1">{tag}</h3>
                    <small className="font-semibold text-dark fs-6 fw-light">{subTag}</small>
                </div>
            </Link>
        </div>
    )
}

export default ShopNowCard