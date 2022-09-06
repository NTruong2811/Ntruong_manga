<template>
  <div class="nav">
    <nav>
      <ul class="flex justify-between">
        <li class="categories">
          <router-link to=""
            >Thể Loại <i class="fa-solid fa-angle-down"></i
          ></router-link>
          <div class="dropdown">
            <ul>
              <li>
                <router-link to="">Action</router-link>
              </li>
              <li>
                <router-link to="">Adult</router-link>
              </li>
              <li>
                <router-link to="">Adventure</router-link>
              </li>
              <li>
                <router-link to="">Anime</router-link>
              </li>
              <li>
                <router-link to="">Comedy</router-link>
              </li>
              <li>
                <router-link to=""
                  >Xem Thêm <i class="fa-solid fa-angle-right"></i
                ></router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class=""><router-link to="">Hot</router-link></li>
        <li class=""><router-link to="">Mới cập nhật</router-link></li>
        <li class=""><router-link to="">Bảng xếp hạng</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.nav {
  margin-left: -80px;
  font-size: 18px;
  position: relative;
}
.categories:hover .dropdown {
  opacity: 1;
  transform: translateY(-10px);
      pointer-events: auto;

}
.nav ul li {
  padding: 6px 15px;
}

.dropdown {
  z-index: 100;
  position: absolute;
  margin-top: 20px;
  background-color: #2f2f2f;
  transition: 0.3s;
  transform: translateY(10px);
  opacity: 0;
    pointer-events: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 5px;
}

.dropdown ul li:hover{
    background-color: #555759;
}
.dropdown ul li{
    width: 100%;
}
.dropdown ul li .router-link-active{
    padding: 0px 10px;
}
</style>
