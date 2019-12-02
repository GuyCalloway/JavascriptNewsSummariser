function ArticleModel() {
    this._today = new Date().toISOString().slice(0, 10);
}

ArticleModel.prototype.allHeadlines = function (cb) {
    var self = this;
    $.get('https://content.guardianapis.com/search?show-fields=all&show-elements&api-key=25ceccca-b9bf-4f41-b703-b64ec781dfd2', function (data) {
        cb(self._getHeadlines(data));
    })
}

ArticleModel.prototype._getHeadlines = function (data) {
    return data.response.results.map(function (article) {
        return {
            title: article.webTitle,
            id: article.id,
            url: article.webUrl,
            image: article.fields.thumbnail,
            text: article.fields.bodyText
        }
    })
}