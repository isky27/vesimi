import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getSearchProducts, getSubCategories } from "../../store/category/category.slice";
import { priceRange } from "../../constant";
import { getCategoryUrl } from "../../utils";

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
  const [finalPrice, setFinalPrice] =  useState<any>([searchParams.get("min") ?? priceRange[0], searchParams.get("max") ?? priceRange[1]]);
  // Import data from auth selectora
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    isLoadingSubCategories,
    subCategoryData,
    isLoadingSearchProduct,
    searchProductData,
  } = useAppSelector((state: any) => state.category);

  const updateFilters = (key: string, value: any) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      if(key==="page"){
        newParams.set(key, value);
      }else{
        newParams.set(key, value);
        newParams.set("page", "1");
      }
    } else {
      newParams.delete(key);
    }

    setSearchParams(newParams);
  };

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
        name: searchParams.get("name") ?? "",
        page: searchParams.get("page") ?? 1,
        sale: searchParams.get("sale") ?? "",
      })
    );
  }, [dispatch, searchParams]);

  useEffect(()=>{
    let selectedSize = filterSize.values().next().value;
    if(selectedSize!==searchParams.get("size")){
      updateFilters("size", selectedSize);
    }
  },[filterSize]);


  useEffect(()=>{
    let selectedColor = filterColor.values().next().value;
    if(selectedColor !== searchParams.get("color")){
      updateFilters("color", selectedColor);
    }
  },[filterColor]);

  useEffect(()=>{
    let selectedDesigner = filterDesigner.values().next().value;
    if(selectedDesigner!==searchParams.get("designer")){
      updateFilters("designer", selectedDesigner);
    }
  },[filterDesigner]);

  useEffect(()=>{
    let minPrice = finalPrice[0];
    if(minPrice!= searchParams.get("min")){
      updateFilters("min", minPrice);
    }
  },[finalPrice[0]]);

  useEffect(()=>{
    let maxPrice = finalPrice[1];
    if(maxPrice != searchParams.get("max")){
      updateFilters("max", maxPrice);
    }
  },[finalPrice[1]]);

  useEffect(() => {
    if (filterCategory.values().next().value != categoryId) {
      let selectedCategory = filterCategory.values().next().value;
      let url = getCategoryUrl(selectedCategory);
      if (searchParams.get("sale")){
        url = url + "&sale=1"
      } 
      navigate(url);
    }
  }, [filterCategory]);

  useEffect(() => {
    dispatch(getSubCategories({ categoryId }));
  }, [dispatch, categoryId]);

  const handlePriceChange = (newRange: any) => {
    setFilterPrice([newRange[0].toString(), newRange[1].toString()]);
  };

  const handlePriceReset = () => {
    setFilterPrice(priceRange);
    setFinalPrice(priceRange)
  };

  const handelClearFilter = () => {
    setFilterDesigner(new Set());
    setFilterSize(new Set());
    setFilterColor(new Set());
    setFilterPrice(priceRange);
    setFinalPrice(priceRange)
    updateFilters("page",1);
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
    setFinalPrice,
    handlePriceChange,
    subCategoryData,
    isLoadingSearchProduct,
    searchProductData,
    isLoadingSubCategories,
    handelClearFilter,
    handlePriceReset,
    searchParams,
    updateFilters
  };
};

export default CategoryController;