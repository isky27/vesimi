import { Link } from "react-router-dom";

const Carousel = ({ data, isPath }: any) => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                {data?.map((item: any, index: number) => (
                    <button
                        key={item?.image}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={`${index === 0 ? "active" : ""}`}
                        aria-current={index === 0}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {data?.map((item: any, index: number) => (
                    <div key={item?.image}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        data-bs-interval="3000"
                    >
                        <Link to={item?.link}>
                             <img src={isPath ? item?.image :  require(`../../assets/images/${item?.image}`)} className="d-block w-100" alt="..." />
                        </Link>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
