const vm = Vue.createApp({
    data() {
        return {
            perspective: 200,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    }, 
    methods: {
        resetBox() {
            this.perspective = 200;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copyVal() {
            let transformVal = `transform: 
                                perspective: ${this.perspective}
                                rotateX: ${this.rotateX}
                                rotateY: ${this.rotateY}
                                rotateZ: ${this.rotateZ}`
            
            document.execCommand("copy");
        }
    },
    computed: {
        transformBox() {
            return { transform: `perspective(${this.perspective}px) 
            rotateX(${this.rotateX}deg) 
            rotateY(${this.rotateY}deg) 
            rotateZ(${this.rotateZ}deg)` }
        },
    }

}).mount('#app');