import { ThreeObject } from "../shared/ThreeToolbox";

class SkyBox extends ThreeObject {

    setup () {
        const $ = this.$;
        const texture = new this.$.TextureLoader().load( 'models/clouds.png' );        
        this.geometry = new $.SphereGeometry(9000, 256, 256);
        this.material = new $.MeshPhongMaterial({map:texture, side: this.$.Doubleside});
        this.object = new $.Mesh(this.geometry, this.material);
        this.object.material.side = this.$.BackSide;
    }

    init () {
        this.object.position.set(0, 0, 0);
    }

    changes () {
        // this.object.rotation.x += 0.1;
    }

}

export default SkyBox;