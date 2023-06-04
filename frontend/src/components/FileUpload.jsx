import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/storage';

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0,
      picture: null
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/avatar/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({
          uploadValue: progress
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.setState({
            picture: downloadURL
          });
        });
      }
    );
  }

  render() {
    const { uploadValue, picture } = this.state;

    return (
      <div>
        <progress value={uploadValue} max={100}></progress>
        <br />
        <input type="file" onChange={this.handleUpload} />
        <br />
        {picture && <img width="320" src={picture} alt="" />}
      </div>
    );
  }
}

export default FileUpload;
