function ArticleModel() {
    this._today = new Date().toISOString().slice(0, 10);
}

ArticleModel.prototype.allHeadlines = function (cb) {
    var self = this;
    $.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=' + this._today, function (data) {
        cb(self._getHeadlines(data));
    })
}

ArticleModel.prototype._getHeadlines = function (data) {
    return data.response.results.map(function (article) {
        return {
            title: article.webTitle,
            id: article.id,
            url: article.webUrl,
            image: article.fields.thumbnail
        }
    })
}