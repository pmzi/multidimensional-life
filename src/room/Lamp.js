import { ThreeObject } from "../shared/ThreeToolbox";

class Lamp extends ThreeObject {

  setup () {
    const $ = this.$;
    const { color, intensity = 1 } = this.props;
    this.object = new $.PointLight(color, 1, 1000)
    this.object.intensity = intensity;
  }

  changes () {
    const { radius, speed } = this.props;
    this.object.position.x = Math.sin(this.scene.time * speed / 100) * radius;
    this.object.position.z = Math.cos(this.scene.time * speed / 100) * radius;
    this.object.position.y = 2 + Math.cos(this.scene.time * speed / 3 / 100);
  }

}

export default Lamp;