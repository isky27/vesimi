import Loader from 'component/Loader';
import CategoryController from './categoryController'
import MultiLevelCheckbox from './MultiLevelCheckbox'
import Slider from 'rc-slider';
import Header from 'component/headerLayout';
import { Link } from 'react-router-dom';
import Pagination from 'component/Pagination';

const CategoryView = () => {

	const {
    checkedItems,
    setCheckedItems,
    filterDesigner,
    setFilterDesigner,
    filterSize,
    setFilterSize,
    filterColor,
    setFilterColor,
    filterShipping,
    setFilterShipping,
    filterOccasion,
    setFilterOccasion,
    filterPrice,
    setFilterPrice,
    handlePriceChange,
    subCategoryData,
    categoryProductData,
    isLoadingCategoryProduct,
    isLoadingSubCategories,
    searchParams,
    setSearchParams,
    currentPage,
    setCurrentPage,
  } = CategoryController();

	const colorData = [
		{
			id: '1',
			label: 'Beige',
			level: 0,
			color: 'rgb(212, 186, 151)'
		},
		{
			id: '2',
			label: 'Black',
			level: 0,
			color: 'rgb(0, 0, 0)'
		},
		{
			id: '3',
			label: 'Blue',
			level: 0,
			color: 'rgb(0, 99, 177)'
		},
		{
			id: '4',
			label: 'Brown',
			level: 0,
			color: 'rgb(120, 66, 44)',
		},
		{
			id: '5',
			label: 'Coral',
			level: 0,
			color: 'rgb(255, 80, 87)'
		},
		{
			id: '6',
			label: 'Cream',
			level: 0,
			color: 'rgb(243, 234, 179)'
		}
	]

	const shippingData = [
		{
			id: '1',
			label: '24 Hours',
			level: 0
		},
		{
			id: '2',
			label: '1 Week',
			level: 0,
		},
		{
			id: '3',
			label: '2 Weeks',
			level: 0
		},
		{
			id: '4',
			label: '3 Weeks',
			level: 0,
		},
		{
			id: '5',
			label: '4 Weeks',
			level: 0
		},
		{
			id: '6',
			label: '5 Weeks',
			level: 0,
		},
		{
			id: '7',
			label: '6 Weeks',
			level: 0
		}
	]

	const occasionData = [
		{
			id: '1',
			label: 'Sangeet',
			level: 0
		},
		{
			id: '2',
			label: 'Party',
			level: 0,
		},
		{
			id: '3',
			label: 'Mehendi & Haldi',
			level: 0
		},
		{
			id: '4',
			label: 'Puja',
			level: 0,
		},
		{
			id: '5',
			label: 'Work',
			level: 0
		},
		{
			id: '6',
			label: 'Work',
			level: 0,
		},
		{
			id: '7',
			label: 'Resort',
			level: 0
		},
		{
			id: '8',
			label: 'Destination Wedding',
			level: 0
		}
	]
	
	return (
    <>
      <Header />
      <section className="pageMain">
        <Loader
          isLoading={[isLoadingCategoryProduct, isLoadingSubCategories]}
        />
        <div className="container">
          <div className="pageHead">
            <nav aria-label="breadcrumb" className=" ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Designer Menswear
                </li>
              </ol>
            </nav>
            <h1 className="innerPageTitle Playfair">
              {subCategoryData?.category_data?.name}
            </h1>
          </div>

          <div className="listingPage">
            <div className="Listing_sidebar pt-3 pt-md-4">
              <div className="d-sm-flex justify-content-between py-2 py-md-3">
                <span className="StyleCount">Showing 43,964 Styles </span>
                <button className="AsLink">CLEAR ALL</button>
              </div>
              <div className="sidebarBlock">
                <h3>CATEGORIES</h3>
                <MultiLevelCheckbox
                  isSearchBox={true}
                  searchboxPlaceholder="Search for categories"
                  data={subCategoryData?.data}
                  nameKey="name"
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              </div>

              <div className="sidebarBlock">
                <h3>DESIGNERS</h3>
                <MultiLevelCheckbox
                  isSearchBox={true}
                  searchboxPlaceholder="Search for designers"
                  data={
                    subCategoryData?.filters?.filter((item: any) => {
                      return item?.name === "Designer";
                    })?.[0]?.values
                  }
                  nameKey="value"
                  checkedItems={searchParams.get("designer")}
                  categoery="designer"
                  setCheckedItems={setSearchParams}
                />
              </div>

              <div className="sidebarBlock">
                <h3 className="mb-3">Price</h3>
                <Slider
                  range
                  min={0}
                  max={1000000}
                  defaultValue={filterPrice}
                  onChange={handlePriceChange}
                />
                {/* code for range slider */}
                <div className="priceFilter py-3 d-flex align-items-center justify-content-between">
                  <input
                    type="text"
                    value={filterPrice[0]}
                    placeholder="To"
                    style={{ width: "90px", padding: "4px 8px" }}
                    onChange={(e: any) =>
                      setFilterPrice((prev: any) => [e.target.value, prev[1]])
                    }
                  />
                  <span>-</span>
                  <input
                    type="text"
                    value={filterPrice[1]}
                    placeholder="From"
                    style={{ width: "90px", padding: "4px 8px" }}
                    onChange={(e: any) =>
                      setFilterPrice((prev: any) => [prev[0], e.target.value])
                    }
                  />
                </div>
                <div className="text-end pt-2">
                  <button className="AsLink ms-auto">RESET</button>
                </div>
              </div>

              {subCategoryData?.filters?.filter((item: any) => {
                return item?.name === "Size";
              }) && (
                <div className="sidebarBlock">
                  <h3 className="mb-3 mb-md-4">SIZE</h3>
                  <MultiLevelCheckbox
                    data={
                      subCategoryData?.filters?.filter((item: any) => {
                        return item?.name === "Size";
                      })?.[0]?.values
                    }
                    checkedItems={filterSize}
                    nameKey="value"
                    setCheckedItems={setFilterSize}
                  />
                </div>
              )}

              <div className="sidebarBlock">
                <h3 className="mb-3 mb-md-4">COLOR</h3>
                <MultiLevelCheckbox
                  data={colorData}
                  checkedItems={filterColor}
                  setCheckedItems={setFilterColor}
                />
              </div>
            </div>

            {/* right part */}
            <div className="pageRightMain">
              {/* product Bar */}

              <div className="productListinfWrap">
                <div className="row">
                  {categoryProductData?.data?.map((item: any) => {
                    return (
                      <div key={item?.id} className="col-sm-6 col-lg-4">
                        <div className="productCols position-relative mb-2 mb-md-3">
                          <Link
                            to={`/products/${item?.id}`}
                            className="text-dark text-decoration-none"
                          >
                            <div className="position-relative">
                              <picture>
                                <img src={item?.thumbnail_image} alt="Img" />
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 1024 1024"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
                                </svg>
                              </picture>
                              <div className="QuickView">
                                <strong>Quick View</strong>
                                <div className="addTags">
                                  <span>XXS</span>
                                  <span>XS</span>
                                  <span>S</span>
                                  <span>M</span>
                                  <span>L</span>
                                  <span>XL</span>
                                  <span>XXL</span>
                                  <span>3XL</span>
                                </div>

                                <div className="AddProductAction">
                                  <button style={{ color: "#bb3d1f" }}>
                                    ADD TO CART
                                  </button>
                                  <button
                                    style={{ color: "#eab308" }}
                                    className="border-0"
                                  >
                                    BUY NOW
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="py-2">
                              <h3 className="text-uparcase">{item?.name}</h3>
                              <p className="text-gray ">{item?.name}</p>
                              <small className="font-semibold">
                                {item?.main_price}
                              </small>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Pagination
                  total={50}
                  pageSize={10}
                  currentPage={currentPage}
                  handleClick={setCurrentPage}
                />
                <div className="themePagger text-center py-3">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <Link className="page-link" to="/category/6" aria-disabled="true">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link text-dark" to="/category/6">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link text-dark" to="/category/6">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link text-dark" href="/">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link text-dark" href="/">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryView