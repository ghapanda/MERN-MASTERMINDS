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
            <div className="vh-100" style={{ backgroundColor: '#4169E1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '500px', width: '100%', margin: 'auto', borderRadius: '15px', backgroundColor: '#fff', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <div style={{ flexShrink: 0 }}>
                    <img
                    style={{ width: '90px', borderRadius: '90px' }}
                    src={info.image}
                    alt={`${info.name} profile`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://img.icons8.com/ios-glyphs/90/user--v1.png" 
                      }}
                    />
                    <div>
                        <p>upload profile image here</p>
                        
                    </div>
                </div>
                <div style={{ flexGrow: 1, marginLeft: '20px' }}>
                    <h2>new name:
                    <input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    /></h2>  
                    <h2>new style:
                    <input
                        type='text'
                        value={style}
                        onChange={e => setName(e.target.value)}
                    /> 
                    </h2> 
                    {/*
                    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#efefef', padding: '10px', borderRadius: '10px' }}>
                    <div>
                        <p className="small text-muted mb-1"># of attend</p>
                        <p>{info.count}</p>
                    </div>
                    <div>
                        <p className="small text-muted mb-1">I am going to </p>
                        <p>{info.going}</p>
                    </div>
                    <div>
                        <p className="small text-muted mb-1">instagram</p>
                        <a>{info.instaUrl}</a>
                    </div>
                    </div>*/}
                </div>
                </div>
            </div>
            </div>
            <div class="body">
                <h1 style={{ textAlign:"center"}}>{info.name} has not attended any events yet.</h1>
            </div>
            <Group>
                <button onClick={handleSaveClicked}>Save</button>
                <button onClick={handleCancelClicked}>Cancel</button>
            </Group>
        </>
    );
}

export default EditableProfile;