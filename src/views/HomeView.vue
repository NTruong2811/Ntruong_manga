<template>
  <div class="home">
    <div id="banner">
      <div class="slides">
        <div class="main_slider">
          <div v-for="index in slides" :key="index">
            <div v-if="index == active" id="content_slider">
              <div class="img">
                <img src="../assets/image/vo-luyen-dinh-phong.jpg" alt="" />
              </div>
              <div class="text">
                <span class="name">VÕ LUYỆN ĐỈNH PHONG {{ index }}</span
                ><br />
                <br />
                <span class="desc">
                  Võ đạo đỉnh phong, là cô độc, là tịch mịch, là dài đằng đẵng
                  cầu tác, là cao xử bất thắng hàn Phát triển trong nghịch cảnh,
                  cầu sinh nơi tuyệt địa, bất khuất không buông tha, mới có thể
                  có thể phá võ chi cực đạo. Lăng Tiêu các thí luyện đệ tử kiêm
                  quét rác gã sai vặt Dương Khai ...
                </span>
                <br />
                <br />
                <span class="new_chap">Chapter 2533 - 26/8/2022</span> <br />
                <br />
                <button>Đọc ngay</button> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="prev" @click="move(-1)">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </span>
      <span class="next" @click="move(1)">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </span>
      <ul class="dots">
        <li
          v-for="(dot, index) in slides"
          :class="{ active: ++index === active }"
          @click="jump(index)"
          v-bind:key="dot"
        ></li>
      </ul>
    </div>
    <div class="main">
      <div class="new_update">
        <div class="title">
          <h2>Mới cập nhật <i class="fa-solid fa-chevron-right"></i></h2>
        </div>
        <div class="list">
          <div class="card" v-for="item of newUpdate" v-bind:key="item.id">
            <router-link :to="{ name: 'detail', params: { manga: item.link } }">
              <div class="img">
                <img :src="item.img" alt="" />
              </div>
              <div class="text">
                <span class="name">{{ item.name }}</span> <br />
                <span id="newchap">
                  <!-- <router-link :to="item.linkchap"> -->
                  <i class="fa-solid fa-caret-right"></i> {{ item.newchap }}
                  <!-- </router-link> -->
                </span>
              </div>
              <div class="overlay">
                <span id="status">
                  <i class="fa-solid fa-pen-to-square"></i> Đang tiến hành</span
                >
                <br />
                <span id="time"
                  ><i class="fa-solid fa-clock"></i> 16 phút trước
                </span>
                <div class="desc">
                  Võ đạo đỉnh phong, là cô độc, là tịch mịch, là dài đằng đẵng
                  cầu tác, là cao xử bất thắng hàn Phát triển trong nghịch cảnh,
                  cầu sinh nơi tuyệt địa, bất khuất không buông tha, mới có thể
                  có...
                </div>
                <button>Đọc ngay</button>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.new_update .list {
  width: 100%;
  overflow: hidden;
  display: flex;
  height: 400px;
}
.new_update .list .card {
  margin: 0px 10px;
}

.home {
  background-color: #1f1f1f;
  padding-bottom: 100px;
}

.new_update {
  padding: 100px 100px;
  color: white;
}

.new_update .title {
  font-size: 28px;
}
.new_update .title i {
  font-size: 23px;
}
.new_update .list {
  margin-top: 40px;
}
.new_update .list .card {
  width: 205px;
  height: 300px;
  position: relative;
  margin-bottom: 50px;
}

.new_update .list .card:hover .overlay {
  display: block;
}
.new_update .list .card .img {
  width: 205px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
}
.new_update .list .card .img img {
  width: 100%;
  height: 100%;
}

.new_update .list .card .text .name {
  padding: 20px 0px;
}

.new_update .list .card .text #newchap {
  margin-top: 10px;
}

