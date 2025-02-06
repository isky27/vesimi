export interface OrderDataInterface {
  isError: boolean;
  isSuccess: boolean;
  isLoadingOrderAddress: boolean;
  isLoadingCartList: boolean;
  cartListData: any | null;
  isLoadingCartSummary: boolean;
  cartSummaryData: any | null;
  isLoadingSaveOrder: boolean;
  saveOrderData: any;
  isLoadingUpdateCart: boolean;
  updateCartData: any;
  isLoadingDeleteCartProduct: boolean;
  isLoadingOrderHistory: boolean;
  orderHistoryData: any;
  isLoadingOrderDetails: boolean;
  orderDetailsData: any;
  isLoadingShippingCost: boolean;
  shippingPriceData: any;
}

