export const isPresentInFavourites = (fav, restaurant) => {
  for (let item of fav) {
    if (item.id === restaurant.id) {
      return true;
    }
  }
  return false;
};
