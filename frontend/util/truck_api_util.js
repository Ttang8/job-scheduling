export const requestTrucks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/trucks'
  })
);

export const createTruck = truck => (
  $.ajax({
    method: 'POST',
    url: '/api/trucks',
    data: truck
  })
);
