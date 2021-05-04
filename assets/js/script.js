const app = new Vue({
  
  el: '#root',
  data:{
    title: 'VueProgrammer!',
    text_color:''
  },
  methods:{
    changeColor(colore){
      this.text_color = colore;
    }
  }

});