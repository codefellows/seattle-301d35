var neighborhoods = [];

function Neighborhood(rawDataObject) {
  for (key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  const templateRender = Handlebars.compile($('#neighborhood-template').html());
  return templateRender(this);
};

function handleShowNeighborhoods() {
  // $.getJSON('url').then(success-callback, fail-callback)
  $.getJSON('data/neighborhoodData.json').then(
    // SUCCESS CALLBACK
    function(data) {
      console.table(data);
      // Create neighborhood instances
      data.forEach(function(neighborhoodObject) {
        neighborhoods.push(new Neighborhood(neighborhoodObject));
      });
      // Render the 'hoods to the DOM
      neighborhoods.forEach(function(hood) {
        // console.log(hood);
        $('#neighborhoods').append(hood.toHtml());
      })

    },
    // FAIL CALLBACK
    function(err) {
      console.log(err);
    }
  )
}

console.table('neighborhoods array', neighborhoods);

$('#show-neighborhoods').on('click', handleShowNeighborhoods);