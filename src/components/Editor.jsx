import React, { useRef, useEffect } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

// import { EditorView, basicSetup } from 'codemirror';
// import { EditorState } from "@codemirror/state"
// import { keymap} from "@codemirror/view"
// import { defaultKeymap, indentWithTab } from '@codemirror/commands';
// import { javascript } from "@codemirror/lang-javascript";

const Editor = ({editor}) => {

  return <div ref={editor} className="editor-component"></div>;

  // return <div className="editor-component">
  //   {view}
  // </div>;
}

export default Editor;

