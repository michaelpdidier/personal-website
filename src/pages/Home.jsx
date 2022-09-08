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
                <h3>Current Projects</h3>
                <p><a href="http://didierchocolate.com">Chocolate Website</a></p>
                <h3>Experiments</h3>
                <p><Link to={"./CodeEditor"}>Code Editor</Link></p>
                <p>Drag & Drop</p>
                <p>Block Library</p>
                <h3>Github</h3>
                <p><a href='https://github.com/michaelpdidier/chocolate-website'>Chocolate Website Repo</a></p>
                <p><a href='https://github.com/michaelpdidier/personal-website'>Personal Website Repo</a></p>
                <h3>Docs</h3>
                <p><Link to={"./Docs"}>Docs</Link></p>

            </div>
        </main>

    );

};

export default Home;