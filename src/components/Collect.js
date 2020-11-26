import React from 'react'
import CollectItem from './CollectItem';


function Collect(props) {
    const { collectValue, deleteInCollect } = props;
    return (
        <div id='collect'>
            { collectValue ? collectValue.map((arr) => <CollectItem deleteInCollect={deleteInCollect} value={arr} />) : ''}
        </div>
    )

}

export default Collect;