fetch(https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod/getswaddlebyquiz?material=cotton&rollboth=no&sizeRange=Under%203M&arms=down)
  .then(function (response) {
    // The JSON data will arrive here
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
  });