import React, { useState, useEffect } from "react";
import Button from "@/common/Components/Button/Button";
import Schedule from "./Schedule";
import { useRouter } from "next/router";
import { useSelector ,useDispatch} from "react-redux";
import { savedSlug } from "@/redux/menuItemsSlice";

const StoreDetails = () => {
  const { query, push, pathname } = useRouter();
  const [postCode, setPostCode] = useState("");
  const branch = useSelector((state: any) => state.branch.branch);
  const [slug, setSlug] = useState("");
  const dispatch=useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (postCode.length) {
      push(`/findstore?postCode=${postCode}`);
    }
  };

  const handleGoToMenuItems = () => {
    if (slug !== "")
     {
      dispatch(savedSlug(slug))
      push(`/menu?slug=${slug}`);
    }
  };

  useEffect(() => {
    if (query?.postCode) {
      //@ts-ignore
      setPostCode(query?.postCode);
    }
    if (branch?.length > 0) {
      branch?.map((b: any) => {
        return setSlug(b.slug);
      });
    }
  }, [query, branch]);

  return (
    <div className="details-container flex-[1.2_1_0%] mr-5">
      <div className="Search-bar-container">
        <div className="title pl-3 mb-3">
          <h2 className="text-5xl text-primary font-[BebasKai]">
            STORE FINDER
          </h2>
        </div>
        <form className="p-3" onSubmit={handleSubmit}>
          <h4 className="font-medium text-white">FIND YOUR NEAREST STORE</h4>
          <div className="input-group flex items-end">
            <input
              type="text"
              name="postCode"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              className="bg-transparent text-white flex-[2_1_0%] border-b-[1px] border-white mr-2 h-[45px]"
            />
            <Button
              title="Find Store"
              type="submit"
              bgColor="bg-white rounded-sm flex-1"
              padding="py-2 px-7"
            />
          </div>
        </form>
      </div>
      <Schedule handleFunction={handleGoToMenuItems} />
    </div>
  );
};

export default StoreDetails;
