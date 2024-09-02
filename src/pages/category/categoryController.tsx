import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";
import { useParams, useSearchParams } from "react-router-dom";
import {
  getCategoryProducts,
  getSubCategories,
} from "store/category/category.slice";

/**
 *
 * @returns all controllers for login page.
 */

const CategoryController = () => {
  const { categoryId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get("colors"),
  // searchParams.get("category"),
  // searchParams.get("designer"),
  // searchParams.get("price"),
  // searchParams.get("size"),
  // searchParams.get("shippingTime"),
  // searchParams.get("occasion"), '________________params');

  console.log(searchParams.get("designer"), "_________________designer")

  const [filterCategory, setFilterCategory] = useState<any>(new Set([searchParams.get("sub-category") ?? categoryId]));
  const [filterDesigner, setFilterDesigner] = useState<any>(new Set([searchParams.get("designer")]));
  const [filterSize, setFilterSize] = useState<any>(new Set([searchParams.get("size")]));
  const [filterColor, setFilterColor] = useState<any>(new Set([searchParams.get("color")]));
  const initialPrice= ["0","1000000"];
  const [filterPrice, setFilterPrice] = useState<any>([searchParams.get("min")|| initialPrice[0],searchParams.get("max") || initialPrice[1]] );
  const [currentPage, setCurrentPage] = useState<any>(1);

  // Import data from auth selectora
  const dispatch = useAppDispatch();
  const {
    isLoadingSubCategories,
    subCategoryData,
    categoryProductData,
    isLoadingCategoryProduct,
  } = useAppSelector((state: any) => state.category);

  useEffect(() => {

    let newSearchParams: any = { ...searchParams };

    // Helper function to set or remove parameters
    const updateSearchParams = (param: string, value: any) => {
      if (value) {
        newSearchParams[param] = value;
      } else {
        delete newSearchParams[param];
      }
    };

    let selectedColor = filterColor.values().next().value;
    let selectedSize = filterSize.values().next().value;
    let selectedDesigner = filterDesigner.values().next().value;
    let selectedCategory = filterCategory.values().next().value;
    let priceLimit = filterPrice.values();
    let minPrice = priceLimit.next().value;
    let maxPrice = priceLimit.next().value;  
    //    // Update 'color' and 'designer' parameters using the helper function
    updateSearchParams('size', selectedSize);
    updateSearchParams('color', selectedColor);
    updateSearchParams('designer', selectedDesigner);
    updateSearchParams('sub-category', selectedCategory);
    updateSearchParams('min', minPrice);
    updateSearchParams('max',maxPrice);
    setCurrentPage(1)
    // Check if newSearchParams has any keys
    const hasParams = Object.keys(newSearchParams).length > 0;

    // Update searchParams state
    setSearchParams(hasParams ? newSearchParams : {});
  }, [filterSize, filterColor, filterDesigner, filterCategory, filterPrice]);

  useEffect(() => {
    dispatch(getSubCategories({ categoryId }));
  }, [dispatch, categoryId]);

  useEffect(() => {
    dispatch(getCategoryProducts({
      color: searchParams.get("color"),
      category: searchParams.get("sub-category"),
      size: searchParams.get("size"),
      designer: searchParams.get("designer"),
      min: searchParams.get("min"),
      max: searchParams.get("max"),
      page: currentPage
    }));
  }, [categoryId, currentPage, searchParams])

  const handlePriceChange = (newRange: any) => {
    setFilterPrice([newRange[0].toString(),newRange[1].toString()]);
  };
  const handlePriceReset=()=>{
    setFilterPrice(initialPrice);
  }

  const handelClearFilter = () => {
    setFilterCategory(new Set(categoryId))
    setFilterDesigner(new Set());
    setFilterSize(new Set());
    setFilterColor(new Set());
    setFilterPrice(initialPrice);
    setCurrentPage(1)
  }

  // All the state and function return to LoginView
  return {
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
    categoryProductData,
    isLoadingCategoryProduct,
    isLoadingSubCategories,
    currentPage,
    setCurrentPage,
    handelClearFilter,
    handlePriceReset
  };
};

export default CategoryController;