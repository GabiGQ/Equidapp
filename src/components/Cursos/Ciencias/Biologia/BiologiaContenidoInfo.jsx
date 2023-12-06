import React from 'react';
import Biologia from '../../../../pdf/Recurso de Biología.docx.pdf'
import { useState } from 'react';
import {Document, Page} from "react-pdf"
import "../../../../Styles/ciencias.css";


export default function ModalContentInfo({ onClose }) {
const [numPages, setNumPages] = useState();
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    } return (
    <div className="modalpdf">
    <div className="pdf-div">
        <Document file={Biologia} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => {
            return (
            <Page
                key={page}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={800} 
                customTextRenderer={(textItem) => (
                <div style={{ fontSize: '30px', lineHeight: '1.5' }}>{textItem.str}</div>
                )}
            />
            );
        })}
        </Document>
    </div>
    <button onClick={onClose} type="button" className="btn-close" aria-label="Close"></button>
    </div>
);
}
