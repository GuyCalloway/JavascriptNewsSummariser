function ArticleModel() {
    this._today = new Date().toISOString().slice(0, 10);
}

ArticleModel.prototype.allHeadlines = function (cb) {
    var self = this;
    $.get('https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=' + this._today + '&api-key=test', function (data) {
        cb(self._getHeadlines(data));
    })
}

ArticleModel.prototype._getHeadlines = function (data) {
    return data.response.results.map(function (article) {
        return {
            title: article.webTitle,
            id: article.id,
            url: article.apiUrl
        }
    })
}