import Prism from "prismjs"
import "@toast-ui/editor/dist/toastui-editor.css"
import { Viewer } from "@toast-ui/react-editor"
import "prismjs/themes/prism.css"
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js"
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"

interface ViewerProps {
  content: string
}

const MdViewer: React.FC<ViewerProps> = ({ content }) => {
  return (
    <div>
      {content && (
        <Viewer
          initialValue={content || " "}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
      )}
    </div>
  )
}

export default MdViewer