import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getFirestore } from "../Firebase";
import SideBar from "./SideBar";
import "../css/Informes.css";
import NavbarSinTexto from "./NavbarSinTexto";
import { db } from "../Firebase"; // Importa el objeto db correctamente
import "../css/Messages.css";

const MessageForm = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = collection(db, "FormulariosContacto");
    const loadMessages = async () => {
      try {
        const querySnapshot = await getDocs(messagesRef);
        const messagesData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            /*   nombre: data.nombre, */
            email: data.email,
            mensaje: data.mensaje,
            demanda: data.demanda,
            departamento: data.departamento,
            tema: data.tema,
          };
        });

        setMessages(messagesData);
      } catch (error) {
        console.error("Error loading messages:", error);
      }
    };
    loadMessages();
  }, []);

  const handleDelete = async (messageId) => {
    try {
      const messageRef = doc(db, "FormulariosContacto", messageId);
      // Crea una referencia al documento específico
      await deleteDoc(messageRef); // Elimina el documento utilizando la referencia
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== messageId)
      );
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const getDemandColorClass = (demanda) => {
    switch (demanda) {
      case "consulta":
        return "consulta-color";
      case "queja":
        return "queja-color";
      case "sugerencia":
        return "sugerencia-color";
      case "comunicación":
        return "comunicacion-color";
      default:
        return "";
    }
  };

  const renderMessageList = () => {
    if (messages.length === 0) return null;
    console.log("Renderizando lista de mensajes", messages);

    return (
      <table className="messageformpdf-table">
        <thead>
          <tr>
            {/*  <th>Nombre</th> */}
            <th>Email</th>
            <th>Mensaje</th>
            <th>Demanda</th>
            <th>Departamento</th>
            <th>Tema</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr
              key={message.id}
              className={getDemandColorClass(message.demanda)}
            >
              {/* <td>{message.nombre}</td> */}
              <td>
                <strong>{message.email}</strong>
              </td>
              <td>{message.mensaje}</td>
              <td>
                <strong>{message.demanda}</strong>
              </td>
              <td>{message.departamento}</td>
              <td>{message.tema}</td>
              <td className="messageformpdf-actions">
                <button
                  className="messageformdelete-button"
                  onClick={() => handleDelete(message.id)}
                >
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
    <div>
      <NavbarSinTexto />
      <SideBar />
      <div className="messageformcontainer">{renderMessageList()}</div>
    </div>
  );
};

export default MessageForm;
