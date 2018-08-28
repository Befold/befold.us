const keystone = require('keystone');
const Types = keystone.Field.Types;

const Story = new keystone.List('Story', {
  map: { name: 'title' }
});

Story.add({
  title: { type: Types.Text, required: true, index: true },
  body: { type: Types.Textarea, required: true, initial: true },
  linkText: { type: Types.Text, required: true, initial: true },
  linkType: { type: Types.Select, initial: true, options: 'page, hyperlink', default: 'page', required: true },
  linkToPage: { type: Types.Relationship, initial: true, ref: 'Page', dependsOn: { linkType: 'page' }, require: true },
  linkHref: { type: Types.Url, initial: true, dependsOn: { linkType: 'hyperlink' }}
});

/**
 * Registration
 */
Story.defaultColumns = 'title, body, linkHref';
Story.register();
