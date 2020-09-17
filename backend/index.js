const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyABb2oXQsX19MvwZn7yZ7ldGz-NSvrLIoU",
  authDomain: "e-commerce-f6264.firebaseapp.com",
  databaseURL: "https://e-commerce-f6264.firebaseio.com",
  projectId: "e-commerce-f6264",
  storageBucket: "e-commerce-f6264.appspot.com",
  messagingSenderId: "1050794207361",
  appId: "1:1050794207361:web:2f218fde219a6b163cc580",
};

firebase.initializeApp(firebaseConfig);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("E-Commerce Sites Backend is Running!");
});

app.get("/api/products", (req, res) => {
  firebase
    .firestore()
    .collection("products")
    .get()
    .then((data) => {
      let li = [];
      data.forEach((doc) => {
        const {
          name,
          description,
          price,
          stock,
          imageURL,
          category,
        } = doc.data();
        li.push({
          id: doc.id,
          name,
          description,
          price,
          stock,
          imageURL,
          category,
        });
      });
      res.json(li);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

app.get("/api/categories", (req, res) => {
  firebase
    .firestore()
    .collection("Categories")
    .get()
    .then((data) => {
      let li = [];
      data.forEach((doc) => {
        const { name } = doc.data();
        li.push({ id: doc.id, name });
      });
      res.json(li);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

app.get("/api/product/:id", (req, res) => {
  firebase
    .firestore()
    .collection("products")
    .doc(req.params.id)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        res.json({ error: "This Products doesn't exists" });
      } else {
        let li = [];
        const {
          name,
          description,
          price,
          stock,
          imageURL,
          category,
        } = doc.data();
        li.push({
          id: doc.id,
          name,
          description,
          price,
          stock,
          imageURL,
          category,
        });
        res.json(li);
      }
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  firebase
    .firestore()
    .collection("Contacts")
    .doc(email)
    .set({
      name,
      email,
      phone,
      message,
    })
    .then(() => {
      res.json({ success: "Your message has been sent Successfully!" });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`E-Commerce Site's backend is running on port ${port}`);
});
