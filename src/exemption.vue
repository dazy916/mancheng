<script setup>
name: "exemption"
</script>
<template>
    <div class="about">
        <van-row>
            <van-col span="24">
                <div class="logo"></div>
              
            </van-col>
        </van-row>
        
        <van-divider
            content-position="left"
            :style="{ fontSize: '24px', color: '#fff', borderColor: '#fff', padding: '0 16px',maring:'3em 0' }"
        >免责声明&nbsp;Disclaimers</van-divider>
        <van-row>            
            <!-- <van-col class="font18">鑫悦天地|彭州万达广场</van-col> -->
            <van-col class="font14">●开发商：四川船石湖旅游资源开发有限公司</van-col>
            <van-col class="font14">●项目地址：中国·内江·连界·船石湖大道</van-col>
            <van-col class="font14">●销售热线：0832-8831111</van-col>
        </van-row>
        <van-row class="text-l">
            <van-col span="24">版权声明：</van-col>
            <van-col
                span="24"
                class="text"
            >四川船石湖旅游资源开发有限公司对本系统内包含的图片、文案、视频、应用程序和源代码等内容享有知识产权，受《中华人民共和国著作权法》《计算机软件保护条例》《知识产权保护条例》和相关国际版权条约以及其他知识产权法律法规、条约的保护。</van-col>
            <van-col
                span="24"
                class="text"
            >未经书面同意，任何单位及个人不得以任何方式及理由对本作品进行使用、复制、修改、抄录、传播或与其他产品捆绑使用、销售。凡有上述侵权行为之单位及个人必须立即停止侵权并对其侵权造成的一切不良后果承担全部责任。否则本公司将依据《著作权法》等相关法律、法规追究其经济责任和法律责任。</van-col>*演示内容仅供参考，最终以签约合同为准*
        </van-row>
        <van-divider
            content-position="center"
            :style="{ fontSize: '12px', color: '#fff', borderColor: '#fff', padding: '0 14px' }"
        >技术支持</van-divider>
        <van-image

                    width="160"
                    src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/shuidong/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211018000959.jpg"
                />
    </div>
</template>
<style scoped>
.about {
    height: 100vh;
    padding: 0 1rem 0rem 1rem;
    color: #eac699;
    line-height: 1.6rem;
    font-size: 12px;
}
.logo {
    /* position: fixed; */
    /* width: 76px; */
    height: 90px;
    margin-top: 1rem;
    background-image: url("./assets/image/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.text{
    text-indent: 1.5rem;
}
.text-l{
    text-align: left;
    margin-top: 1rem;
}
</style>