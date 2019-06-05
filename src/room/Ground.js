import { ThreeObject } from "../shared/ThreeToolbox";

class Ground extends ThreeObject {

    setup () {
        const $ = this.$;
        const texture = new this.$.TextureLoader().load( 'models/ground.jpg' );
        texture.wrapS	= this.$.RepeatWrapping;
        texture.wrapT	= this.$.RepeatWrapping;
        texture.repeat.set(1000, 1000);

        this.geometry = new $.PlaneGeometry(100000, 100000, 10, 10);
        this.material = new $.MeshStandardMaterial({map:texture, side: this.$.DoubleSide});
        this.object = new $.Mesh(this.geometry, this.material);
    }

    init () {
        this.object.position.set(0, 0, 0);
        this.object.rotateX(-Math.PI/2);
        
    }

    changes () {
        // this.object.rotation.x += 0.1;
    }

}

export default Ground;