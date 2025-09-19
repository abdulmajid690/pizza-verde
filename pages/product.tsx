import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "@/Containers/SingleProduct/SingleProduct";
import {
  fetchSingleProductBySlug,
  singleProductDetail,
} from "@/redux/singleProductSlice";

export default function Product() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const product = useSelector(singleProductDetail);
  useEffect(() => {
    if (query?.slug) {
      // @ts-ignore
      dispatch(fetchSingleProductBySlug(query?.slug));
    }
  }, [query]);

  return (
    <>
      <SingleProduct product={product} />
    </>
  );
}
