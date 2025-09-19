import { getSelectedAddonQuantity } from "@/common/libs/addonsQuantity";
import { fixedPrice } from "@/common/libs/fixedPrice";
import showAddonsPrice from "@/common/libs/showAddonsPrice";
import React, { useEffect, useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addAddons,
  // removeAddon,
  selectProduct,
} from "@/redux/singleProductSlice";

interface AddonsProps {
  tier?: any;
  addons?: any;
  type: string;
  index: number;
  noOfFreeAddons: number;
}

const Addons = ({ tier, type, addons, index, noOfFreeAddons }: AddonsProps) => {
  let addonsPrice = showAddonsPrice(type, addons);
  const dispatch = useDispatch();
  const [freeAddons, setFreeAddons] = useState<any>([]);
  const [paidAddons, setPaidAddons] = useState<any>([]);
  const [freeCount, setFreeCount] = useState<number>(0);
  const [paidCount, setPaidCount] = useState<number>(0);

  const handleSelectAddons = (i: number) => {
    let singleAddon = addons[i];

    let existAddon = freeAddons?.find(
      (addon: any) => addon?.id === singleAddon.id
    );
    if (freeCount < tier?.free_items || freeCount < noOfFreeAddons) {
      dispatch(
        selectProduct({
          index,
          typeOf: "free",
          ...tier,
          singleAddon,
        })
      );
      if (existAddon) {
        setFreeAddons(
          freeAddons?.map((item: any) => {
            return item.id === singleAddon.id
              ? { ...existAddon, quantity: existAddon.quantity + 1 }
              : item;
          })
        );
      } else {
        setFreeAddons([...freeAddons, { ...singleAddon, quantity: 1 }]);
      }
    } else {
      let existAddon = paidAddons?.find(
        (addon: any) => addon?.id === singleAddon.id
      );
      // let maxitems = parseFloat(tier?.max_items) - freeCount;
      if (paidCount < tier?.max_items) {
        dispatch(
          selectProduct({
            index,
            typeOf: "paid",
            ...tier,
            singleAddon,
          })
        );
        if (existAddon) {
          setPaidAddons(
            paidAddons?.map((item: any) => {
              return item.id === singleAddon.id
                ? { ...existAddon, quantity: existAddon.quantity + 1 }
                : item;
            })
          );
        } else {
          setPaidAddons([...paidAddons, { ...singleAddon, quantity: 1 }]);
        }
      }
    }
  };

  const handleRemoveAddon = (index: number) => {
    const addon = addons[index];
    let duplicateFreeAddons = [...freeAddons];

    let findIndex = freeAddons?.findIndex((item: any) => item.id === addon.id);

    if (findIndex !== -1) {
      let duplicatePaidAddons = [...paidAddons];
      let secondFindIndex = duplicatePaidAddons?.findIndex(
        (item: any) => item.id === addon.id
      );
      if (secondFindIndex !== -1) {
        duplicatePaidAddons[secondFindIndex].quantity--;
        if (duplicatePaidAddons[secondFindIndex].quantity < 1) {
          duplicatePaidAddons.splice(secondFindIndex, 1);
        }
        setPaidAddons(duplicatePaidAddons);
      } else {
        duplicateFreeAddons[findIndex].quantity--;
        if (duplicateFreeAddons[findIndex].quantity < 1) {
          duplicateFreeAddons.splice(findIndex, 1);
        }
        setFreeAddons(duplicateFreeAddons);
      }
    } else {
      let duplicatePaidAddons = [...paidAddons];
      let secondFindIndex = duplicatePaidAddons?.findIndex(
        (item: any) => item.id === addon.id
      );
      if (secondFindIndex !== -1) {
        duplicatePaidAddons[secondFindIndex].quantity--;
        if (duplicatePaidAddons[secondFindIndex].quantity < 1) {
          duplicatePaidAddons.splice(secondFindIndex, 1);
        }
        setPaidAddons(duplicatePaidAddons);
      }
    }
  };

  useMemo(() => {
    if (freeAddons.length) {
      setFreeCount(
        freeAddons?.reduce((prev: number, next: any) => {
          return prev + next.quantity;
        }, 0)
      );
    } else {
      setFreeCount(0);
    }
    if (paidAddons.length) {
      setPaidCount(
        paidAddons?.reduce((prev: number, next: any) => {
          return prev + next.quantity;
        }, 0)
      );
    } else {
      setPaidCount(0);
    }
  }, [freeAddons, paidAddons]);

  let getSelectedAddonQuantity = (addons: any, id: number) => {
    const findItem = addons?.find((addon: any) => addon.id === id);
    if (findItem) {
      return findItem.quantity;
    }
    return 0;
  };
// console.log("freeAddons",freeAddons)
// console.log("paidAddons",paidAddons)
  return (
    <div className="addons-container">
      <div className="title flex items-center justify-between px-5 py-2 border-b-[1px] border-primary">
        <p className="text-sm font-light pl-[29px]">{tier?.title}</p>
        <p className="text-sm font-light">
          Max Allowed <span className="font-bold">{tier?.max_items}</span>
        </p>
        <p className="text-sm font-light">
          Free Addons Allowed{" "}
          <span className="font-bold text-primary">
            {noOfFreeAddons ? noOfFreeAddons : tier?.free_items}
          </span>
        </p>
      </div>
      {addons?.map((addon: any, index: number) => {
        let findAmountByIndex = addonsPrice[index]?.toString();
        let fixedAmount = fixedPrice(findAmountByIndex);
        let freeAddonQuantity = getSelectedAddonQuantity(freeAddons, addon.id);
        let paidAddonQuantity = getSelectedAddonQuantity(paidAddons, addon.id);
        const { id, title, price } = addon;
        return (
          <div
            key={index}
            className="single-addon flex items-center justify-between px-5 py-1 cursor-pointer border-b-[1px] border-secondary"
          >
            <div
              className="flex items-center justify-between flex-1"
              onClick={() => handleSelectAddons(index)}
            >
              <div className="flex items-center">
                {freeAddonQuantity > 0 && (
                  <span className="text-sm font-bold text-primary mr-2">
                    {freeAddonQuantity}
                  </span>
                )}
                {paidAddonQuantity > 0 && (
                  <span className="text-sm font-bold text-secondary mr-2">
                    {paidAddonQuantity}
                  </span>
                )}
                <p className="text-sm font-light">{title}</p>
              </div>
              <h4 className="text-sm font-light">
                +£{parseFloat(fixedAmount)}
              </h4>
            </div>
            {paidAddonQuantity > 0 || freeAddonQuantity > 0 ? (
              <FaTrashAlt
                className="text-secondary ml-2"
                onClick={() => handleRemoveAddon(index)}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Addons;