.new_update .list .card .overlay {
  background-color: rgba(0, 0, 0, 0.656);
  width: 205px;
  height: 300px;
  border-radius: 10px;
  position: absolute;
  top: 0px;
  padding: 14px 20px;
  display: none;
  animation: overlay 0.3s;
}
@keyframes overlay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.new_update .list .card .overlay .desc {
  font-size: 14px;
  margin-top: 10px;
}

.new_update .list .card .overlay button {
  font-weight: lighter;
  font-size: 16px;
  padding: 4px 15px;
  border-radius: 5px;
  background-color: #ef2853;
  margin-top: 10px;
}

.new_update .list .card .overlay #status,
#time {
  font-size: 14px;
}

$primary: #221e21;
#banner {
  // background: radial-gradient(circle at center, #626262, #1F1F1F);
  background-color: black;
  background-image: url(../assets/image/vo-luyen-dinh-phong.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 490px;
  // overflow: hidden;
}

#content_slider {
  backdrop-filter: blur(10px);
  color: white;
  font-size: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 70px 190px;
}
#content_slider .img {
  width: 225px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
}
#content_slider .img img {
  width: 100%;
  height: 100%;
}

#content_slider .text {
  margin-left: 60px;
}

#content_slider .text .name {
  font-size: 35px;
  font-weight: lighter;
}
#content_slider .text .desc {
  padding-top: 120px;
  font-weight: lighter;
  font-size: 15px;
}
#content_slider .text .new_chap {
  font-weight: lighter;
  font-size: 20px;
}
#content_slider button {
  font-weight: lighter;
  font-size: 18px;
  padding: 9px 25px;
  border-radius: 5px;
  background-color: #ef2853;
}
#content_slider {
  animation: pulse 1.1s;
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.prev,
.next {
  position: absolute;
  top: 45%;
  width: 50px;
  height: 50px;
  border: 2px solid $primary;
  color: $primary;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 25px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: #fff;

  &:hover {
    background: $primary;
    transform: scale(1.2);
    border: 2px solid #fff;
  }

  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}

.next {
  right: 0;
  margin-left: auto;
  margin-right: 25px;
  text-indent: 2px;
}

.dots {
  // position: fixed;
  display: block;
  width: 100%;
  text-align: center;
  bottom: 20px;

  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: white;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      width: 22px;
      opacity: 1;
    }
  }
}

.slides {
  font-size: 40px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 80px;
  }

  @media (min-width: 900px) {
    font-size: 140px;
  }

  .animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .slide-in {
    opacity: 0;
    transform: translate(-40%, -50%);
  }

  .slide-in-active {
    transition-delay: 150ms;
  }

  .slide-out {
    opacity: 1;
  }

  .slide-out-active {
    opacity: 0;
    transform: translate(-60%, -50%);
  }
}

.buttons {
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  padding: 10px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background: $primary;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    opacity: 0.2;
    cursor: no-drop;
  }
}
</style>
<script>
// @ is an alias to /src

import axios from "axios";
let api = "http://localhost:3000/";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      newUpdate: ["a"],
      slides: 5,
      active: 1,
    };
  },
  created() {
    // this.auto();
    this.get_newUpdate();
  },
  methods: {
    get_newUpdate() {
      axios
        .get(api)
        .then((respon) => {
          var { data } = respon;
          this.newUpdate = [];
          data.map((item) => {
            item.link = item.link.replace(
              "http://www.nettruyenme.com/truyen-tranh/",
              ""
            );
            this.newUpdate.push(item);
          });

          console.log(this.newUpdate);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    move(amount) {
      this.active += amount;
      console.log(this.active);
      if (this.active > this.slides) {
        this.active = 1;
      }
      if (this.active == 0) {
        this.active = 5;
      }
    },
    jump(index) {
      this.active = index;
    },
    auto() {
      setInterval(function () {
        if (this.active > this.slides) {
          this.active = 1;
        }
        console.log(this.active);
      }, 1000);
    },
  },
};
</script>
