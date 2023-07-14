import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";

interface CKEditorsProps {
  onReady?: (editor: any) => void;
  onChange?: (event: any, editor: any) => void;
  onBlur?: (event: any, editor: any) => void;
  onFocus?: (event: any, editor: any) => void;
}

const CKEditors: React.FC<CKEditorsProps> = ({ onReady, onChange, onBlur, onFocus }) => {
  return (
    <div>
      <CKEditor editor={ClassicEditor} data="" onReady={onReady} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />
    </div>
  );
};

export default CKEditors;
