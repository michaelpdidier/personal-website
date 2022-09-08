import React from 'react';
import { Link } from 'react-router-dom'
import CodeEditor from './CodeEditor';

const Home = () => {

    return (
        <main id='home-parent'>
            <div id='home-child'>
                <h1>Hello.</h1>
                <h2>Welcome to michaelpdidier.com</h2>
                <p>This is a landing place for things I'm working on. </p>
                <hr></hr>
                <h3>Projects Under Construction</h3>
                <p><a href="http://didierchocolate.com">Chocolate Website</a></p>
                <h3>Experimental</h3>
                <Link to={"./CodeEditor"}>Code Editor</Link>
                <p><a href="/#">Drag & Drop</a></p>
                <p><a href="/#">Block Library</a></p>
            </div>
        </main>

    );

};

export default Home;