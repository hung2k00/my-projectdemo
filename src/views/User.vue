<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>User</h1>
  <button @click="signOut">Click me</button>
</template>

<script>
import { db, firebase } from "../configs/init.js";
export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign Out completed");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
      db.collection("users")
        .doc("Tk5iMQFyEhv0PYkQsUvm")
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const username = data.username;
            const password = data.password;

            // Hiển thị thông tin đăng nhập
            console.log("Username:", username);
            console.log("Password:", password);
          } else {
            console.log("Không tìm thấy thông tin đăng nhập.");
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin đăng nhập:", error);
        });
    },
  },
};
</script>
