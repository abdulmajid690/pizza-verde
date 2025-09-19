import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchPostCodeByBranchData } from "@/redux/findStoreSlice";
import StoreDetails from "@/Containers/FindStore/StoreDetails/StoreDetails";
import GoogleMap from "@/Containers/FindStore/GoogleMap/GoogleMap";

export default function FindStore() {
  const { pathname, query } = useRouter();
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (query?.postCode) {
      //@ts-ignore
      dispatch(fetchPostCodeByBranchData(query?.postCode));
    }
  }, [query]);

  return (
    <div className="find-store-container max-w-[1280px] mx-auto flex items-center justify-between px-10 py-10 relative">
      <StoreDetails />
      <GoogleMap />
    </div>
  );
}
