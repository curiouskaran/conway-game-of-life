import React from 'react';
import Box from './Box';
import './index.css';

const Grid = ({
    gridFull,
    rows,
    cols,
    selectBox
}) => {
    const width = cols * 14;
        let rowsArr = []
        let boxClass = ""
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let boxId = `${i}_${j}`;
                boxClass = gridFull[i][j] ? "box on": "box off";
                rowsArr.push(
                    <Box
                        key={boxId}
                        boxClass={boxClass}
                        boxId={boxId}
                        row={i}
                        col={j}
                        selectBox={selectBox}
                    />
                ) 
            }   
        }

        return(
            <div className="grid" style={{width: width}}>
                {rowsArr}
            </div>
        )

}
    

export default Grid;