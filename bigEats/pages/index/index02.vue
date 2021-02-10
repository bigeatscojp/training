    <style>
      :root {
        --main-color: #b4b4b4;
      }
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        background-color: var(--main-color);
        height: 100vh;
      }
      .top {
        height: 30px;
        background-color: #f3f3f3;
      }
      .title {
        /* display: block; */
        text-align: center;
        margin-top: 30px;
      }
      .new {
        /* display: block; */
        width: 80px;
        margin: -23px 0 0 285px;
      }
      .addressDiv {
        padding: 10px;
        background-color: #fff;
        border-bottom: 10px solid #f3f3f3;
        height: 120px;
        width: 340px;
      }

      .classification {
        border: solid 2px #ffc300;
        padding: 6px;
        height: 8px;
        width: 40px;
        text-align: center;
        font-size: 10px;
        color: #ffc300;
        /* 圆角 */
        border-radius: 30px;
      }
      .address {
        font-size: 14px;
        color: #b4b4b4;
      }
      .nameAndTel {
        font-size: 10px;
      }
    </style>
  <template>
  	<view class="content">
		<view id="app" style="background: #fff">
		  <view class="top">
		    <view class="title">お届け先</view>
		    <view class="new">新規</view>
		  </view>
		  <!-- <view>
		    <view class="addressDiv" class="list-item" v-for="item in list">
		      <p class="classification">{{item.classification}}</p>
		  
		      <view>
		        <p class="address">{{item.address}}</p>
		      </view>
		      <view>
		        <span class="nameAndTel">{{item.name}}</span>
		      </view>
		      <view>
		        <span class="nameAndTel">{{item.tel}}</span>
		      </view>
		      <!-- <hr style="width: 1000px; height: 20px" /> -->
		    </view>
		  </view> -->
		</view>
  	</view>
  </template>
