import { storage } from "../../Firebase";

export const fileUpload = (image) => {
  return new Promise((resolve, reject) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
        // setProgress(progress);
      },
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            resolve(url);
          });
      }
    );
  });
};
