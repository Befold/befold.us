var keystone = require('keystone');
var Story = keystone.list('Story');
var Page = keystone.list('Page');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

  view.on('init', next => {
    var q = Story.model.find({}).populate('linkToPage');

    q.exec(function (err, result) {
      locals.stories = result;
      next(err);
    });
  });

  view.on('init', next => {
    console.log(locals.stories);

    next();
  });

	// Render the view
	view.render('index');
};
