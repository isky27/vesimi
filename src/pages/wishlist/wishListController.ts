import { useEffect } from "react";
import { getWishList, removeWishList } from "store/product/productSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const WishListController = () => {
  const dispatch = useAppDispatch();
  const { loginDetails } = useAppSelector((state: any) => state.auth);
  const { isLoadingWishList, wishListData } = useAppSelector(
    (state: any) => state.product
  );
  const { selectedCurrency } = useAppSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getWishList({ userId: loginDetails?.user?.id }));
  }, [dispatch, loginDetails]);

  const handleRemoveWishList = (productId: any) => {
    dispatch(
      removeWishList({
        userId: loginDetails?.user?.id,
        productId: productId,
      })
    ).unwrap()
      .then(() => {
        dispatch(getWishList({ userId: loginDetails?.user?.id }));
      })
      .catch(() => {
        dispatch(getWishList({ userId: loginDetails?.user?.id }));
      });
  };

  return {
    selectedCurrency,
    isLoadingWishList,
    wishListData,
    handleRemoveWishList,
  };
};

export default WishListController;
