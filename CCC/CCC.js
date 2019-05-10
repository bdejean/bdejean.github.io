var app = new Vue({
  el: '#ccc',
  data: {
	ccc_0_question: 'Resolution :',
	ccc_0_answer: '',
	ccc_1_question: 'a) Resolved with workaround ?',
	ccc_1_answer: '',
	ccc_2_question: 'b) What was the issue, the solution of the incident and which actions were taken ?',
	ccc_2_answer: '',
	ccc_3_question: 'c) Root Cause(Additional to work info summary) :',
	ccc_3_answer: '',
	ccc_4_question: 'd) If it’s a SD ticket, ABC resolver must confirm (If needed) with the user that the incident has been resolved or else if analyst is sure about the resolution he/she can resolve the incident :',
	ccc_4_answer: '',
	ccc_5_question: 'e) Any related ticket numbers (other incidents and/or changes) ?',
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
		this.ccc_4_answer = 'With confirmation from user'
		this.ccc_5_answer = 'No'
	}
  },
  
  beforeMount() {
	  this.resetAnswers()
  },
})
