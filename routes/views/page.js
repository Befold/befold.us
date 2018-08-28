const keystone = require('keystone');
var Page = keystone.list('Page');

exports = module.exports = function (req, res, next) {
  const view = new keystone.View(req, res);
  const locals = res.locals;
  const slug = req.params.slug;

  view.on('init', done => {
    var q = Page.model.findOne({ slug });

    q.exec(function (err, result) {
      if (!result) return next();

      locals.page = result;

      done(err);
    });
  });


  // Render the view
  view.render('page');
};
