import React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Editor.module.css";

const Editor = dynamic(
  async () => {
    const ace = await require("react-ace");
    require("ace-builds/src-noconflict/mode-javascript");
    require("ace-builds/src-noconflict/mode-html");
    require("ace-builds/src-noconflict/mode-css");
    require("ace-builds/src-noconflict/theme-github");
    return ace;
  },
  {
    loading: () => <p>Loading</p>,
    ssr: false,
  }
);
export const JavascriptEditor = (props) => {
  return <Editor mode="javascript" title={"JS"} {...props} />;
};

export const HtmlEditor = (props) => {
  return <Editor mode="html" title={"HTML"} {...props} />;
};

export const CssEditor = (props) => {
  return <Editor mode="css" title={"CSS"} {...props} />;
};

export default function CodeEditor({ mode, onChange, value, title, height }) {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>
        {title}
        <Editor
          mode={mode}
          theme="monokai"
          name={title}
          onChange={onChange}
          fontSize={18}
          width={"100%"}
          value={value}
          showPrintMargin={true}
          showGutter={true}
          tabSize={2}
          height={height}
          setOptions={{ useWorker: false }}
        />
      </div>
    </div>
  );
}
