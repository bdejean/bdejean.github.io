var app = new Vue({
  el: '#ccc',
  data: {
	ccc_0_answer: '',
	ccc_1_question: 'a) What the issue resolved with workaround ?',
	ccc_1_answer: '',
	ccc_2_question: 'b) What the issue resolved with workaround ?',
	ccc_2_answer: '',
	ccc_3_question: 'c) What the issue resolved with workaround ?',
	ccc_3_answer: '',
	ccc_4_question: 'd) What the issue resolved with workaround ?',
	ccc_4_answer: '',
	ccc_5_question: 'e) What the issue resolved with workaround ?',
	ccc_5_answer: '',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
	
	resetAnswers: function() {
		this.ccc_0_answer = ''
		this.ccc_1_answer = 'Yes'
		this.ccc_2_answer = ''
		this.ccc_3_answer = ''
		this.ccc_4_answer = ''
		this.ccc_5_answer = 'No'
	}
  },
  
  beforeMount() {
	  this.resetAnswers()
  },
})
