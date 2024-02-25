import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import CVTemplete from '../resumeForms/CVTemplete'
import CreatingResume from '../createAPP/CreatingResume';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './draft.css';

 
export default function DraftJsEditor() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    
      return (
        <div className="mainDraft">
       
       
          <Editor
            editorState={editorState}
            
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
         
        </div>
      )
}
