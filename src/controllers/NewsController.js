
class NewsController {

    // Get /news
    index(req,res) {
        res.render('news');
    }

    // Get /new:slug
    show(req, res) {
        res.send('newsDetail');
    }
}

module.exports = new NewsController;
