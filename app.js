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
            /* copy will intend to copy what's selected, but in this case the user has nothing to select;
            The solution will be as following: 
            We will create a textbox and prefill the textbox with the content and force the content to be copied  */
            
            const el = document.createElement('textarea');
            
            // To prevent the browser or user to accidentally update the input before we have the opportunity to _select_ it
            el.setAttribute('readonly', '');
            
            // This will effectively hide the element created
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            
            el.value = `transform: ${this.transformBox.transform}`;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            alert('Value successfully copied to clipboard! ');
            el.remove(); // or document.body.removeChild(el);
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