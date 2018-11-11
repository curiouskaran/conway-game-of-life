import React from 'react';

const Box = ({
    boxClass,
    boxId,
    row,
    col,
    selectBox
}) => (
    <div
        className={boxClass}
        id={boxId}
        onClick={() => selectBox(row,col)}
    />
)

export default Box;