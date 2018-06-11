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

  // SUCCESS CALLBACK

  // FAIL CALLBACK

}

console.table('neighborhoods array', neighborhoods);

$('#show-neighborhoods').on('click', handleShowNeighborhoods);