import { ThreeObject } from "../shared/ThreeToolbox";

class Box extends ThreeObject {

    setup () {
        const $ = this.$;
        this.geometry = new $.BoxGeometry();
        this.material = new $.MeshStandardMaterial();
        this.object = new $.Mesh(this.geometry, this.material);
    }

    init () {
        this.object.position.set(0, 0, 0);
    }

    changes () {
        // this.object.rotation.x += 0.1;
    }

}

export default Box;