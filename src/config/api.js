import { store } from "reduxStore";
import { addLink } from "reduxStore/links";

export const BASE_API_URL = `https://api.shrtco.de/v2/shorten?url=`;

export const shorten = async (url) => {
  await fetch(BASE_API_URL + url).then((response) => {
    if (response.status !== 201) {
      console.log("Problem with shortening: " + response.status);
      return;
    }
    if (url) {
      response.json().then((data) => {
        return store.dispatch(
          addLink({
            short: data.result.short_link,
            long: data.result.original_link,
          })
        );
      });
    }
  });
};
