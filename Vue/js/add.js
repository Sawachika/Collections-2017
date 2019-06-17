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

var food = new Vue({
	el: "#main",
	data: {
		// Product List
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
		],
		// Add Product
		name: '',
		img: '',
		content: '',
		price: ''
	},
	computed: {

	},
	methods: {
		addProduct: function() {
			this.items.push({
				name: this.name,
				img: this.img,
				content: this.content,
				price: this.price
			})
		},
		deleteProduct: function(index) {
			if ( confirm("Delete this product ?") ) {
				this.items.splice(index, 1)
			}
		}
	}
})