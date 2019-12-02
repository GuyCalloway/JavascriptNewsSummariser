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
          return '<li>' + article.title + '</li>' +
              '<a href=' + article.url + '>' + '<img src=' + article.image + '>' + '</a>' +

              '<button class="button" onClick="window.open("data:text/html;charset=utf-8,<head></head><body><h3>' + article.text + '</h3></body><script>window.print();</script>");>' +
              '<span class="icon">Open</span>' + '</button>'
      }).join('')
  }

  function insert(text) {
      $('<div><p>inserted div</p><div>').insertAfter(obj);
  }