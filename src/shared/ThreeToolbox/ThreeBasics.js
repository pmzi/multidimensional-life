class ThreeBasics {

    constructor () {
        // Define THREE as a easy-to-catch variable
        this.$ = window.THREE;

        // Class variables
        this.time = 0;
        this.initialized = false;

        // Creating main scene
        this.scene = new this.$.Scene()

        // Our main camera
        this.camera = new this.$.PerspectiveCamera(45, 1, 0.1, 10000)
        this.scene.add(this.camera);
        
        // objects array
        this.objects = []
    }
    
    init (canvas, force = false) {
        if (!this.initialized || force) {
            // Main renderer
            this.renderer = new this.$.WebGLRenderer({ canvas });

            // Fixing size
            window.addEventListener('resize', this.reFixSize);
            this.reFixSize();

            // Very first setup
            this.setup();

            // Starting render function
            this.render();
            this.initialized = true;

            this.addMover();
        }
    }

    addMover(){
        let isMouseClicked = false;
        let lastMousePosition = null;
        document.addEventListener('keypress', (e)=>{
            if(e.key === 'w'){
                this.camera.position.z -= 10;
            } else if(e.key === 's'){
                this.camera.position.z += 10;
            } else if(e.key === 'a'){
                this.camera.position.x -= 10;
            } else if(e.key === 'd'){
                this.camera.position.x += 10;
            } else if(e.keyCode === 32 && e.shiftKey){
                this.camera.position.y -= 10;
            } else if(e.keyCode === 32){
                this.camera.position.y += 10;
            }
        });
        document.addEventListener('mousedown', ({ clientY, clientX })=>{
            isMouseClicked = true;
            lastMousePosition = {
                clientY,
                clientX,
            };
        });
        document.addEventListener('mouseup', ()=>{
            isMouseClicked = false;
            lastMousePosition = null;
        });
        document.addEventListener('mousemove', ({clientX, clientY})=>{
            if(isMouseClicked){
                this.camera.rotation.x += (lastMousePosition.clientY - clientY) / 10000;
                this.camera.rotation.y += (lastMousePosition.clientX - clientX) / 10000;
            }
        });
    }

    append = (obj) => {
        if (obj.object) this.scene.add(obj.object)
        this.objects.push(obj);
        obj.scene = this;
    }

    _changes = () => {
        this.time++;
        this.changes()
        for (const obj of this.objects) if (obj.changes) obj.changes();
    }

    setup () {}
    changes () {}
    
    render = () => {
        this._changes();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render);
    }

    reFixSize = () => {
        const W = window.innerWidth;
        const H = window.innerHeight;
        const ratio = W / H;
        this.renderer.setSize(W, H);
        this.camera.aspect = ratio;
        this.camera.updateProjectionMatrix()
    }

}

export default ThreeBasics