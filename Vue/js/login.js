const email = "test@test.com",
	pw = "1234"
var timer

var vm = new Vue({
	el: "#login",
	data: {
		email: "", /* Input value */
		pw: "", /* Input value */
		auth_attempt: "",
		message: "", /* Message after form submit */
		disabled: false, /* Disable form input and submit */
		count: 3
	},
	computed: {

	},
	methods: {
		authenticate: function() {
			if (this.email === email && this.pw === pw) {
				this.auth_attempt = true
				this.message = "Login success"
				this.disabled = true

				timer = setInterval(this.countdown, 1000)
			}
			else {
				this.auth_attempt = false
				this.message = "Wrong Email or Password"
			}
		},
		countdown: function() {
			if ( this.count > 1 ) {
				this.count--
			}
			else {
				clearInterval(timer)
				location.href = "index.html"
			}
		}
	}
})