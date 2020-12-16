module.exports = {
  themeConfig: {
    sidebar: [
      {
        text: 'Bar',
        children: [
          { link: '/bar/foo', text: 'Foo' },
        ]
      },
      {
	text: 'Baz',
	children: [
	  { link: '/baz/foo', text: 'Foo' },
        ]
      }
    ]
  }
} 
