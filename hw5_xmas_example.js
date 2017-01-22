var data = [
    {"Id":"1", "Name":"abc", "parent":""},  
    {"Id":"2", "Name":"abc", "parent":"1"},
    {"Id":"3", "Name":"abc", "parent":"2"},
    {"Id":"4", "Name":"abc", "parent":"2"}
];

var processData = {
	root: {
		id: '1',
		name: 'abc',
		parent: '',
		children: [
			{
				id: '2',
				name: 'abc',
				parent: '1',
				children: [
					{
						id: '3',
						name: 'abc',
						parent: '2',
						children: []
					},
					{
						id: '4',
						name: 'abc',
						parent: '2',
						children: []
					}
				]
			}
		]
	}
}