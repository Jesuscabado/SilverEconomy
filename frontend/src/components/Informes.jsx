import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll, getMetadata } from "firebase/storage";
import SideBar from "./SideBar";
import "../css/Informes.css";
import NavbarSinTexto from "./NavbarSinTexto";

const PDFUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrls, setPdfUrls] = useState([]);
  const [pdfList, setPdfList] = useState([]);
  const storage = getStorage();

  useEffect(() => {
    loadPDFList();
  }, []);

  const loadPDFList = async () => {
    try {
      const storageRef = ref(storage);
      const listResult = await listAll(storageRef);

      const pdfInfoPromises = listResult.items.map(async (item) => {
        const url = await getDownloadURL(ref(storage, item.name));
        const metadata = await getMetadata(ref(storage, item.name));
        const uploadTime = new Date(metadata.timeCreated);
        const pdfInfo = {
          name: item.name.replace(/_/g, " "),
          url,
          uploadTime,
          uploadDate: uploadTime.toLocaleDateString(),
          uploadTime: uploadTime.toLocaleTimeString(),
        };
        return pdfInfo;
      });

      const pdfInfo = await Promise.all(pdfInfoPromises);
      setPdfList(pdfInfo.map((pdf) => pdf.name));
      setPdfUrls(pdfInfo);
    } catch (error) {
      console.error("Error loading PDF list:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const storageRef = ref(storage, selectedFile.name);
        await uploadBytes(storageRef, selectedFile);
        const url = await getDownloadURL(storageRef);
        const uploadTime = new Date();
        const pdfInfo = {
          name: selectedFile.name.replace(/_/g, " "),
          url,
          uploadTime,
          uploadDate: uploadTime.toLocaleDateString(),
          uploadTime: uploadTime.toLocaleTimeString(),
        };
        setPdfList((prevPdfList) => [...prevPdfList, pdfInfo.name]);
        setPdfUrls((prevPdfUrls) => [...prevPdfUrls, pdfInfo]);
      } catch (error) {
        console.error("Error uploading PDF:", error);
      }
    }
  };

  const handleDelete = async (fileName) => {
    try {
      const storageRef = ref(storage, fileName.replace(/ /g, "_"));
      await deleteObject(storageRef);

      setPdfList((prevPdfList) => prevPdfList.filter((name) => name !== fileName));
      setPdfUrls((prevPdfUrls) => prevPdfUrls.filter((pdf) => pdf.name !== fileName));
    } catch (error) {
      console.error("Error deleting PDF:", error);
    }
  };

  const renderPDFList = () => {
    if (pdfList.length === 0) return null;

    return (
      <table className="pdf-table">
        <thead>
          <tr>
            <th>Nombre del archivo</th>
            <th>Fecha subida</th>
            <th>Hora subida</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pdfUrls.map((pdf, index) => (
            <tr key={index}>
              <td>{pdf.name}</td>
              <td>{pdf.uploadDate}</td>
              <td>{pdf.uploadTime}</td>
              <td className="pdf-actions">
                <button className="view-button" onClick={() => window.open(pdf.url)}>
                  Ver
                </button>
                <button className="delete-button" onClick={() => handleDelete(pdf.name)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container-informes">
      <NavbarSinTexto />
    <SideBar />
    <div className="upload-section">
      <input type="file" className="file-input" onChange={handleFileChange} />
      {selectedFile && (
        <button className="upload-button" onClick={handleUpload}>
          Subir archivo
        </button>
      )}
    </div>
    {renderPDFList()}
  </div>
);
};

export default PDFUploader;