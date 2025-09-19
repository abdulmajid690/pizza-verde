import SelectedSingleProduct from "@/common/Components/Cards/SelectedSingleProduct";
import StickyCart from "@/common/Components/StickyCart/StickyCart";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Addons from "@/common/Components/Addons/Addons";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { fixedPrice } from "@/common/libs/fixedPrice";
import { useSelector, useDispatch } from "react-redux";
import {
  tagId,
  selectSpecificProduct,
  singleProductDetail,
  singleItem,
  increaseItemCounter,
  decreaseItemCounter,
} from "@/redux/singleProductSlice";
import { useRouter } from "next/router";
import Product from "./Product";
import Sizes from "./Sizes";
import Options from "./Options";

// import images
import mealBox from "@/common/images/meal-box-1.png";
import blackOption from "@/common/images/black-option.png";
import greenOptions from "@/common/images/green-option.png";
import backIcon from "@/common/images/back-icon.png";
import whiteCartIcon from "@/common/images/white-cart.png";

interface SingleProductProps {
  product: any;
}

const SingleProduct = ({ product }: SingleProductProps) => {
  const { back } = useRouter();
  const [noOfFreeAddons, setNoOfFreeAddons] = useState(0);
  const dispatch = useDispatch();
  // const singleProduct = useSelector(singleProductDetail);
  const item = useSelector(singleItem);
  const specificId = useSelector(tagId);
  const [filterProduct, setFilterProduct] = useState<any>([]);
  let price = fixedPrice(item?.price_delivery?.toString());

  const handleAddToCart = () => {
    // console.log("salam");
    // setIsCart(true)
  };

  useEffect(() => {
    if (specificId) {
      let filter = product?.specific_tiers?.filter((item: any) => {
        return item.tag_id === specificId;
      });
      setFilterProduct(filter);
    }
    if (specificId === "") {
      setFilterProduct([]);
    }
  }, [specificId]);

  return (
    <div className="single-product-container max-w-[1280px] mx-auto flex justify-between px-10 py-10">
      <div className="wrapper flex-[2_1_0%] flex">
        <SelectedSingleProduct
          title={product?.title}
          image={mealBox}
          price={price}
          textAlign="text-center text-[16px] font-bold text-secondary mb-3"
          style="selected-item-container flex-1"
          imageRadius="rounded-sm"
          contentRadius="rounded-sm"
        />
        <div className="single-item-selection flex-[3_1_0%] mx-5">
          <div className="title mb-3">
            <h2 className="text-3xl font-bold text-primary">
              {product?.title}
            </h2>
            <p className="">{product?.title}</p>
          </div>
          <div className="options-container shadow-[0_3px_16px_#00000045] py-5 rounded">
            <div className="flex items-center px-5 pb-2 border-b-[1px] border-primary">
              <Image
                src={blackOption}
                alt="black option"
                className="w-[17px] h-[17px] mr-3"
              />
              <h3 className="font-bold">SELECT YOUR OPTIONS</h3>
            </div>
            {product?.clickables.length > 0 && (
              <div className="btn-container flex items-center text-white px-[50px] py-3 border-b-[1px] border-primary">
                {product?.clickables.map((clickable: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="single-selection flex items-center bg-primary mr-2"
                    >
                      <button
                        className="font-bold p-[9px]"
                        onClick={() =>
                          dispatch(selectSpecificProduct(clickable.id))
                        }
                      >
                        {clickable.title}
                      </button>
                      {specificId === clickable.id ? (
                        <span
                          className="remove-selection bg-secondary p-2"
                          onClick={() => dispatch(selectSpecificProduct(""))}
                        >
                          <FaTimes className="text-2xl" />
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}
            {product?.tiers?.map((tier: any, index: any) => {
              // console.log("product tier", tier);
              const handleOrdinalSuffixOf = (i: number) => {
                var j = i % 10,
                  k = i % 100;
                if (j == 1 && k != 11) {
                  return i + "st";
                }
                if (j == 2 && k != 12) {
                  return i + "nd";
                }
                if (j == 3 && k != 13) {
                  return i + "rd";
                }
                return i + "th";
              };
              switch (tier.type) {
                case "Product":
                  return (
                    <Product
                      key={tier.id}
                      tier={tier}
                      products={tier?.products}
                      type={tier.type}
                      number={handleOrdinalSuffixOf(index + 1)}
                      index={index}
                      setNoOfFreeAddons={setNoOfFreeAddons}
                    />
                  );
                case "Size":
                  return (
                    <Sizes
                      key={tier.id}
                      tier={tier}
                      products={tier?.sizes}
                      type={tier.type}
                      index={index}
                    />
                  );
                case "Option":
                  return (
                    <Options
                      key={tier.id}
                      tier={tier}
                      products={tier?.options}
                      image={greenOptions}
                      type={tier.type}
                      index={index}
                    />
                  );
                case "Addon":
                  return (
                    <Addons
                      key={tier.id}
                      tier={tier}
                      addons={tier?.addons}
                      type={tier.type}
                      index={index}
                      noOfFreeAddons={noOfFreeAddons}
                    />
                  );
              }
            })}
            {filterProduct?.map((tier: any, index: any) => {
              // console.log("product tier", tier);
              const handleOrdinalSuffixOf = (i: number) => {
                var j = i % 10,
                  k = i % 100;
                if (j == 1 && k != 11) {
                  return i + "st";
                }
                if (j == 2 && k != 12) {
                  return i + "nd";
                }
                if (j == 3 && k != 13) {
                  return i + "rd";
                }
                return i + "th";
              };
              switch (tier.type) {
                case "Product":
                  return (
                    <Product
                      key={tier.id}
                      tier={tier}
                      products={tier?.products}
                      type={tier.type}
                      number={handleOrdinalSuffixOf(index + 1)}
                      index={index}
                      setNoOfFreeAddons={setNoOfFreeAddons}
                    />
                  );
                case "Size":
                  return (
                    <Sizes
                      key={tier.id}
                      tier={tier}
                      products={tier?.sizes}
                      type={tier.type}
                      index={index}
                    />
                  );
                case "Option":
                  return (
                    <Options
                      key={tier.id}
                      tier={tier}
                      products={tier?.options}
                      image={greenOptions}
                      type={tier.type}
                      index={index}
                    />
                  );
                case "Addon":
                  return (
                    <Addons
                      key={tier.id}
                      tier={tier}
                      addons={tier?.addons}
                      type={tier.type}
                      index={index}
                      noOfFreeAddons={noOfFreeAddons}
                    />
                  );
              }
            })}
            <div className="quantity-and-total flex items-center justify-between pt-3 px-5">
              <div className="total-price flex items-center justify-between flex-1">
                <h3>Total:</h3>
                <h2 className="font-bold italic">£ {price}</h2>
              </div>
              <div className="quantity flex items-center justify-end flex-[2_1_0%]">
                <p className="text-sm font-light mr-2">Qty</p>
                <div className="btn-container flex items-center">
                  <button
                    className="bg-primary px-1 py-1"
                    onClick={() =>
                      dispatch(
                        increaseItemCounter({
                          id: product?.id,
                          price: product?.price_takeaway,
                        })
                      )
                    }
                  >
                    <FaPlus className="text-white" />
                  </button>
                  <p className="text-sm px-[10px] py-[2px] shadow-[0_0_3px_#0000004A]">
                    {item?.quantity}
                  </p>
                  <button
                    className={
                      item?.quantity > 1
                        ? "bg-secondary px-1 py-1"
                        : "bg-secondary px-1 py-1 pointer-events-none"
                    }
                    onClick={() =>
                      dispatch(
                        decreaseItemCounter({
                          id: product?.id,
                          price: product?.price_takeaway,
                        })
                      )
                    }
                  >
                    <FaMinus className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="end pt-3">
            <p className="instruction">
              Note: Options marked with ✱ are mandatory.
            </p>
            <div className="btn-container flex items-center justify-between mt-3">
              <button
                className="back-btn text-sm w-[150px] py-[9px] px-3 rounded bg-primary flex items-center justify-between font-bold text-white italic capitalize"
                onClick={() => back()}
              >
                <Image src={backIcon} alt="back image" className="w-[20px]" />
                back
              </button>
              <button
                className="add-to-cart text-sm w-[150px] py-[10px] px-3 rounded flex items-center justify-between bg-secondary font-bold text-white italic capitalize"
                onClick={handleAddToCart}
              >
                add to cart
                <Image
                  src={whiteCartIcon}
                  alt="cart image"
                  className="w-[20px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <StickyCart style="flex-1" />
    </div>
  );
};

export default SingleProduct;
