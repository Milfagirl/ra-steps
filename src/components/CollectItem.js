import React from 'react' 
import { nanoid } from 'nanoid'
function CollectItem(props) {
    
    const {value, deleteInCollect} = props;
    
    return (
        <div className ="collect-item" id = {nanoid().substr(0, 4)}>
            <span type = 'date'>{value.date}</span>
            <span>{value.distance}</span>
            <span>
            <button>&#9998;</button>
            <button onClick = {(e) => deleteInCollect(e)}>&#10008;</button>
            </span>
        </div>
    )
}

export default CollectItem;