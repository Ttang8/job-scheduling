export const selectAllTrucks = trucks => {
  let arr = Object.keys(trucks).map((id) => (trucks[id]));
  return arr;
};
