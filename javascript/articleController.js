  function ArticleController(articleModel, articleView) {
      this.model = articleModel;
      this.view = articleView;
  }

  ArticleController.prototype.getHeadlines = function (domElement) {
      var self = this;
      this.model.allHeadlines(function (headlines) {
          domElement.innerHTML = self.view.render(headlines)
      });
  }