
module.exports = {
	tasks: {
		all: 'build/**',
	},

	outputs: {
		build: {
			'elitouch.bttpreset': () => ({
				deps: [
					'src/main.js',
					'src/*.js',
					'src/*/*.js',
					'config.user.js',
				],

				run: /* syntax: bash */ `
					node $1 > $@
				`,
			}),
		},
	},
};
