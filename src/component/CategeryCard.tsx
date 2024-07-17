import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategeryCard = ({ imageName, isPath, tag, link, subTag, bottomText }: any) => {

    const navigate = useNavigate()

    return (
      <div
        className="productCols position-relative"
        onClick={() => navigate(link ?? "/")}
      >
          <picture>
            <img
              src={isPath ? imageName : require(`assets/images/${imageName}`)}
              alt={imageName}
            />
          </picture>
          {bottomText ? (
            <div className="text-center">
              <h3 className="m-1 text-dark">{tag}</h3>
            </div>
          ) : (
            <div className="position-absolute bottom-0 start-0 end-0 mb-2 mb-md-3 text-center">
              <h3 className="m-2 Playfair ">{tag}</h3>
              {subTag && <small>{subTag}</small>}
            </div>
          )}
      </div>
    );
}

export default CategeryCard