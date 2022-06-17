import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import It from './pages/it';

const Courses = (props) => {
    const { name } = useParams();
    console.log(name, props);

    return (
        <div>
            <h1>this is {name}</h1>
        </div>
    )
}

export default Courses;