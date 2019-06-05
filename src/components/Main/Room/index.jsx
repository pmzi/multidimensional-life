import React from 'react';
import RoomTHREE from '../../../room'

import './style.scss';

class Room extends React.Component {

    constructor (props) {
        super(props);
        this.canvas = React.createRef();
        this.room = new RoomTHREE();
    }

    componentDidMount () {
        this.room.init(this.canvas.current)
    }

    render () {
        return (
            <div className="room">
                <canvas ref={this.canvas} className="room__canvas" />  
            </div>
        );
    }

}

export default Room;