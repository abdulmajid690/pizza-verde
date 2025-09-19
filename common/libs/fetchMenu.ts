import apiUrl from "../config/apiUrl";

const fetchMenu = async (req: any) => {
  // console.log("req", req);
  return fetch(`${apiUrl}/menus/byBranchSlugWithProducts/${req}`)
    .then((response) => {
      // console.log("response", response);
      return response.json();
    })
    .then((json) => {
      // console.log("json", json);
      return json;
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};

export default fetchMenu;
