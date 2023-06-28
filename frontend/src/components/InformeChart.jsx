import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL, getMetadata, deleteObject } from 'firebase/storage';


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

      setFileList(sortedFileData);
    } catch (error) {
      console.error("Error loading file list:", error);
    }
  };


  return (
      <a href="/home/AUMENTO DE LA POBLACION ENVEJECIDA.pdf" download="AUMENTO DE LA POBLACION ENVEJECIDA.pdf.pdf">Descargar</a>
  );
};

export default HTMLViewer;
