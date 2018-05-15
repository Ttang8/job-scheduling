export const requestTrucks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/trucks'
  })
);
