import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col, InputGroup, Input, Fade } from "reactstrap";
import { firestore } from "../Firebase";

const Profile = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  const [message, setMessage] = useState("");

  const displayMessage = (message) => {
    setInputValue("");
    setFadeIn(true);
    setMessage(message);
    setTimeout(() => {
      setFadeIn(false);
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    const userDocRef = firestore.doc("usuarios/8Ljc6WqA0Ja4fEqDZyBuCdk3Mj53");

    userDocRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setInputValue(doc.data().email);
          setItems([
            { id: doc.id, email: doc.data().email, rol: doc.data().rol },
          ]);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  const action = () => {
    const userDocRef = firestore.doc(`usuarios/${id}`);

    if (!edit) {
      userDocRef
        .set({ email: inputValue }, { merge: true })
        .then(() => {
          displayMessage("Agregado correctamente");
        })
        .catch((error) => {
          displayMessage("Error al agregar");
        });
    } else {
      update();
    }
  };

  const getTodo = (id) => {
    const userDocRef = firestore.doc(`usuarios/${id}`);

    userDocRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setInputValue(doc.data().email);
          setEdit(true);
          setId(doc.id);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const update = () => {
    const userDocRef = firestore.doc(`usuarios/${id}`);

    userDocRef
      .update({
        email: inputValue,
      })
      .then(() => {
        displayMessage("Actualizado correctamente");
        setEdit(false);
      })
      .catch((error) => {
        displayMessage("Error al actualizar");
      });
  };

  const deleteItem = (id) => {
    const userDocRef = firestore.doc(`usuarios/${id}`);

    userDocRef
      .delete()
      .then(() => {
        displayMessage("Eliminado correctamente");
      })
      .catch((error) => {
        displayMessage("Error al eliminar");
      });
  };

  return (
    <div>
      <Row>
        <Col xs='10'>
          <InputGroup>
            <Input
              placeholder='Email'
              value={inputValue}
              onChange={changeValue}
            />
          </InputGroup>
        </Col>
        <Col xs='2'>
          <div className='text-right'>
            <Button color='info' onClick={action}>
              {edit ? "Editar" : "Agregar"}
            </Button>
          </div>
        </Col>
      </Row>
      <Fade in={fadeIn} tag='h5' className='mt-3'>
        {message}
      </Fade>
      <br />

      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Rol</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.email}</td>
                <td>{item.rol}</td>
                <td>
                  <Button color='warning' onClick={() => getTodo(item.id)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Button color='danger' onClick={() => deleteItem(item.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='4'>No hay datos</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
