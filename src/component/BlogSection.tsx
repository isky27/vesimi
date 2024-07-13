const BlogSection = () => {
    return (
        <section className="productSection py-3 py-md-4">
            <div className="container">
                <div className="productHead text-center  mb-md-4">
                    <h2 className="Playfair fs-3 text-black">Our Blog </h2>
                    <p>A curated set of blog articles from Vesimi’s in-house experts </p>
                </div>

                <div className="productSliderWrap">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="productCols position-relative">
                                <picture><img src="images/blog1.avif" alt="" /></picture>
                                <div className="py-2">
                                    <h3 className="text-md-dark fs-7 my-2">DISCOVER ELEGANT FOOTWEAR WITH A SPANISH
                                        FLAIR FROM OROH </h3>
                                    <p>Exemplify ease and comfort while being high on style with Oroh’s collection
                                        of footwear with a Spanish flair. Explore Now on Vesimi Fashions. </p>
                                    <a href="#"
                                        className="font-semibold text-md-dark fs-7 fw-light text-decoration-none">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="productCols position-relative">
                            <picture><img src="images/blog2.avif" alt="" /></picture>
                            <div className="py-2">
                                <h3 className="text-md-dark fs-7 my-2">DISCOVER ELEGANT FOOTWEAR WITH A SPANISH
                                    FLAIR FROM OROH </h3>
                                <p>Exemplify ease and comfort while being high on style with Oroh’s collection
                                    of footwear with a Spanish flair. Explore Now on Vesimi Fashions. </p>
                                <a href="#"
                                    className="font-semibold text-md-dark fs-7 fw-light text-decoration-none">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="productCols position-relative">
                        <picture><img src="images/blog3.avif" alt="" /></picture>
                        <div className="py-2">
                            <h3 className="text-md-dark fs-7 my-2">DISCOVER ELEGANT FOOTWEAR WITH A SPANISH
                                FLAIR FROM OROH </h3>
                            <p>Exemplify ease and comfort while being high on style with Oroh’s collection
                                of footwear with a Spanish flair. Explore Now on Vesimi Fashions. </p>
                            <a href="#"
                                className="font-semibold text-md-dark fs-7 fw-light text-decoration-none">Read
                                More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="productCols position-relative">
                    <picture><img src="images/blog4.webp" alt="" /></picture>
                    <div className="py-2">
                        <h3 className="text-md-dark fs-7 my-2">DISCOVER ELEGANT FOOTWEAR WITH A SPANISH
                            FLAIR FROM OROH </h3>
                        <p>Exemplify ease and comfort while being high on style with Oroh’s collection
                            of footwear with a Spanish flair. Explore Now on Vesimi Fashions. </p>
                        <a href="#"
                            className="font-semibold text-md-dark fs-7 fw-light text-decoration-none">Read
                            More</a>
                    </div>
                </div>
            </div>

            <div className="text-center pt-4"> <a href="#"
                className="bg-themered px-5 py-2 text-decoration-none text-white" style={{fontSize:"12px"}}>GO
                TO BLOG</a>
            </div>
        </section >
    )
}

export default BlogSection