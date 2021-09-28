import React, { useRef, useState } from "react";
import Prism from "prismjs";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import ReactMarkdown from "react-markdown";

const Toast = () => {
  const editorRef = useRef();
  const [content, setContent] = useState("");
  const [display, setDisplay] = useState(true);
  const onClick = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    setContent(getContent);
    setDisplay(!display);
  };

  return (
    <div style={{ margin: "2rem" }}>
      {display && (
        <>
          <Editor ref={editorRef} />
          <div>
            <button onClick={onClick}>저장</button>
          </div>
        </>
      )}

      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {content}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Toast;
