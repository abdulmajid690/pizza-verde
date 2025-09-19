import apiUrl from "../config/apiUrl";

const fetchPostCode = async (postcode: string) => {
  console.log('postcode', postcode)
  return fetch(`${apiUrl}/branches/byPostcode/${postcode}/${1}`)
    .then((res) => {
      // console.log("res", res);
      return res.json();
    })
    .then((json) => {
      // console.log("json", json);
      return json;
    })
    .catch((error) => {
      // console.log("error", error);
      return error;
    });
};

export default fetchPostCode;
