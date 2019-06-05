import { ThreeObject, ThreeLoader } from "../shared/ThreeToolbox";

class Model extends ThreeObject {

  listeners = {
    loaded: []
  }

  setup () {
    const { url, material, texture } = this.props;
    this.loader = new ThreeLoader();
    if (material) {
      this.material = material;
    } else {
      this.material = new this.$.MeshNormalMaterial();
    }
    if (texture) {
      this.texture = this.loader.load(texture);
      this.texture.on('loaded', this.onTextureLoad.bind(this))
    }
    this.model = this.loader.load(url);
    this.model.on('loaded', this.onLoad.bind(this));
  }
  
  onTextureLoad (texture) {
    this.material.map = texture;
    console.log(texture)
  }

  onLoad (object) {
    setTimeout(()=>{
      this.object = object;
      this.object.traverse((child) => {
        if (child.isMesh) child.material = this.material;
      });
      this.object.position.set(0, 0, 0);
      this._dispatch('loaded', object);    
    }, 1000)
  }

}

export default Model;