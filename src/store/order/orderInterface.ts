export interface OrderDataInterface {
    isError: boolean;
    isSuccess: boolean;
    isLoadingOrderAddress: boolean;
    isLoadingCartList: boolean;
    cartListData: any | null;
    isLoadingCartSummary: boolean,
    cartSummaryData: any| null;
}

