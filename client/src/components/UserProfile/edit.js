import { useState, useEffect } from 'react';
import Group from './Group';


const EditableProfile =({
    info,
    editComplete
}) =>{

    console.log("Edit User Profile");

    const [name, setName] = useState(info.name);
    const [style,setStyle] = useState(info.style);
    function handleCancelClicked() {
        editComplete(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editComplete({name,style});
    }



    return( 
        <>
            <Group>            
                <h2>new name:
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                /></h2>       
            </Group>


            <Group>            
                <h2>new style:
                <input
                    type='text'
                    value={style}
                    onChange={e => setName(e.target.value)}
                /> 
                </h2>  
            </Group>
            <Group>
                <button onClick={handleSaveClicked}>Save</button>
                <button onClick={handleCancelClicked}>Cancel</button>
            </Group>
        </>
    );
}

export default EditableProfile;