<template>
  <form @submit.prevent>
    <h4>Create User</h4>
    <my-input class="form-input" v-model="user.name" type="text" placeholder="Name" />
    <my-input class="form-input" v-model="user.family" type="text" placeholder="Family" />
    <my-input class="form-input" v-model="user.email" type="email" placeholder="Email" />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createUser"
      class="btn-create"
    >
      Create
    </my-button>
  </form>
</template>
  
  <script>
import {mapState, mapMutations} from 'vuex'
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
export default {
  components: {
    MyButton,
    MyInput,
    mapMutations,
    mapState,
  },
  data() {
    return {
      user: {
        name: "",
        family: "",
        email: "",
      },
    };
  },
  methods: {
    createUser() {
      this.$emit("create", this.user);
      store.commit(setName(event))
      // this.user = {
      //   name: setName(),
      //   family: setFamily(),
      //   email: setEmail(),
      // };
    },
  },
  computed: {
    // ...mapState({
    //   name: state => state.name,
    //   family: state => state.family,
    //   email: state => state.email,
    // })
  },
};
</script>
  
  <style scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn-create {
  color: black;
  border-color: black;
}

.btn-create:hover {
  background-color: green;
}
.form-input {
  border-radius: 5px;
}
</style>