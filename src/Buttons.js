import React from 'react';

import './index.css';
import {ButtonToolbar, MenuItem, DropdownButton} from 'react-bootstrap';

const Buttons = ({
    playGameOfLife,
    pauseGameOfLife,
    slowGameOfLife,
    fastGameOfLife,
    clearGameOfLife,
    seedGameOfLife,
    gridSize,
}) => {
    return(
        <div className="center">
            <ButtonToolbar>
                <button className="btn btn-default" onClick={playGameOfLife}>Play</button>
                <button className="btn btn-default" onClick={pauseGameOfLife}>Pause</button>
                <button className="btn btn-default" onClick={slowGameOfLife}>Slow</button>
                <button className="btn btn-default" onClick={fastGameOfLife}>Fast</button>
                <button className="btn btn-default" onClick={clearGameOfLife}>Clear</button>
                <button className="btn btn-default" onClick={seedGameOfLife}>Seed</button>
                <DropdownButton 
                    title="Grid Size"
                    id="size-menu"
                    onSelect={gridSize}
                >
                <MenuItem eventKey="1">20x10</MenuItem>
                <MenuItem eventKey="2">50x30</MenuItem>
                <MenuItem eventKey="3">70x50</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        </div>
    )
}
    

export default Buttons;