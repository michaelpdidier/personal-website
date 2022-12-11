import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main id="home-parent">
      <div id="home-child">
        <h1>Hello.</h1>
        <h2>Welcome to michaelpdidier.com</h2>
        <p>This is a landing place for things I'm working on. </p>
        <hr></hr>

        <h3>Current Projects</h3>
        <p>
          <a href="http://didierchocolate.com">Chocolate Website</a>
        </p>
        <p>
          <a href="https://editor.michaelpdidier.com">Bidirectional Editor</a>
        </p>

        <h3>Experiments</h3>
        <p>
          <Link to={"./DragAndDrop"}>Drag & Drop</Link>
        </p>
        {/* <p>Block Library</p> */}

        <h3>External Resources</h3>
        <p>{/* <Link to={"./Docs"}>Docs</Link> */}</p>
        <p>
          <a href="https://github.com/michaelpdidier?tab=repositories">
            github
          </a>
        </p>
      </div>
    </main>
  );
};

export default Home;
