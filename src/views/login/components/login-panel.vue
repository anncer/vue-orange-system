<template>
  <div class="login-form">
    <div class="input-group input-user" :class="[isUserFocus ? 'focus' : '']">
      <div class="login-p-icon">
        <i class="el-icon-user-solid"></i>
      </div>
      <div>
        <h5>手机号</h5>
        <input
          type="text"
          class="login-input"
          v-model="loginForm.username"
          @focus="onUserFocus"
          @blur="onUserBlur"
        />
      </div>
    </div>
    <div class="error-item">{{ errorMsg.userErr }}</div>
    <div class="input-context clearfix">
      <div class="input-group input-pwd" :class="[isPwdFocus ? 'focus' : '']">
        <div class="login-p-icon">
          <i class="el-icon-lock"></i>
        </div>
        <div>
          <h5>验证码</h5>
          <input
            type="password"
            class="login-input"
            v-model="loginForm.password"
            @keydown.enter="handleLogin"
            @focus="onPwdFocus"
            @blur="onPwdBlur"
          />
        </div>
      </div>
      <el-button
        type="primary"
        :disabled="pwdDisabled"
        :class="['virify-btn']"
        @click="handleVirify"
      >
        {{ viewText }}
      </el-button>
    </div>
    <div class="error-item">{{ errorMsg.pwdErr }}</div>
    <button class="login-loadbtn" @click="handleLogin">登录</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { ILoginForm, IErrorMsg } from "../type.d";
import {
  checkPwdVal,
  checkUserVal,
  checkPhone,
  cleckFormData
} from "../hooks/useLoginHook";
import { division, subtraction } from "@/utils/count";
import encrypt from "@/utils/encrypt";
import { useStore } from "vuex";
import { getVerifyCode } from "@/api/login/login";

export default defineComponent({
  name: "LoginPanel",
  setup() {
    const store = useStore();

    const loginForm = reactive<ILoginForm>({
      username: "",
      password: ""
    });

    const errorMsg = reactive<IErrorMsg>({
      userErr: "",
      pwdErr: ""
    });

    const isUserFocus = ref<boolean>(false);
    const isPwdFocus = ref<boolean>(false);

    const onUserFocus = () => {
      isUserFocus.value = true;
    };

    const onUserBlur = () => {
      if (loginForm.username.length) {
        localStorage.setItem("lgUserName", loginForm.username);
      }
      isUserFocus.value = checkUserVal(loginForm, errorMsg);
    };

    const onPwdFocus = () => {
      isPwdFocus.value = true;
    };

    const onPwdBlur = () => {
      isPwdFocus.value = checkPwdVal(loginForm);
    };

    const defaultVirifyTime = 60;

    let timer: any;
    let currentVirifyTime = defaultVirifyTime;

    let pwdDisabled = ref(true);

    const defaultText = "发送到即时通讯";
    const viewText = ref(defaultText);

    const checkTime = () => {
      const lgUserName = localStorage.getItem("lgUserName");
      if (lgUserName) {
        loginForm.username = lgUserName;
      }
      viewText.value = defaultText;
      currentVirifyTime = defaultVirifyTime;
      const virifySendTime = localStorage.getItem("virifySendTime");
      if (!virifySendTime) {
        pwdDisabled.value = false;
        return;
      }
      const now = new Date().getTime();
      const lessTime = division(subtraction(now, Number(virifySendTime)), 1000);
      if (lessTime < defaultVirifyTime) {
        pwdDisabled.value = true;
        currentVirifyTime = Math.floor(
          subtraction(defaultVirifyTime, lessTime)
        );
        viewText.value = currentVirifyTime.toString();
        setVirifyTimer();
      } else {
        pwdDisabled.value = false;
      }
    };

    const setVirifyTimer = () => {
      if (timer) {
        clearInterval(timer);
      } else {
        timer = setInterval(() => {
          currentVirifyTime = currentVirifyTime - 1;
          viewText.value = currentVirifyTime.toString();
          if (!currentVirifyTime) {
            clearInterval(timer);
            viewText.value = defaultText;
            pwdDisabled = ref(false);
          }
        }, 1000);
      }
    };

    const handleVirify = (): void => {
      if (checkPhone(loginForm, errorMsg)) {
        getVerifyCode(loginForm.username)
          .then((res) => {
            if (!res.data) {
              // $msg("error", "验证码发送失败！");
            } else {
              localStorage.setItem(
                "virifySendTime",
                new Date().getTime().toString()
              );
              // $msg("验证码发送成功！");
              pwdDisabled = ref(true);
              setVirifyTimer();
            }
          })
          .catch(() => {
            // $msg("error", "验证码发送失败！");
          });
      }
    };

    const handleLogin = async () => {
      const flag = cleckFormData(loginForm, errorMsg);
      if (flag) {
        const formData = {
          username: loginForm.username,
          code: loginForm.password
        };
        const _TOKEN = encrypt(formData);
        console.log(_TOKEN, "_TOKEN");
        await store.dispatch("user/accountLoginAction", _TOKEN);
      }
    };

    onMounted(() => {
      checkTime();
      onPwdBlur();
      onUserBlur();
    });

    return {
      loginForm,
      isUserFocus,
      isPwdFocus,

      onUserFocus,
      onUserBlur,
      errorMsg,

      onPwdFocus,
      onPwdBlur,
      pwdDisabled,

      handleVirify,
      viewText,
      handleLogin
    };
  }
});
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.input-group {
  position: relative;
  display: -ms-grid;
  display: grid;
  grid-template-columns: 7% 93%;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.error-item {
  height: 20px;
  margin-top: 5px;
  line-height: 20px;
  text-align: right;
  color: $danger;
  font-size: 14px;
}
// .input-group:nth-child(1) {
//   margin-bottom: 4px;
//   margin-top: 25px;
// }

.input-group::before,
.input-group::after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #c5d3f7;
  transition: 0.5s;
}

.input-group::after {
  right: 50%;
}

.input-group::before {
  left: 50%;
}

.login-p-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-p-icon svg {
  color: #d9d9d9;
  transition: 0.5s;
}

.input-group > div {
  position: relative;
  height: 45px;
}

.input-group > div > h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #d9d9d9;
  font-size: 18px;
  transition: 0.3s;
  margin: 0;
  padding: 0;
}

.input-group.focus .login-p-icon svg {
  color: #5392f0;
}

.input-group.focus div h5 {
  top: -5px;
  font-size: 15px;
}

.input-group.focus::after,
.input-group.focus::before {
  width: 50%;
}

.login-input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  font-family: "Roboto", sans-serif;
}

// a {
//   display: block;
//   text-align: right;
//   text-decoration: none;
//   color: #999;
//   font-size: 0.9rem;
//   transition: 0.3s;
// }

// a:hover {
//   color: #5392f0;
// }

.input-context {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  .input-group {
    flex: 1;
  }
  .virify-btn {
    height: 40px;
    margin-top: 20px;
    padding: 8px 10px;
    width: 120px;
    margin-left: 10px;
  }
}

.login-loadbtn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 2rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #567dbe, #5392f0, #567dbe);
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  background-size: 200%;
  transition: 0.5s;
}

.login-loadbtn:hover {
  background-position: right;
}
</style>
