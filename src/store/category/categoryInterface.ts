export interface CategoryInterface {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string | null;
    isLoadingSubCategories: boolean; 
    subCategoryData : any;
    categoryProductData:any,
    isLoadingCategoryProduct:boolean;
    isLoadingSearchProduct: boolean,
    searchProductData: any
}

