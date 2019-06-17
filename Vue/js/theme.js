var nav = new Vue({
	el: "#nav",
	data: {
		show: false,
	},
	methods: {
		menuToggle: function() {
			this.show = !this.show
		}
	}
})

// Template
var data = function() {
	return {
		items: [
			{
				name: 'Food 1',
				img: 'img/food.jpg',
				content: 'Content 1',
				price: '150'
			},{
				name: 'Food 2',
				img: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
				content: 'Content 2',
				price: '200'
			}
		]
	}
}
var theme1 = {
	template: '#theme1',
	data: data
}
var theme2 = {
	// props: ['view'],
	template: '#theme2',
	data: data
}
var theme3 = {
	template: '#theme3',
	data: data
}

// Main
var food = new Vue({
	el: "#main",
	data: {
		view: 'theme1'
	},
	components: {
		theme1: theme1,
		theme2: theme2,
		theme3: theme3
	}
})