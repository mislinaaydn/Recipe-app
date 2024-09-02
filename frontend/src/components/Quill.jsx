import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./QuillEditor.module.css";

function QuillEditor({ value, setValue, placeholder }) {
  const handleChange = (content) => {
    setValue(content);
  };

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.quill}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            ["clean"],
          ],
        }}
      />
    </div>
  );
}

export default QuillEditor;
