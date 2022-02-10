
class SiteController {

    // Get /news
    index(req,res) {
        res.render('home');
    }

    // Get /new:slug
    show(req, res) {
        res.send('siteDetail');
    }
}

module.exports = new SiteController;
