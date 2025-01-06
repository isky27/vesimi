import Loader from 'component/Loader';
import CategoryController from './categoryController'
import MultiLevelCheckbox from './MultiLevelCheckbox'
import Slider from 'rc-slider';
import Pagination from 'component/Pagination';
import { priceRange } from 'constant';
import filterIcon from "../../assets/images/filterIcon.png";
import sidebarClose from "../../assets/images/sidebarClose.png";
import ProductCard from './ProductCard';

const CategoryView = () => {

	const {
    filterCategory, 
    setFilterCategory,
    filterDesigner,
    setFilterDesigner,
    filterSize,
    setFilterSize,
    filterColor,
    setFilterColor,
    filterPrice,
    setFilterPrice,
    handlePriceChange,
    subCategoryData,
    isLoadingSearchProduct,
    searchProductData,
    isLoadingSubCategories,
    currentPage,
    setCurrentPage,
    handelClearFilter,
    handlePriceReset
  } = CategoryController();


  const handleToggleSidebar = () => {
    document.body.classList.toggle("openfilterSidebar"); // Toggle the class on <body>
  };

  const handleCloseSidebar = () => {
    document.body.classList.remove("openfilterSidebar"); // Remove the class from <body>
  };

	return (
    <section className="pageMain">
      <Loader isLoading={[isLoadingSearchProduct, isLoadingSubCategories]} />
      <div className="container">
        <div className="pageHead">
          <nav aria-label="breadcrumb" className=" ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {subCategoryData?.category_data?.name}
              </li>
            </ol>
          </nav>
          <h1 className="innerPageTitle Playfair">
            {subCategoryData?.category_data?.name}
          </h1>
        </div>

        <div className="listingPage">
          <div className="Listing_sidebar pt-5 pt-md-4">
            <button
              className="sidebarClose d-lg-none"
              onClick={handleCloseSidebar}
            >
              {" "}
              <img src={sidebarClose} />
            </button>
            <div className="d-sm-flex justify-content-between py-2 py-md-3">
              <span className="StyleCount">
                Showing {searchProductData?.meta?.total || 0} Styles{" "}
              </span>
              <button className="AsLink" onClick={handelClearFilter}>
                CLEAR ALL
              </button>
            </div>
            {!(subCategoryData?.data?.length==1 && subCategoryData?.data?.[0]
              ?.number_of_children == 0) && (
              <div className="sidebarBlock">
                <h3>CATEGORIES</h3>
                <MultiLevelCheckbox
                  isSearchBox={true}
                  searchboxPlaceholder="Search for categories"
                  data={subCategoryData?.data}
                  nameKey="name"
                  checkedItems={filterCategory}
                  setCheckedItems={setFilterCategory}
                  singleSelect={true}
                />
              </div>
            )}

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
                checkedItems={filterDesigner}
                selectedValueKey="value"
                singleSelect={true}
                setCheckedItems={setFilterDesigner}
              />
            </div>

            <div className="sidebarBlock">
              <h3 className="mb-3">Price</h3>
              <Slider
                range
                min={priceRange[0]}
                max={priceRange[1]}
                defaultValue={[Number(filterPrice[0]), Number(filterPrice[1])]}
                onChange={handlePriceChange}
                value={[Number(filterPrice[0]), Number(filterPrice[1])]}
              />
              {/* code for range slider */}
              <div className="priceFilter py-3 d-flex align-items-center justify-content-between">
                <input
                  type="number"
                  value={filterPrice[0]}
                  placeholder="To"
                  style={{ width: "90px", padding: "4px 8px" }}
                  onChange={(e: any) => {
                    if (e.target.value > Number(filterPrice[1])) {
                      return;
                    }
                    setFilterPrice((prev: any) => [e.target.value, prev[1]]);
                  }}
                />
                <span>-</span>
                <input
                  type="number"
                  value={filterPrice[1]}
                  placeholder="From"
                  style={{ width: "90px", padding: "4px 8px" }}
                  onChange={(e: any) =>
                    setFilterPrice((prev: any) => [prev[0], e.target.value])
                  }
                />
              </div>
              <div className="text-end pt-2">
                <button className="AsLink ms-auto" onClick={handlePriceReset}>
                  RESET
                </button>
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
                  selectedValueKey="value"
                  singleSelect={true}
                  setCheckedItems={setFilterSize}
                />
              </div>
            )}

            <div className="sidebarBlock">
              <h3 className="mb-3 mb-md-4">COLOR</h3>
              <MultiLevelCheckbox
                data={
                  subCategoryData?.filters?.filter((item: any) => {
                    return item?.name === "Colors";
                  })?.[0]?.values
                }
                isColor={true}
                checkedItems={filterColor}
                nameKey="name"
                selectedValueKey="code"
                setCheckedItems={setFilterColor}
                singleSelect={true}
              />
            </div>
          </div>

          {/* right part */}
          <div className="pageRightMain">
            <button
              className="d-md-none filterSidebarToggle"
              onClick={handleToggleSidebar}
            >
              {" "}
              <img src={filterIcon} />
            </button>
            {/* product Bar */}

            <div className="productListinfWrap">
              <div className="row">
                {!isLoadingSearchProduct &&
                  searchProductData?.data?.length > 0 &&
                  searchProductData?.data?.map((item: any) => {
                    return <ProductCard item={item} key={item?.id} />;
                  })}
                {!isLoadingSearchProduct &&
                  !(searchProductData?.data?.length > 0) && (
                    <div className="text-center"> No products to show.</div>
                  )}
              </div>
              {searchProductData?.meta?.total > 0 && (
                <Pagination
                  total={searchProductData?.meta?.total}
                  pageSize={searchProductData?.meta?.per_page}
                  currentPage={currentPage}
                  handleClick={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryView