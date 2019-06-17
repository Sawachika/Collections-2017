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
Vue.component('collapse', {
	props: ['article'],
	template: '#collapse',
	data: function() {
		return {
			collapse: true
		}
	},
	methods: {
		toggleCollapse: function() {
			this.collapse = !this.collapse
		}
	}
})
Vue.component('add-article', {
	template: '#add-article',
	data: function() {
		return {
			title: '',
			content: ''
		}
	},
	methods: {
		add: function() {
			this.$emit('add-article', this.title, this.content)
			this.title = '';
			this.content = '';
		}
	}
})

// Main
var food = new Vue({
	el: "#main",
	data: {
		articles: [
		{
			title: 'Vue',
			content: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.'
		},{
			title: 'Vue 2',
			content: 'On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.'
		}]
	},
	computed: {

	},
	methods: {
		addArticle: function(title, content) {
			this.articles.push({
				title: title,
				content: content
			})
		}
	}
})