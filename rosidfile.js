module.exports = [
	{
		name: 'JS',
		path: 'assets/scripts/**/[^_]*.js',
		handler: 'rosid-handler-js'
	},
	{
		name: 'SASS',
		path: 'assets/styles/**/[^_]*.{css,scss}*',
		handler: 'rosid-handler-sass',
		opts: {
			in: '.scss'
		}
	},
	{
		name: 'NJK Component',
		path: 'assets/components/[^_]*/[^_]*.{html,njk}*',
		handler: 'rosid-handler-njk',
		opts: {
			prepend: '{% extends "../_layout.njk" %}{% block body %}',
			append: '{% endblock %}',
			src: 'src/',
			data: 'data.js'
		}
	},
	{
		name: 'Malvid',
		path: 'index.{html,html.json}',
		handler: 'rosid-handler-malvid',
		opts: {
			src: 'src/'
		}
	}
]