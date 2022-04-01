<template>
  <div class="home">
    <div class="header-bar" v-if="width > 1100">
      <div class="nav-bar">
        <div class="nav-bar-item" :class="{'nav-bar-item-active': navBarActive === index}" v-for="(item, index) in navBar" :key="index">
          {{item}}
        </div>
      </div>
      <div class="nav-bar-logo">
        <img src="../assets/logo.png" />
      </div>
    </div>
    <div class="header-bar-pad" v-if="width < 1100 && width > 414">
      <img src="../assets/logo.png"  />
      <div class="nav-btn"></div>
    </div>
    <div class="header-bar-phone" v-if="width <= 414">
      <img src="../assets/logo.png"  />
      <div class="nav-btn"></div>
    </div>
    <div class="container">
      <div class="container-title">
        <div class="hender-box">CHARACTER</div>
      </div>
      <div class="list">
        <div class="item">
          <img src="../assets/item.jpg" />
          <div class="item-bottom">test</div>
        </div>
        <div class="item">
          <img src="../assets/item.jpg" />
          <!--          <view class="text">test......</view>-->
        </div>
        <div class="item">
          <img src="../assets/item.jpg" />
          <!--          <view class="text">test......</view>-->
        </div>
        <div class="item">
          <img src="../assets/item.jpg" />
          <div class="item-bottom">test...</div>
        </div>
      </div>
    </div>
    <div class="home-flex" v-if="isPortrait && width < 1100">
      <img src="../assets/item.jpg" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      navBar: ['HOME', 'NEWS', 'WEAPONS', 'CHARACTERS', 'WALLPAPER'],
      navBarActive:0,
      list: [{
        img: '../assets/item.jpg',
        text: 'test'
      }, {
        img: '../assets/item.jpg',
        text: 'test'
      }, {
        img: '../assets/item.jpg',
        text: 'test'
      }, {
        img: '../assets/item.jpg',
        text: 'test'
      }],
     // isPortrait: false,
    }
  },
  computed: {
    width() {
      console.log( document.body.clientWidth)
      return document.body.clientWidth
    },
    // // 是否纵向
    isPortrait() {
      console.log(document.body.clientWidth, document.documentElement.clientHeight)
      return (document.body.clientWidth > document.documentElement.clientHeight)
    }
  },
  watch: {

  },
  created() {
    this.loadJSON()
  },
  methods: {
      loadJSON(){
        //1、创建 xh
        var xhr = new XMLHttpRequest()
        //2、创建请求
        xhr.open("get", '/data.json',true);
        //3、设置回调函数
        xhr.onreadystatechange = function(){
          if(xhr.readyState==4&&xhr.status==200){
            //将响应回来的数据转换成JS对象/数组
            var users = JSON.parse(xhr.responseText);
            console.log(users)
            //按照数组的方式解析users
          }
        }
        //4、发送请求
        xhr.send(null);
      },
  }

}
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  .header-bar {
    width: calc(100% - 100px);
    height:calc(230px - 20px);
    background: url(../assets/bg.png);
    background-size: 100% 100%;
    padding: 20px 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .nav-bar {
      width: 100%;
      height: 40px;
      background: rgba(250,250,250,0.1);
      border-radius: 5px;
      color: #fff;
      display: flex;
      align-items: center;
      .nav-bar-item {
        margin-left: 30px;
        font-size: 14px;
        font-weight: bold;
        &.nav-bar-item-active {
          color:#E39E32;
        }
      }
    }
    .nav-bar-logo {
      display: flex;
      justify-content: flex-start;
      img {
        margin-left:150px;
        margin-top: 50px;
      }
    }
  }
  @media only screen and (max-width: 1180px) {
    .header-bar-pad {
      width: 100%;
      height: 60px;
      background: #000000;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding-left:20px;
      align-items: center;
      box-sizing: border-box;

      img {
        width: 250px;
        height: 50px;
      }
      .nav-btn {
        width: 60px;
        height: 60px;
        background: #E39E32;
      }
    }

  }
  @media only screen and (max-width: 415px) {
    .header-bar-phone {
      width: 100%;
      height: 35px;
      background: #000000;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding-left:20px;
      align-items: center;
      box-sizing: border-box;

      img {
        width: 90px;
        height: 25px;
      }
      .nav-btn {
        width: 35px;
        height: 35px;
        background: #E39E32;
      }
    }

  }
  .container {
    width: 100%;
    height: 100%;
    background: #1D2228;
    .container-title {
      padding: 50px 0 0 0;
      display: flex;
      justify-content: center;
      position: relative;
      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        background: rgba(250, 250,250, 0.3);
        top:75px;
      }
      .hender-box {
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border: 1px solid rgba(250, 250,250, 0.3);
      }
    }
    @media only screen and (max-width: 415px) {
      .container-title {
        padding: 50px 0 0 0;
        display: flex;
        justify-content: center;
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 1px;
          background: rgba(250, 250,250, 0.3);
          top:70px;
        }
        .hender-box {
          width: 150px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          border: 1px solid rgba(250, 250,250, 0.3);
          font-size: 14px;
        }
      }

    }
    .list {
      width: calc(100% - 400px);
      display: flex;
      flex-wrap: wrap;
      padding: 0 200px;
      .item {
        width: calc((100% - 100px) / 3);
        height: 450px;
        margin-top: 80px;
        img {
          width: 430px;
          height: 450px;
        }
      }
    }
    @media only screen and (max-width: 1180px) {
      .list {
        width: calc(100% - 90px);
        display: flex;
        flex-wrap: wrap;
        padding: 0 45px;
        justify-content: space-between;
        .item {
          width: calc((100% - 90px) / 2);
          height: 380px;
          margin-top: 50px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .item-bottom {
            position: absolute;
            bottom: 0;
            width: calc(100% - 30px);
            height: calc(90px - 20px);
            background: rgba(0,0,0,0.8);
            z-index: 10;
            color: #fff;
            padding: 20px 0 0 30px;
            display: flex;
            justify-content: flex-start;
            font-size: 16px;
          }
        }

      }
    }
    @media only screen and (max-width: 415px) {
      .list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 45px;
        justify-content: center;
        box-sizing: border-box;
        .item {
          width: 250px;
          height: 260px;
          margin-top: 50px;
          position: relative;
          img {
            width: 250px;
            height: 260px;
          }
          .item-bottom {
            position: absolute;
            bottom: 0;
            width: 250px;
            height: 50px;
            background: rgba(0,0,0,0.8);
            z-index: 10;
            color: #fff;
            padding: 10px 0 0 15px;
            display: flex;
            justify-content: flex-start;
            font-size: 12px;
            box-sizing: border-box;
          }
        }

      }
    }
  }
  .home-flex {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 210px;
      animation:play 1s linear infinite;
    }
    @-webkit-keyframes play {
    0% {
      -webkit-transform:rotate(0deg);
    }
    50% {
      -webkit-transform:rotate(90deg);
    }
    100% {
      -webkit-transform:rotate(0deg);
    }
  }
  }
}
</style>
