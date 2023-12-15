import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-noconflict/ext-language_tools";
// theme imports
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-gruvbox_light_hard";
import "ace-builds/src-noconflict/theme-gruvbox_dark_hard";

const CodeEditor = () => {
  const [fontSize, setFontSize] = useState(14);
  const [fontFamily, setFontFamily] = useState("monospace");
  const [theme, setTheme] = useState("monokai");

  const handleCodeChange = (newCode) => {};

  return (
    <div>
      <div>
        <p>Font size</p>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
        />

        <p>Font</p>
        <select
          name="font-family"
          id=""
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="monospace">Monospace</option>
        </select>

        <p>Theme</p>
        <select
          name="theme"
          id=""
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="monokai">Monokai</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="tomorrow_night">Tomorrow Night</option>
          <option value="gruvbox">Gruvbox</option>
          <option value="gruvbox_light_hard">Gruvbox Light Hard</option>
          <option value="gruvbox_dark_hard">Gruvbox Dark Hard</option>
        </select>
      </div>

      <AceEditor
        mode="javascript"
        theme={theme}
        name="code-editor"
        editorProps={{
          $blockScrolling: true,
        }}
        onChange={handleCodeChange}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          enableEmmet: true,
          enableMultiselect: true,
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
        }}
      />
    </div>
  );
};

export default CodeEditor;
