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
	el: "#food1",
	data: {
		isEdit: false,
		message: 'Click title to edit name',
		name: 'Food 1',
		price: null,
		discount: null,
		amount: null,
		warning: 'Discount must < Price'
	},
	computed: {
		total: function() {
			return (this.price - this.discount) * this.amount
		},
		checkDiscount: function() {
			return this.discount > this.price
		}
	},
	methods: {
		editName: function() {
			this.isEdit = true
			this.message = "Enter to save name."
		},
		saveName: function() {
			this.isEdit = false
			this.message = "Click title to edit name."
		},
		isNumber: function(e) {
			var charCode = e.keyCode
			if ( charCode > 31 && (charCode < 48 || charCode > 57)) {
				e.preventDefault()
			}
		}
	}
})