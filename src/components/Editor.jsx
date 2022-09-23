import React, { useRef, useEffect } from "react";

import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from "@codemirror/state"
import { keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const Editor = () => {
  const editor = useRef();

  useEffect(() => {
      const startState = EditorState.create({
        doc: 'Hello World',
        extensions: [
          basicSetup, 
          keymap.of([defaultKeymap, indentWithTab]), 
        ],
      });

      const view = new EditorView({ state: startState, parent: editor.current });

      return () => {
        view.destroy();
      };

  }, []);

  return <div ref={editor}></div>;
}

export default Editor;
