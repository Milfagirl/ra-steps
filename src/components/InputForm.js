
import React, { useState } from 'react'
import Collect from './Collect';


function InputForm(props) {

    const [value, setValue] = useState(
        {
            date: '',
            distance: ''
        });
    const [collectValue, setCollectValue] = useState([]);

    const changeCollect = (value1, value2) => {
        value2 = Number(value2);

        setCollectValue(collectValue => {
            const newArray = collectValue;
            collectValue.every(elem => elem.date !== value1) ?
                collectValue = [...collectValue, { date: value1, distance: value2 }] :
                collectValue = [...(newArray.filter(elem => elem.date !== value1)), { date: value1, distance: ((collectValue.find(elem => elem.date === value1)).distance + value2) }];
            collectValue.sort((a, b) => {
                return new Date(`${b.date.substr(3,2)}.${b.date.substr(0,2)}.${b.date.substr(6,4)}`) - new Date(`${a.date.substr(3,2)}.${a.date.substr(0,2)}.${a.date.substr(6,4)}`)
            });

            return collectValue
        });
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        changeCollect(value.date, value.distance);
        setValue(value => ({ date: '', distance: '' }));
    }

    const onChange = (e) => {
        setValue(value => ({ ...value, [e.target.name]: e.target.value }))
    }

    const deleteInCollect = (e) => {
        const date = e.nativeEvent.path[2].childNodes[0].innerText
        const newArray = collectValue.filter((elem) => elem.date !== date);
        setCollectValue(collectValue => newArray);
    }


    return (<React.Fragment>
        <form onSubmit={onSubmitForm}>
            <div id='form-header'>
                <span>Дата (ДД.ММ.ГГГГ.)</span>
                <span>Пройдено км</span>
                <span></span>
            </div>
            <div id='form-input'>
                <input id="date" name="date" value={value.date} onChange={onChange}/>
                <input id="distance" name="distance" value={value.distance} onChange={onChange} />
                <button id='form-button' onClick={onSubmitForm}>OK</button>
            </div>
            <div id='form-footer'>
                <span >Дата (ДД.ММ.ГГГГ.)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
        </form>
        <Collect collectValue={collectValue} deleteInCollect={deleteInCollect} />
    </React.Fragment>

    )

}

export default InputForm;