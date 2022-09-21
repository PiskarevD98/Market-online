<template>
  <my-dialog v-model:show="dialogVisible" v-if="$store.state.name.length === 0">
    <post-form @create="createUser" />
  </my-dialog>
  <div class="card">
    <p>Name: {{ $store.state.name }}</p>
    <p>Family: {{ $store.state.family }}</p>
    <p>Email: {{ $store.state.email }}</p>
  </div>
  <div>
    <b> Basket:{{ $store.state.items[0]}} </b>
  </div>
  <div>
    <b>Order price:{{$store.state.items[0] * 2}} &#8364;</b>
    <my-button class="btn_enter">Order</my-button>
  </div>
</template> 

<script>
import MyButton from "@/components/UI/MyButton";
import MyDialog from "@/components/UI/MyDialog";
import PostForm from "@/components/PostForm";
export default {
  components: {
    MyButton,
    MyDialog,
    PostForm,
  },
  data() {
    return {
      user: {
        name: "",
        family: "",
        email: "",
      },
      dialogVisible: true,
      items: [],
    };
  },
  methods: {
    createUser(user) {
      this.user = {
        name: user.name,
        family: user.family,
        email: user.email,
      };
      this.dialogVisible = false;
    },
  },
  mounted() {},
  watch: {},
};
</script>

<style scoped>
.btn_enter {
  color: white;
  border-color: white;
  background: green;
}
</style>