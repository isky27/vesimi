import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getSearchProducts, getSubCategories } from "store/category/category.slice";
import { priceRange } from "constant";
import { getCategoryUrl } from "utils";

/**
 *
 * @returns all controllers for login page.
 */

const CategoryController = () => {
  const { categoryId = "" } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterCategory, setFilterCategory] = useState<any>(new Set([searchParams.get("sub-category") ?? categoryId]));
  const [filterDesigner, setFilterDesigner] = useState<any>(new Set([searchParams.get("designer")]));
  const [filterSize, setFilterSize] = useState<any>(new Set([searchParams.get("size")]));
  const [filterColor, setFilterColor] = useState<any>(new Set([searchParams.get("color")]));
  const [filterPrice, setFilterPrice] = useState<any>([searchParams.get("min") ?? priceRange[0], searchParams.get("max") ?? priceRange[1]]);
  const [currentPage, setCurrentPage] = useState<any>(1);

  // Import data from auth selectora
  const dispatch = useAppDispatch();
  const location = useLocation(); // React Router's location hook
  const navigate = useNavigate();
  const {
    isLoadingSubCategories,
    subCategoryData,
    isLoadingSearchProduct,
    searchProductData,
  } = useAppSelector((state: any) => state.category);

  useEffect(() => {
    let newSearchParams: any = {};
    searchParams.forEach((value, key) => {
      newSearchParams[key] = value;
    });

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
    let priceLimit = filterPrice.values();
    let minPrice = priceLimit.next().value;
    let maxPrice = priceLimit.next().value;
    //    // Update 'color' and 'designer' parameters using the helper function
    updateSearchParams("size", selectedSize);
    updateSearchParams("color", selectedColor);
    updateSearchParams("designer", selectedDesigner);
    updateSearchParams("min", minPrice);
    updateSearchParams("max", maxPrice);
    setCurrentPage(1);
    // Check if newSearchParams has any keys
    const hasParams = Object.keys(newSearchParams).length > 0;
    // Update searchParams state
    setSearchParams(hasParams ? newSearchParams : {});
  }, [filterSize, filterColor, filterDesigner, filterPrice]);

  // Reset currentPage to 1 on initial load or navigation
  useEffect(() => {
    setCurrentPage(1);
  }, [location.key]); // location.key changes with every navigation

  useEffect(() => {
    if (filterCategory.values().next().value != categoryId) {
      let selectedCategory = filterCategory.values().next().value;
      navigate(getCategoryUrl(selectedCategory));
    }
  }, [filterCategory]);

  useEffect(() => {
    dispatch(getSubCategories({ categoryId }));
  }, [dispatch, categoryId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      getSearchProducts({
        color: searchParams.get("color"),
        category: searchParams.get("sub-category"),
        size: searchParams.get("size"),
        designer: searchParams.get("designer"),
        min: searchParams.get("min"),
        max: searchParams.get("max"),
        name: searchParams.get("name") || "",
        page: currentPage,
        sale: searchParams.get("sale") || "",
      })
    );
  }, [dispatch, currentPage, searchParams]);

  const handlePriceChange = (newRange: any) => {
    setFilterPrice([newRange[0].toString(), newRange[1].toString()]);
  };

  const handlePriceReset = () => {
    setFilterPrice(priceRange);
  };

  const handelClearFilter = () => {
    setFilterDesigner(new Set());
    setFilterSize(new Set());
    setFilterColor(new Set());
    setFilterPrice(priceRange);
    setCurrentPage(1);
  };

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
    isLoadingSearchProduct,
    searchProductData,
    isLoadingSubCategories,
    currentPage,
    setCurrentPage,
    handelClearFilter,
    handlePriceReset
  };
};

export default CategoryController;