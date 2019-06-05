import { ThreeObject } from "../shared/ThreeToolbox";

class Sphere extends ThreeObject {

  setup () {
    const $ = this.$;
    this.geometry = new $.SphereGeometry(2, 32, 32);
    this.material = new $.MeshPhongMaterial({ color: 0xffffff });
    this.object = new $.Mesh(this.geometry, this.material);
  }

  init () {
    this.object.position.z = -5;
  }

}

export default Sphere;