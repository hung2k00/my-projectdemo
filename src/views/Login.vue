<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-screen-aa mx-auto flex relative mt-31 all_form">
    <div class="max-w-screen-bb login_form absolute top-0 bottom-0">
      <div class="w-1/2 mx-auto login_items">
        <p class="font-normal text-5xl login_p mt-28 ml-4">Customer Care</p>
        <form action="" method="post" class="mt-10" @submit.prevent="login">
          <div class="container_form">
            <label for="email" class="font-normal text-2xl text_label"
              >Tên đăng nhập</label
            >
            <input
              type="text"
              placeholder="example@gmail.com"
              name="email"
              required
              v-model="email"
            />

            <label for="psw" class="font-normal text-2xl text_label"
              >Mật khẩu</label
            >
            <input
              class="mt-5"
              type="password"
              placeholder=" ********************"
              name="password"
              required
              v-model="password"
            />

            <label>
              <input
                type="checkbox"
                name="remember"
                class="mt-4 check__box"
                v-model="remember"
              />
              <span class="text_check">Ghi nhớ ?</span>
              <!-- <span class="psw"><a href="#">Quên mật khẩu</a></span> -->
            </label>
            <div
              class="mt-5 hidden text-red-400"
              role="alert"
              id="alert_1"
            ></div>
            <button class="mt-9 font-normal text-2xl">
              <p class="text_button">Đăng nhập</p>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="ml-96 img_login">
      <img src="../assets/img/Image.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  background: #fffcfc;
  border: 1px solid #cecdcd;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  box-sizing: border-box;
}
input[type="checkbox"] {
  background: #fffcfc;
  border: 2px solid #cecdcd;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  height: 15px;
  width: 15px;
}

button {
  background-color: #0070d2;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

button:hover {
  opacity: 0.8;
}
.login_p {
  color: rgba(245, 114, 18, 1);
}

.container_form {
  padding: 16px;
}
.text_label {
  color: rgba(0, 112, 210, 1);
}
.text_check {
  margin-left: 10px;
  color: rgba(0, 112, 210, 1);
}
span.psw {
  float: right;
  padding-top: 12px;
}
.login_form {
  background: #fffcfc;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 960px) {
  .img_login {
    display: none;
  }
}
@media only screen and (max-width: 1280px) and (max-height: 720px) {
  .all_form {
    margin: 55px 30px;
  }
}
@media only screen and (max-width: 1280px) and (max-height: 1080px) {
  .all_form {
    margin: 215px 40px;
  }
  .login_form {
    width: 680px;
  }
}
@media only screen and (max-width: 1600px) and (max-height: 900px) {
  .all_form {
    margin-top: 75px;
    margin-bottom: 80px;
  }
}
@media only screen and (max-width: 960px) and (max-height: 540px) {
  .all_form {
    margin-top: 0;
    margin-left: 140px;
  }
  .login_p {
    margin-top: 50px;
  }
}
@media only screen and (max-width: 640px) and (max-height: 360px) {
  .all_form {
    margin-top: 0px;
    margin-left: 0px;
    height: 300px;
    width: 500px;
  }
  .login_p {
    margin-left: 40px;
    margin-top: 16px;
    font-size: 26px;
  }
  .login_form {
    margin-top: -170px;
    margin-left: 28px;
    height: 300px;
    width: 500px;
  }
  .container_form {
    float: left;
    margin-top: 12px;
    height: 100px;
    width: 300px;
    font-size: 10px;
    margin-left: -25px;
  }
  button {
    margin-top: 10px;
    font-size: 13px;
    height: 40px;
  }
  .text_button {
    margin-top: -10px;
    margin-bottom: 20px;
  }
  .text_label {
    font-size: 13px;
  }
  input[type="text"],
  input[type="password"] {
    height: 20px;
  }
  .check__box {
    margin-top: 0px;
  }
  form {
    margin-top: -15px;
  }
}
@media only screen and (max-width: 375px) and (max-height: 667px) {
  .all_form {
    margin-top: 0px;
    margin-left: auto;
    margin-right: 0px;
  }
}
@media only screen and (max-width: 768px) and (max-height: 1024px) {
  .all_form {
    margin-top: 150px;
    margin-left: 40px;
  }
}
@media only screen and (max-width: 820px) and (max-height: 1180px) {
  .all_form {
    margin-top: 200px;
    margin-left: 45px;
  }
}
@media only screen and (max-width: 412px) and (max-height: 915px) {
  .all_form {
    margin-top: 250px;
    margin-left: -35px;
  }
}
@media only screen and (max-width: 414px) and (max-height: 896px) {
  .all_form {
    margin-top: 300px;
    margin-left: 0px;
  }
}
@media only screen and (max-width: 360px) and (max-height: 740px) {
  .all_form {
    margin-top: 250px;
    margin-left: 0px;
  }
}
@media only screen and (max-width: 390px) and (max-height: 844px) {
  .all_forms {
    margin-left: 0px;
  }
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      axios
        .post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Xử lý phản hồi thành công
          console.log(response.data);
        })
        .catch((error) => {
          // Xử lý lỗi
          console.error(error);
        });
    },
  },
  // methods: {
  //   login(credentials) {
  //     credentials = { email: this.email, password: this.password };
  //     axios
  //       .post("http://localhost:3000/users", credentials)
  //       .then((response) => {
  //         console.log(response);
  //         // Xử lý phản hồi đăng nhập thành công

  //         this.$router.push("/user");

  //         // Lưu thông tin đăng nhập vào Local Storage hoặc Vuex Store
  //         localStorage.getItem("token", response.data.token);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode);
  //         console.log(errorMessage);
  //         let alert_1 = document.querySelector("#alert_1");
  //         alert_1.classList.remove("hidden");
  //         alert_1.innerHTML = errorMessage;
  //         console.log(alert_1);
  //         this.email = "";
  //         this.password = "";
  //       });
  //   },
  // },
  // mounted() {
  //   // Chặn yêu cầu tạo mới khi đăng nhập
  //   axios.interceptors.request.use(
  //     (config) => {
  //       if (
  //         config.method === "post" &&
  //         config.url === "http://localhost:3000/users"
  //       ) {
  //         throw new Error("Login request not allowed");
  //       }
  //       return config;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     }
  //   );
  // },
};
</script>
