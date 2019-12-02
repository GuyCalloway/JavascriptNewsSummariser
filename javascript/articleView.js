  function ArticleView() {}

  ArticleView.prototype.render = function (articles) {
      return [
          '<ul>',
          this._renderTitles(articles),
          '</ul>'
      ].join('')
  }

  ArticleView.prototype._renderTitles = function (articles) {
      return articles.map(function (article) {
          return '<li>' + '<a href=' + article.url + '>' + article.title + '</a>' + '</li>' +
              '<img src=' + article.image '>'
      }).join('')
  }