import apiUrl from "../config/apiUrl";

const fetchProduct = async (req: any) => {
  //   console.log("req", req);
  return fetch(`${apiUrl}/products/byProductSlug/${req}`)
    .then((response) => {
      // console.log("response", response);
      return response.json();
    })
    .then((json) => {
      //   console.log("json", json);
      return json;
    })
    .catch((error) => {
      //   console.log(error);
      return error;
    });
};

export default fetchProduct;
