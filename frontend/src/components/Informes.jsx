import NavbarSinTexto from "./NavbarSinTexto";
import SideBar from "./SideBar";
import React, { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
/* import { Document, Page } from "react-pdf";
 */
const PDFUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrls, setPdfUrls] = useState([]);
  const [pdfList, setPdfList] = useState([]);
  const storage = getStorage();
  useEffect(() => {
    // Load the list of existing PDFs
    loadPDFList();
  }, []);
  const loadPDFList = async () => {
    try {
      // Get references to all objects in storage
      const storageRef = ref(storage);
      const listResult = await listAll(storageRef);
      // Create a list of file names for the PDFs
      const pdfNames = listResult.items.map((item) => item.name);
      setPdfList(pdfNames);
      // Fetch download URLs for each PDF
      const urls = await Promise.all(
        listResult.items.map(async (item) => {
          const url = await getDownloadURL(ref(storage, item.name));
          return { name: item.name, url };
        })
      );
      setPdfUrls(urls);
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
        setPdfList([...pdfList, selectedFile.name]); // Add the PDF name to the list
        setPdfUrls([...pdfUrls, { name: selectedFile.name, url }]); // Add the PDF URL to the URLs list
      } catch (error) {
        console.error("Error uploading PDF:", error);
      }
    }
  };
  const handleDelete = async (fileName) => {
    try {
      const storageRef = ref(storage, fileName);
      await deleteObject(storageRef);
      setPdfList(pdfList.filter((name) => name !== fileName)); // Remove the PDF name from the list
      setPdfUrls(pdfUrls.filter((pdf) => pdf.name !== fileName)); // Remove the PDF URL from the URLs list
    } catch (error) {
      console.error("Error deleting PDF:", error);
    }
  };
  return (
    <div>
      <NavbarSinTexto />
      <SideBar />
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
      {pdfList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pdfList.map((fileName, index) => (
              <tr key={index}>
                <td>{fileName}</td>
                <td>
                  <button onClick={() => handleDelete(fileName)}>Borrar</button>
                  <button
                    onClick={() =>
                      window.open(
                        pdfUrls.find((pdf) => pdf.name === fileName)?.url
                      )
                    }
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default PDFUploader;
