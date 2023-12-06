
import React from 'react';
import Matematicas from '../../../pdf/Recurso de Matematicas.docx.pdf'
import { useState } from 'react';
import {Document, Page} from "react-pdf"

export default function ModalContentInfo({ onClose }) {
    const [numPages, setNumPages] = useState();
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    } return (
    
    <div className="modalpdf">
<div className="pdf-div">
        <Document file={Matematicas} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
            .map((x,i)=> i+1).map((page)=> {
                return (
                    <Page key={page} pageNumber={page} renderTextLayer={false} renderAnnotationLayer= {false} />
                );
            })
            }
        </Document>

    </div>
        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
    </div>
    );
}