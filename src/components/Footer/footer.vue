<template>
    <div class="footer">

        <div class="copyright">
            <span class="text">
                Copyright&nbsp;© 2019-现在 挑灯看剑
            </span>
            <span class="a-text">
                    <a target="_blank" href="http://www.miibeian.gov.cn/">
                    京ICP备16048047号-1
                    </a>
            </span>
        </div>
    </div>
</template>

<script >
export default {};
</script>

<style lang="scss">
    .footer{
      width: 100%;
      background: #1D262D;
      color: #869fb2;
      opacity: .95;
        /*上3下5*/
      padding: 3rem 0 5rem;
      .grant {
        text-align: center;
        .grant-item {
          display: inline-block;
          .icon {
            display: inline-block;
            /*通过文字的缩进，隐藏掉文字*/
            text-indent: -999rem;
            margin-right: 1.5rem;
            background: url(https://i.alipayobjects.com/e/201307/jebmKcbrh.png) no-repeat;
            background-size: 466px 447px;
            overflow: hidden;
            }
        }
      }

        .copyright {
          text-align: center;
          margin-top: 1.5rem;
          .text {
            color: #999;
          }
          .a-text {
            display: block;
            color: #999;
            a {
              text-decoration: none;
              border-bottom:none;
              color: #999;
            }
            &:hover {
              text-decoration: none;
            }
          }
        }
      }
</style>
