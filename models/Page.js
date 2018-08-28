const keystone = require('keystone');
const Types = keystone.Field.Types;

var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./uploads'), // required; path where the files should be stored
    publicPath: '/public/media', // path where files will be served
  }
});

const Page = new keystone.List('Page', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  track: true
});

Page.add({
  title: { type: Types.Text, required: true, index: true },
  brief: { type: Types.Markdown },
  content: { type: Types.Markdown },
  coverImage: { type: Types.File, storage }
});

/**
 * Registration
 */
Page.defaultColumns = 'title, content';
Page.register();
