<template>
  <div class="post">
    <div class="product-item">
      <img class="img" :src="item.image" />
      <div class="title">
        <strong> {{ item.title }}</strong>
      </div>
      <div class="price">{{ item.price }} &#8364;</div>
      <div v-if="showDetail">{{ item.description }}</div>
      <my-button class="btn-main" @click="showDetails">Details</my-button>
      <my-button class="btn-main">Add to cart</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    showDetails() {
      this.showDetail = !this.showDetail;
    },
  },
};
</script>

<style  scoped>
.post {
  box-sizing: border-box;
  height: 700px;
  justify-items: center;
  flex: 1 1 auto;
  width: 350px;
}
.product-item {
  width: 300px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid #f5f5f5;
  background: white;
  font-family: "Open Sans";
  transition: 0.3s ease-in;
  margin-top: 30px;
}
.product-item:hover {
  border-bottom: 2px solid #fc5a5a;
}
.img {
  height: 400px;
}
.product-item img {
  display: block;
  width: 100%;
}
.product-list {
  background: #fafafa;
  padding: 15px 0;
}
.product-list h3 {
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
}
.price {
  font-size: 16px;
  color: #fc5a5a;
  display: block;
  margin-bottom: 12px;
}
.btn-main {
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
}
.product-item:hover .btn-main {
  background: #fc5a5a;
}
.title {
  height: 60px;
}
</style>