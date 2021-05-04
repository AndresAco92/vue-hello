const app = new Vue({
  
  el: '#root',
  data:{
    title: 'VueProgrammer!',
    text_color: '',
    text_simple: '',
    picture : ''
  },  
  methods:{
    changeColor(val){
      this.text_color = val;
    },
    color_new(){
      this.text_color = this.text_simple;
    },
    // text_other_color(){
    //   this.text_color = this.color_simple;
    // }
  }

});