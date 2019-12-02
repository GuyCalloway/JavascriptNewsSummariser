window.addEventListener('load', () => {
    var articleModel = new ArticleModel();
    var articleView = new ArticleView();
    var articleController = new ArticleController(articleModel, articleView);

    articleController.getHeadlines(document.getElementById('newsapp'))
})