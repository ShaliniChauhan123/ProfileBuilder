import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import "./App.css";
import "grapesjs/dist/css/grapes.min.css";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import "firebase/auth";
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "./fire";

const Template = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      storageManager: {
        type: "firestore",
      },
      plugins: [
        gjsPresetWebpage,
        "grapesjs-firebase-storage",
        "grapesjs-template-manager",
      ],
      pluginsOpts: {
        gjsPresetWebpage: {},
        "grapesjs-firebase-storage": {
          firebaseConfig: {
            apiKey: "AIzaSyDJraAatmuzz_hggdnvzuk8ptq3rYfIW34",
            authDomain: "profilebuilder-973c6.firebaseapp.com",
            projectId: "profilebuilder-973c6",
            storageBucket: "profilebuilder-973c6.appspot.com",
            messagingSenderId: "58607604211",
            appId: "1:58607604211:web:79e0787226cb497661c286",
            measurementId: "G-KSNZDQ4PLY",
          },
        },
      },
    });

    setEditor(editor);
  }, []);

  const handleSave = () => {
    const projectData = editor.getProjectData();
    console.log("PROJECTDATA", projectData);

    // const db = getFirestore();
    // console.log("qwerty", db);
    // const dbRef = collection(db, "docs");

    // addDoc(dbRef, projectData)
    //   .then((docRef) => {
    //     console.log("Document has been added successfully");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    editor.loadProjectData(projectData);
  };

  return (
    <div className="App">
      <button onClick={handleSave}>Save</button>
      <div id="editor"></div>
    </div>
  );
};
export default Template;
