import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";
import { useParams, useSearchParams } from "react-router-dom";
import {
  getCategoryProducts,
  getSubCategories,
} from "store/category/category.slice";

interface Filters {
  colors: string[];
  category: string[];
  designer: string[];
  price: number[];
  size: string[];
  shippingTime: string[];
  occasion: string[];
}

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

  console.log(searchParams.get("designer"), "_________________designer");

  const [filters, setFilters] = useState<Filters>({
    colors: [],
    category: [],
    designer: [],
    price: [0, 5000],
    size: [],
    shippingTime: [],
    occasion: [],
  });

  const [checkedItems, setCheckedItems] = useState<any>(new Set());
  const [filterDesigner, setFilterDesigner] = useState<any>(new Set());
  const [filterSize, setFilterSize] = useState<any>(new Set());
  const [filterColor, setFilterColor] = useState<any>(new Set());
  const [filterShipping, setFilterShipping] = useState<any>(new Set());
  const [filterOccasion, setFilterOccasion] = useState<any>(new Set());
  const [filterPrice, setFilterPrice] = useState<any>([0, 100000]);
  const [currentPage, setCurrentPage] = useState<any>(1);

  // Import data from auth selector
  const dispatch = useAppDispatch();
  const {
    isLoadingSubCategories,
    subCategoryData,
    categoryProductData,
    isLoadingCategoryProduct,
  } = useAppSelector((state: any) => state.category);

  useEffect(() => {
    // setSearchParams(`/category/6?designer=${filterDesigner}`)
    setFilters({
      colors: Array.from(filterColor),
      category: Array.from(checkedItems),
      designer: Array.from(filterDesigner),
      price: filterPrice,
      size: Array.from(filterSize),
      shippingTime: Array.from(filterShipping),
      occasion: Array.from(filterOccasion),
    });
  }, [
    checkedItems,
    filterDesigner,
    filterSize,
    filterColor,
    filterShipping,
    filterOccasion,
    filterPrice,
  ]);

  useEffect(() => {
    dispatch(getSubCategories({ categoryId }));
    dispatch(getCategoryProducts({ categoryId }));
  }, [dispatch, categoryId]);

  const handlePriceChange = (newRange: any) => {
    setFilterPrice(newRange);
  };

  const generateUrlWithFilters = (baseUrl: string, filters: Filters) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      const value = filters[key as keyof Filters];
      if (Array.isArray(value) && value.length > 0) {
        params.append(key, value.join("%"));
      }
    });
    return `${baseUrl}?${params.toString()}`;
  };

  useEffect(() => {
    const baseUrl = "/";
    setSearchParams(generateUrlWithFilters(baseUrl, filters));
  }, [filters]);

  const setSearchFilter = (params: any, values: any) => {
    setSearchParams({
      params: values
        ?.map((elem: any) => {
          return `${elem}`;
        })
        .toString(),
    });
  };

  // All the state and function return to LoginView
  return {
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
    setCurrentPage
  };
};

export default CategoryController;
