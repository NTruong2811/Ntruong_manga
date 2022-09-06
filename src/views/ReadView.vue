<template>
  <div class="read">
    <div class="aside">
      <router-link to="/"
        ><div class="logo font-medium">NTruong manga</div></router-link
      >
      <br />
      <hr />
      <br />
      <div class="img">
        <img :src="manga_detail.image" alt="" />
      </div>
      <h2>{{ manga_detail.mainName }}</h2>
      <div class="listChapter">
        <input type="text" placeholder="Tìm chap ..." />
        <div class="list">
          <ul>
            <div
              v-for="item in list_chapter"
              :key="item.id"
              v-on:click="re_render(item.chapter)"
              :id="item.chapter"
              :class="item.chapter"
            >
              <router-link
                :to="{
                  name: 'read',
                  params: { manga: manga, read_manga: item.link },
                }"
              >
                <li>
                  <i class="fa-solid fa-caret-right"></i>{{ item.chapter }}
                </li>
              </router-link>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="list_img">
        <div class="img" v-for="item in chapter_image" :key="item.id">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  display: none !important;
}
footer {
  display: none !important;
}
.read {
  background-color: black;
  color: white;
}
.read .aside {
  background-color: #1f1f1f;
  padding: 15px;
  position: fixed;
  height: 100%;
  width: 250px;
}
.read .aside .logo {
  font-size: 25px;
  text-align: center;
}
.read .aside .img img {
  border-radius: 10px;
  width: 100%;
  height: 300px;
}
.read .aside h2 {
  margin: 10px 0px;
}
.read .aside .listChapter {
  background-color: #3f3f3f;
  padding: 10px;
  border-radius: 10px;
}
.read .aside .listChapter input {
  background-color: #5f5f5f;
  padding: 4px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.read .aside .listChapter .list {
  height: 200px;
  overflow-y: scroll;
}

.read .aside .listChapter .list ul .chap_active {
  background-color: #5f5f5f !important;
}
.read .aside .listChapter .list ul .Chapter {
  border-radius: 10px;
  margin: 4px 0px;
}
.read .aside .listChapter .list ul li .fa-caret-right {
  margin-right: 10px;
  padding: 5px;
}
.read .main {
  background-color: black;
  margin-left: 250px;
  height: auto;
}

.read .main .list_img img {
  width: 755px;
  margin: auto;
}
</style>

<script>
import axios from "axios";
let api = "http://localhost:3000/";
export default {
  setup() {},
  data() {
    return {
      chapter_image: [],
      list_chapter: [],
      manga_detail: "",
      manga: this.$route.params.manga,
      reload: 0,
    };
  },
  created() {
    this.chapter_detail(
      this.$route.params.manga,
      this.$route.params.read_manga
    );
    this.get_listchapter(this.$route.params.manga);
    this.setcolor(this.$route.params.chapter)
  },
  methods: {
    chapter_detail(manga, read_manga) {
      axios
        .get(api + "read/?read_manga=" + read_manga + "&manga=" + manga)
        .then((res) => {
          this.chapter_image = res.data.listImage;
        });
    },
    get_listchapter(manga) {
      axios.get(api + "detail?manga=" + manga).then((res) => {
        this.list_chapter = res.data.listChapter.map((item) => {
          item.link = item.link.replace(
            "http://www.nettruyenme.com/truyen-tranh/",
            ""
          );
          return item;
        });
        this.manga_detail = res.data;
        // console.log(this.manga_detail);
      });
    },
    re_render(chapter) {
      this.chapter_detail(
        this.$route.params.manga,
        this.$route.params.read_manga
      );
      this.get_listchapter(this.$route.params.manga);
      window.scrollTo({ top: 0 });
      this.setcolor(chapter)
    },
    setcolor(chapter) {
      var active_chapter = document.getElementById(chapter);
      active_chapter.classList.add("chap_active");
      var resetColor = document.getElementsByClassName("chap_active");
      if (resetColor.length > 1) {
        resetColor[0].classList.remove("chap_active");
        console.log(resetColor);
      }
    },
  },
};
</script>
