import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL, getMetadata, deleteObject } from 'firebase/storage';
import Dedicacion from '../img/Dedicacion.png';
import NavbarSinTexto from "./NavbarSinTexto";
import SideBar from "./SideBar";
import '../css/Cuidado.css';


const HTMLViewer = () => {
  const [fileList, setFileList] = useState([]);

  const storage = getStorage();

  useEffect(() => {
    loadFileList();
  }, []);

  const loadFileList = async () => {
    try {
      const storageRef = ref(storage);
      const listResult = await listAll(storageRef);

      const filePromises = listResult.items.map(async (item) => {
        const url = await getDownloadURL(ref(storage, item.name));
        const metadata = await getMetadata(ref(storage, item.name));
        const uploadTime = new Date(metadata.timeCreated);
        const fileInfo = {
          name: item.name.replace(/_/g, " "),
          url,
          uploadTime,
          uploadDate: uploadTime.toLocaleDateString(),
          uploadTime: uploadTime.toLocaleTimeString(),
        };
        return fileInfo;
      });

      const fileData = await Promise.all(filePromises);

      // Ordenar la lista de archivos por fecha de subida en orden descendente
      const sortedFileData = fileData.sort((a, b) => b.uploadTime - a.uploadTime);

      // Obtener solo los últimos 5 archivos
      const selectedFilesIndices = [6]; // Índices de los archivos que deseas seleccionar
      const selectedFiles = sortedFileData.filter((file, index) => selectedFilesIndices.includes(index));

      setFileList(selectedFiles);
    } catch (error) {
      console.error("Error loading file list:", error);
    }
  };

  const handleViewFile = (url) => {
    window.open(url, "_blank");
  };

  const handleDeleteFile = async (fileName) => {
    try {
      const fileRef = ref(storage, fileName);
      await deleteObject(fileRef);
      console.log(`File "${fileName}" deleted successfully.`);
      loadFileList(); // Actualizar la lista de archivos después de borrar uno
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div>
      <NavbarSinTexto />
      <SideBar />
      <img className='cuidado' src={Dedicacion} alt="Cuidado" border="0" />
      <table className='movitable'>
        <thead>
          <tr>
            <th>Archivos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {fileList.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>
                <button className='ver' onClick={() => handleViewFile(file.url)}>Ver</button>
                <button className='borrar' onClick={() => handleDeleteFile(file.name)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HTMLViewer;
