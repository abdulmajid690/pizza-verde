import React, { useEffect } from "react";
import Items from "@/Containers/Menu/Items";
import { fetchMenuItems } from "@/redux/menuItemsSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function Menu() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (query?.slug) {
      // @ts-ignore
      dispatch(fetchMenuItems(query?.slug));
    }
  }, [query]);

  return (
    <>
      <Items />
    </>
  );
}
