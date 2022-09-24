<template>
  <div class="container">
    <p class="header" @click="$router.push('/about')">All Items</p>
    <my-input class="search" v-model="searchQuery" placeholder="Search...">
    </my-input>
  </div>
  <div>
    <my-select class="select" v-model="selectedSort" :options="sortOptions" />
  </div>
  <item-list :items="sortedAndSearchedItems" />
  <a href="#" title="Вернуться к началу" class="topbutton">Вверх</a>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MySelect from "@/components/UI/MySelect";
import axios from "axios";
import ItemList from "@/components/ItemList";
export default {
  components: { MySelect, MyInput, ItemList },
  data() {
    return {
      searchQuery: "",
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "Title" },
        { value: "description", name: "Description" },
      ],
      items: [],
    };
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.items = response.data;
      } catch (error) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.fetchItems();
  },
  computed: {
    sortedItems() {
      return [...this.items].sort((item1, item2) =>
        item1[this.selectedSort]?.localeCompare(item2[this.selectedSort])
      );
    },
    sortedAndSearchedItems() {
      return this.sortedItems.filter((item) =>
        item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  box-sizing: border-box;
}
.header {
  margin-left: 1%;
  font-size: 50px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  padding-top:0.5%;
}
.search {
  margin-left: 1rem;
  width: 84%;
  height: 50%;
  border-radius: 12px;
  border: 5px solid plum;
}
.select {
  border-radius: 12px;
  margin-left: 84%;
  border: 3px solid plum;
  width: 15%;
  margin-top:0.5%;
}

.topbutton {
  padding: 10px 15px;
  background: red;
  color: white;
  border: 1px solid rgb(230, 168, 149);
  border-radius: 4px;
  width:5%;
  margin-left:90%;
  margin-bottom:1%;
  text-decoration: none;
}
.topbutton:hover {background: rgb(232,95,76); } 
.topbutton:active { background: rgb(152,15,0); } 

</style>