import React, { Component } from 'react';
import { Table, Button, Row, Col, InputGroup, Input, Fade } from 'reactstrap';
import { firestore } from "../Firebase";

export default class Profile extends Component {
  state = {
    items: [],
    inputValue: '',
    edit: false,
    id: '',
    fadeIn: false,
    message: ''
  };

  componentDidMount() {
    const userDocRef = firestore.doc('usuarios/8Ljc6WqA0Ja4fEqDZyBuCdk3Mj53');

    userDocRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          inputValue: doc.data().email,
          items: [{ id: doc.id, email: doc.data().email, rol: doc.data().rol }]
        });
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }

  changeValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  action = () => {
    const { inputValue, edit } = this.state;
    const userDocRef = firestore.doc(`usuarios/${id}`);

    if (!edit) {
      userDocRef.set({ email: inputValue }, { merge: true })
        .then(() => {
          this.message('Agregado correctamente');
        })
        .catch((error) => {
          this.message('Error al agregar');
        });
    } else {
      this.update();
    }
  };

  getTodo = (id) => {
    const userDocRef = firestore.doc(`usuarios/${id}`);

    userDocRef.get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            inputValue: doc.data().email,
            edit: true,
            id: doc.id
          });
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };

  update = () => {
    const { inputValue, id } = this.state;
    const userDocRef = firestore.doc(`usuarios/${id}`);

    userDocRef.update({
        email: inputValue
      })
      .then(() => {
        this.message('Actualizado correctamente');
        this.setState({
          edit: false
        });
      })
      .catch((error) => {
        this.message('Error al actualizar');
      });
  };

  deleteItem = (id) => {
    const userDocRef = firestore.doc(`usuarios/${id}`);

    userDocRef
      .delete()
      .then(() => {
        this.message('Eliminado correctamente');
      })
      .catch((error) => {
        this.message('Error al eliminar');
      });
  };

  message = (message) => {
    this.setState({
      inputValue: '',
      fadeIn: true,
      message: message
    });
    setTimeout(() => {
      this.setState({
        fadeIn: false,
        message: ''
      });
    }, 3000);
  };

  render() {
    const { items, inputValue } = this.state;

    return (
      <div>
        <Row>
          <Col xs="10">
            <InputGroup>
              <Input
                placeholder="Email"
                value={inputValue}
                onChange={this.changeValue}
              />
            </InputGroup>
          </Col>
          <Col xs="2">
            <div className="text-right">
              <Button color="info" onClick={this.action}>
                {this.state.edit ? 'Editar' : 'Agregar'}
              </Button>
            </div>
          </Col>
        </Row>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          {this.state.message}
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
            {items && items.length > 0
              ? items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.email}</td>
                    <td>{item.rol}</td>
                    <td>
                      <Button color="warning" onClick={() => this.getTodo(item.id)}>Editar</Button>
                    </td>
                    <td>
                      <Button color="danger" onClick={() => this.deleteItem(item.id)}>Eliminar</Button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
