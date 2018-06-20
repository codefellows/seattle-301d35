'use strict';
var app = app || {};

(function(module) {
  const articleView = {};

  const render = function(article) {
    let template = Handlebars.compile($('#article-template').text());

    article.daysAgo = parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);
    article.publishStatus = article.publishedOn ? `published ${article.daysAgo} days ago` : '(draft)';
    article.body = marked(article.body);

    return template(article);
  };

  // REVIEW: Stretch goal: Refactor to push this unique-check logic into the database.
  // Move any HTML into a template, in the HTML file where it belongs.
  articleView.populateFilters = function() {
    let template = Handlebars.compile($('#option-template').text());

    // Example of using model method with FP, synchronous approach:
    // REVIEW: This method is dependant on info being in the DOM. Only authors of shown articles are loaded.
    let options = app.Article.allAuthors().map(author => template({val: author}));
    if ($('#author-filter option').length < 2) { // Prevent duplication
      $('#author-filter').append(options);
    }

    // Example of using model method with async, SQL-based approach:
    // This approach is DOM-independent, since it reads from the DB directly.
    app.Article.allCategories(function(rows) {
      if ($('#category-filter option').length < 2) {
        $('#category-filter').append(rows.map(row => template({val: row.category})));
      }
    });
  };

  // REVIEW: Combine both filter functions to a single event handler,
  // which simply redirects to a url like: /category/skateboarding or /author/Kevin+Bacon
  articleView.handleFilters = function() {
    $('#filters').one('change', 'select', function() {
      let resource = this.id.replace('-filter', '');
      $(this).parent().siblings().find('select').val(''); // Reset the val from the opposing drop down
      page(`/${resource}/${$(this).val().replace(/\W+/g, '+')}`); // Replace any/all whitespace with a +
    });
  };

  // REVIEW: Remove the setTeasers method, and replace with a plain ole link in the article template.

  // REVIEW: Refactor this method so it works with any number of articles.
  // Also, it should be idempotent, so it can be run multiple times with identical results.
  articleView.index = function(articles) {
    $('#articles').show().siblings().hide();
    $('#articles article').remove();
    articles.forEach(a => $('#articles').append(render(a)))
    // REVIEW: Call the new unified filter handler function
    articleView.populateFilters();
    articleView.handleFilters();

    // REVIEW: Replace setTeasers with just the truncation logic, if needed:
    if ($('#articles article').length > 1) {
      $('.article-body *:nth-of-type(n+2)').hide();
    }
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  };

  module.articleView = articleView;
})(app);
