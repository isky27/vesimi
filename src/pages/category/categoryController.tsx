import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux.hooks';
import { useParams, useSearchParams } from 'react-router-dom';
import { getCategoryProducts, getSubCategories } from 'store/category/category.slice';

/**
 * 
 * @returns all controllers for login page.
 */

const CategoryController = () => {

    const {categoryId} = useParams()

    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({ colors: [], category: [], designer: [], price: [0, 5000], size: [], shippingTime: "", occasion: [] })

    const [checkedItems, setCheckedItems] = useState<any>(new Set());
    const [filterDesigner, setFilterDesigner] = useState<any>(new Set());
    const [filterSize, setFilterSize] = useState<any>(new Set());
    const [filterColor, setFilterColor] = useState<any>(new Set())
    const [filterShipping, setFilterShipping] = useState<any>(new Set());
    const [filterOccasion, setFilterOccasion] = useState<any>(new Set())
    const [filterPrice, setFilterPrice] = useState<any>([0,100000])
    const [currentPage, setCurrentPage] = useState<any>(1)

    // Import data from auth selector
    const dispatch = useAppDispatch()
    const { isLoadingSubCategories, subCategoryData,  categoryProductData, isLoadingCategoryProduct} = useAppSelector((state:any) => state.category);

    console.log(categoryProductData, "categoryProductData");


    useEffect(()=>{
        dispatch(getSubCategories({categoryId}))
        dispatch(getCategoryProducts({categoryId}))
    },[dispatch, categoryId])

	const handlePriceChange = (newRange: any) => {
		setFilterPrice(newRange);
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
        isLoadingSubCategories
    }

}

export default CategoryController
