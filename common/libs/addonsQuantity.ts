export function getFreeAddonsQuantity(freeAddons: any) {
  return (
    freeAddons?.reduce((prev: number, addon: any) => {
      console.log(addon);
      return addon.quantity + prev;
    }, 0) || 0
  );
}

export function getPaidAddonsQuantity(paidAddons: any) {
  // console.log("getFreeAddons", paidAddons);
  // return (
  //   paidAddons?.reduce((prev: number, addon: any) => {
  //     console.log(addon);
  //     addon.quantity + prev;
  //   }, 0) || 0
  // );
}

export function getSelectedAddonQuantity(addons: any, id: number) {
  const findItem = addons?.find((addon: any) => addon.id === id);
  console.log("findItem", findItem);

  if (findItem) {
    console.log("findItem", findItem);
    // return addons[findIndex]?.quantity;
  }

  return 0;
}
