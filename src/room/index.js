import { ThreeBasics } from "../shared/ThreeToolbox";
import Box from "./Box";
import Lamp from './Lamp'
import Model from './Model';
import Ground from "./Ground";
import SkyBox from './SkyBox'

class RoomTHREE extends ThreeBasics {

    loaded = false;

    setup () {
        this.statue = new Model({ url: '/models/Old House 2 3D Models 2.obj', texture: '/models/House body .jpg', material: new this.$.MeshStandardMaterial()});
        this.box = new Box();
        this.ground = new Ground();
        this.skyBox = new SkyBox();
        // this.light = new Lamp({ color: 0xffffff, radius: -1300, speed: 400 });
        // this.light2 = new Lamp({ color: 0x0000ff, radius: 1300, speed: -400, intensity: 1 });
        const light = new this.$.AmbientLight( 0xffffff ); // soft white light
        this.scene.add( light );
        // this.append(this.light)
        // this.append(this.light2)
        // this.append(this.box);
        this.append(this.ground);
        this.append(this.skyBox);
        this.statue.on('loaded', () => {
            this.append(this.statue)
            this.loaded = true;
        })
        this.scene.fog = new this.$.Fog(0x808480, 1, 400);
        this.camera.position.z = 1000;
        this.camera.position.y = 50;
        
    }

    groundBuilder(){

    }

    changes () {
        // this.camera.rotation.x += 0.01;
        // this.camera.position.z += 0.1;
    }

}

export default RoomTHREE;