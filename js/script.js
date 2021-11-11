const app = new Vue({

    el: '#app',
    data:{
        images: ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'],
        counter: 0
    },

    methods:{
        nextSlide(){
            if(this.counter > this.images.length - 1){
                this.counter = 0;
            } else {
                this.counter++;
            }
            console.log(this.counter);
        },
    
        prevSlide(){
            if(this.counter <= 0){
                this.counter = this.images.length - 1;
            } else {
                this.counter--;
            }
            console.log(this.counter);
        }
    }
})