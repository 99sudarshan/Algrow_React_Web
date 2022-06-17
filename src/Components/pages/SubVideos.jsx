import React from 'react';
import { useParams } from 'react-router-dom';

const SubVideos = (props) => {
    const { id, name } = useParams();
    console.log(id, name, props);
    return (
        <div>
            <h1>This is SubVideo {name}</h1>
            
        </div>
    )
}

export default SubVideos