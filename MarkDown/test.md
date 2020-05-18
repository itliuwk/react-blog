## 先上图，看下要实现的效果



![avatar](http://106.52.232.16:8000/files/1111.png)

先安装

`npm install html2canvas`


直接在页面vue引入

`import html2canvas from 'html2canvas'`





```
<div class="card">
  <div class="content" ref="codeTofile" v-if="!codeSrc">
    <div class="content-br">
      <p class="invitation">
        <span></span>
        邀请卡
        <span></span>
      </p>
      <div>
        <img :src="userInfo.headImageUrl" alt="">
        <p>{{userInfo.name||''}}</p>
        <p class="tips">邀请你一起加入,推广赢奖励</p>
      </div>
      <div id="qrCodeS"></div>
    </div>
  </div>
  <div class="content" v-else="">
    <img :src="codeSrc" alt="">
  </div>
  <p class="tip">长按图片保存到相册</p>
</div>

```


写好html页面，定义自己的海报样式


```
import { profileInfo } from ../../api/distribution;
import html2canvas from 'html2canvas'
import Alert from '@/utils/alert.js'
import { BASE_URL_FONT } from '@/config';
import { getCookie } from '../../utils/cookie';
import { LOCAL_KEY_CLIENT_ID } from '../../config';

export default {
  name: invitationCard,
  data () {
    return {
      msg: invitationCard,
      userInfo: {},
      codeSrc: ''
    }
  },
  mounted () {
    this.getInfo();
  },
  methods: {
    getInfo () {
      profileInfo().then(res => {
        this.userInfo = res || {};
        this.card();
      });
    },
    card () {
      let that = this;
      Alert.loading('正在生成');
      setTimeout(() => {
        let qrCode = new QRCode(document.getElementById(qrCodeS), {
          text: BASE_URL_FONT + '/recruitmentPlan?salesManId=' + this.userInfo.salesManId + '&amp;amp;scene=' + getCookie(LOCAL_KEY_CLIENT_ID),
          width: 100,
          height: 100,
          colorDark: #000000,
          colorLight: #ffffff,
          correctLevel: QRCode.CorrectLevel.H
        });

        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        html2canvas(this.$refs.codeTofile, { //  用html2canvas 生成图片
          backgroundColor: null,
          useCORS: true
        }).then((canvas) => {
          Alert.clear();
          qrCode.clear();
          let url = canvas.toDataURL('image/png');
          this.codeSrc = url
        })

      }, 1500);
    }
  }
}

```


因为还要生成二维码，还要引入 QRcode.js,我这里直接在 index.html 中引入了





### less样式

```$xslt
.card {
  color: #333;
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  padding: 60px 100px 0;
  box-sizing: border-box;

  .content {
    background: #fff;
    height: 800px;
    width: 100%;
    border-radius: 10px;
    padding: 5px;

    img {
      width: 100%;
      height: 100%;
    }

    .content-br {
      background: rgba(255, 219, 185, 0.2);
      background-image: linear-gradient(#fff6ef, #ffffff);
      height: 100%;
      width: 100%;
      text-align: center;
      border: 1px solid rgba(255, 219, 185, 0.2);

      > p {
        color: #f76845;
        font-size: 40px;
        padding-top: 50px;
      }

      > div {
        padding-top: 50px;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        p {
          padding-top: 30px;
        }

        .tips {
          font-size: 30px;
        }
      }
    }
  }

  #qrCodeS {
    text-align: center;

    /deep/ {
      img {
        display: inline-block !important;
      }
    }
  }

  .tip {
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
  }

  .invitation {
    letter-spacing: 12px;
    font-size: 20px;
  }
  .invitation span {
    display: inline-block;
    height: 2px;
    width: 70px;
    background: #ffd0b2;
    vertical-align: middle;
    margin: 0 30px;
    position: relative;
  }

  .invitation span:nth-child(1):before,
  .invitation span:nth-child(2):before {
    content:  ;
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #ffd0b2;
    border-radius: 50%;
    vertical-align: top;
    z-index: 999;
  }

  .invitation span:nth-child(1):before {
    position: absolute;
    top: -5px;
    right: -10px;
  }

  .invitation span:nth-child(2):before {
    position: absolute;
    top: -5px;
    left: -10px;
  }
}


```



生成的base64图 如下

![avatar](http://106.52.232.16:8000/files/22222.png)

