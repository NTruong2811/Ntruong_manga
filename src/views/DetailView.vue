<template>
  <div class="detail">
    <div class="main">
      <div class="img">
        <img :src="data.image" alt="" />
      </div>
      <div class="text">
        <h2>{{ data.mainName }}</h2>
        <span class="human">Tác giả : {{ data.author }}</span> <br />
        <br />
        <p><i class="fa-solid fa-circle"></i> {{ data.status }}</p>
        <br />
        <div class="cate">
          <span>Thể loại: </span>
          <ul>
            <li v-for="item in data.genre" :key="item.id">{{ item.name }}</li>
          </ul>
        </div>
        <router-link
          :to="{
            name: 'read',
            params: { manga: mangalink, read_manga: data.fistChap },
          }"
        >
          <button>Đọc ngay</button>
        </router-link>
        <router-link
          :to="{
            name: 'read',
            params: { manga: mangalink, read_manga: data.finalChap },
          }"
        >
          <button>Chap mới nhất 2</button>
        </router-link>
      </div>
    </div>
    <div class="desc">
      <div class="title">Nội dung:</div>
      <div class="content">
        {{ data.content }}
      </div>
    </div>
    <div class="chaps">
      <div class="title">Danh sách chapter :</div>
      <div class="list_chap">
        <ul>
          <router-link
            class="chapter"
            v-for="item in data.listChapter"
            :key="item.id"
            :to="{
              name: 'read',
              params: {
                manga: mangalink,
                read_manga: item.link,
                chapter: item.chapter,
              },
            }"
          >
            {{ item.chapter }} <br />
            <!-- {{ item.time }} -->
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail {
  background-color: #1f1f1f;
  padding: 50px 192px;
  color: white;
}
.detail .main {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.detail .main .img img {
  border-radius: 10px;
  width: 230px;
  height: 320px;
}
.detail .main .text h2 {
  font-size: 46px;
}
.fa-circle {
  line-height: 100%;
  font-size: 12px;
  color: rgb(96, 125, 51);
}

.detail .main .text .cate {
  display: flex;
}
.detail .main .text .cate ul {
  margin-left: 10px;
  display: flex;
}

.detail .main .text .cate ul li {
  background-color: #555759;
  margin: 0px 5px;
  padding: 4px 10px;
  border-radius: 10px;
  /* color: black; */
}

.detail .main .text button {
  margin-top: 50px;
  font-weight: 400;
  font-size: 18px;
  padding: 9px 25px;
  border-radius: 5px;
  background-color: #ef2853;
  margin-right: 20px;
}
.detail .desc {
  margin-top: 30px;
}
.detail .desc .title {
  font-size: 30px;
}

.detail .chaps {
  margin-top: 50px;
  background-color: #555759;
  padding: 20px;
  border-radius: 10px;
}
.detail .chaps .list_chap ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  max-height: 600px;
  overflow-y: scroll;
}
.detail .chaps .list_chap ul .chapter {
  background-color: #1f1f1f;
  margin: 5px;
  padding: 10px 18px;
  border-radius: 10px;
  height: 68px;
  overflow: hidden;
}
.detail .chaps .title {
  font-size: 25px;
  padding-bottom: 20px;
}
</style>

<script>
import axios from "axios";
let api = "http://localhost:3000/";

export default {
  data() {
    return {
      data: "",
      mangalink: this.$route.params.manga,
    };
  },
  setup() {},
  created() {
    this.getdetail(this.$route.params.manga);
  },
  methods: {
    getdetail(manga) {
      axios.get(api + "detail?manga=" + manga).then((res) => {
        res.data.finalChap = res.data.finalChap.replace(
          "http://www.nettruyenme.com/truyen-tranh/",
          ""
        );
        res.data.fistChap = res.data.fistChap.replace(
          "http://www.nettruyenme.com/truyen-tranh/",
          ""
        );
        res.data.listChapter = res.data.listChapter.map((item) => {
          item.link = item.link.replace(
            "http://www.nettruyenme.com/truyen-tranh/",
            ""
          );
          return item;
        });
        this.data = res.data;
        console.log(this.data);
      });
    },
  },
};
</script>
