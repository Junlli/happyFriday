<template>
  <div>
    <header class="top-tips">
      <span class="num-tip">第一周</span>
    </header>
    <div>
      <div class="home-logo item-container-style"></div>
      <a href="/item" class="start"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang='scss'>
  .top-tips {
    width: 152.34px;
    height: 344.54px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 537px;
    top: -65px;

    .num-tip {
      position: absolute;
      left: 22.49px;
      bottom: 48.56px;
      font-size: 28.125px;
      width: 117.19px;
      height: 32.81px;
      text-align: center;
      color: #a57c50;
    }
  }

  .home-logo {
    background-image: url(https://cangdu.org/happyfri/static/img/1-2.png);
    background-size: 616.41px 100%;
  }

  .item-container-style {
    width: 616.41px;
    height: 544.29px;
    position: absolute;
    top: 192.1875px;
    left: 46.875px;
  }

  .start {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAABUCAMAAADH7EegAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEUUExURUxpcf///f/////////++v/++//++2Q3JPffnP/ljP/55f/+/P/10/7zzWk6I24/Im5AJoVdRp9+Z/rIFGQ3JP/ljP/zyuS0E8use5VxW/7mnve6CPnJEHNCIWQ3JKMeMbliFfe8CPjDCPi/CPjCCPnIDvnIDPnGCfCeAP/ljGw9I4FOL6JnO4RQK////8RuEW08I5wdL/a0B5AbK/i/GfnKF/7xyPrOPOOZEsSPC/rSUD0LEf3ssvnFLfvYZdF7HfrNJHdHKPzeeYYaJ/3onlQPGOmsDpZjD14SG4tXHdelEdKaDq89KmEzDqUpLmwUH3gXI++9EEkVEtmLFqhzDrtUJIZcQclrH5NfMn9KE5hxT66JXIS0JyQAAAAbdFJOUwDIO1IMFyiABMT6deOGVI/JNZ6/8H7D4sXd9PsX0fEAAAhESURBVGje7ZqLUuJIFIaz13GcGUd3Zme3KkAgJN53MVwEFERAg4ZruAwy+/7vsed0d0hC0knrYi1UzW+VhLabfPw5Od2noyR910u0Q/Uz1S9U5BibNw7VgfwV9CMTHiPzJvEyVkoKjD+5IsQRvDv/g6itBBUI33lEgHm8v/7+9jX15QcRvQft7u7iy/sv77y4Ptaffz95Vd39LabLy1182b0Evf/gwfXRvjLsSU2QFoylLwQX3Q2h/eXk5KZ+dJgA6YdqRqbKaKstshbfJ7SlLEhbq10ibK1Wu6tdXn5xzfVZ2ypn1SMdz3KkZtlJli3aGlpOdoUCARAv0VigvTupXb4LpX1bj/LIMTajshZNoI+g+8VisV4vl69uWq2Tu7sa0hIBLsTPh2Uo+Giz2jOcXZf7ajaSFnDDaT89x9nnxuxqi+8KUdqrcNoWh5brmtuird1ZIOfR1kgkAG1Y3H5a170ff4U0X+wXAfe2jLQ3LcjKNQeX0LaiaH3fPyHg0Tr6FIul21tKS80lvDUaCDcrtDt7bz6C/ni2s/I6nIUGAlv249YYbOvmz99QB4z2TTNJZL2Ss3GjMlkdaBluC2OB8WJCaN3c/PPt29evX8/2D5D2TZLJeo2YxXu/Ou73+66zdr8/tXx9Si6tg0tEYK8I7RnoQJL2mLPJU0vENbMaoa7KfMz4RnUe2qO229IZj4b3fdv9ZJ3Q3jo3GvKeICqGwc0V0KK1Z83mviTtO9amrFVnEyGuTa8j1LdDvV6MFKW3bFHHQ8Mo5NxzASzBJRPEEhdZCewVhQXapiQ1l7RdkeibDgt89ezQUf22osyXLdN7eDsDWNO5iiUiSLkEl/K2CCvClh1rm0lJSrq0K87qYVE8BZ+4Atqgs4nDfkFRGk6L3R8ailKRrcexxT4ZWRNkhmDuAi/+Iqzl8jfH2jDa6Ps6jjZs1H0B8djd0Lkn7NPr8fAxT/uUSrpaLLq4FBhfAbZePz+jsGG0MXe6OamAZoA2IEegBnilzPHIDI6qQjq4hw69JBws7ER3DF93lpfNYcEwGuryKmb8uIQUja3Xb88d2CCtWMZMgz8Dk7VM0O4GZ9T0fjiEOFWM0RAObLsP1g4wYtPwFQa2ZxTBJYlsKYCv394+NRlsgFYwq3baSMtaqg9w4gZn1BSj1I2U6bgNFwV7mPARRs4dRdY2LO9SzjqFBVoGu0orun4itBXWsqQNzyHeuK5C9lLmeWA1u49orumd04os72IyYyo5tMkgrfB8RWllH234qG563gPO2ZyEensIITRbQAj3x5jIjJk7KlPUad69LUEAww/zuvTkwPppxVemXtoso+WNMgfwZ/NogqFegF9KYQRqtwsYIoal+eY0mnkd0bePp8lkiLc8Z4NzmpdWo7Tc62HBxR8cJqrwMuuRgDA8oZx2qxIGm1iBJbQh3oqv+V1aaKG03FFTSGA9SA4QwPMcetsDzRqNBsmDxsRdmSCajnUaWfNqOp3kDsNprfDVq8dZ2exQ4VyqzNibBdLOpuTYDEZ6B/48gy+ItGZuMqmYZp72scD0hum7inT+zEA1kVXpHKerEbTRzlrX90QPJP4e2JsRyafk2AqO6sOfJ3Rp0/Cv8NRcJeJcJDASh1qWS+tZ4Yeuw6wHg4rFn+cdPTKD9QVkWMVM6PhSYZ+j00/W5IjaWi/Rs8sylzZuhWs9GEqkzIBHFq4L7ISJL3l5dY05FZg/ObRxzkKkxdKuRrqKYdtLHOKtCGvcMaQur3K+zCMHchG+49B6vpsWXXFhJuo5PlbwGzR412Mxgnupqy0wgckyOuxVQ2D+5NAK16km3mVk6Y19MJPiacNHdZGv3cGwnYTRxu+rcfJtYEeG9227eNKZ00LzLbeWM+FCGDjl9kw5Sxa3bKU5QFqB+ZNDG+8scx9jUZk7fSgtf5SNcYMpGXwkC3PWp43DBHYsI2lD9rpWvM6TYmXitFDaCI9MOuGij4SW9SHDBObPKNp4Z+UqBqFiO33YOiFin3dKotVI2wlCy/o4C824HYkIWoE4Mvt4nt6yhdJGjKpe02Ku/Wgj7SS7QhuzMuHTCjhrLoi1jWWLt3YIc9YaO5mgMMVkMmd7JWxY7F4Pl1bI2euRQbKtJlI7ZOUulmJKb05SNA41Hug8xobF7hDxaAVqh+p4PCKzgdvHrR3CdtC74zFZXmpzqGt0UqU5myW+K8SvCXn5Nt7ZxfV9mxTkqtsnsnaYkopGmRzp+nySOArMDgJ7bxxagb3X7oicbq56+kTWDuYCB0ycKA7QaoEnEYE75j/UDhXInYOG5u0TXTvAlDWYqI5rSDv3zWXx+7xitUN4HKmznulvsbu4TRMY5axeK9B/6RrJYKzPyFiuzyOcPYysHWKf1tj2M/fCbU88VvGLsT4WHgvsoEfVDmt6fiMQj5FPMz0tL64d1vvcISM2il87rPU5WEw8ijkrUju81DX9FZ6wcTLYup6DvbDP82qHqkgcZV4Uj5kX9WGr6XDaXH49T3PXez3yx4tQ2vTxcX7d/+0hHLNcZ48ryVDaTgVw83kobIgyeUcva8nw+mQF+jgtx8fHOQ5tDnA3To10OO1jOj3ZNNZKLs2hTaZBuY0SEqVTYbSnqU56EwU2htBepC42EXfhWuulBdzUYtN4H5Mp11ofLcQC6GKDhECnSQ4t2Hu6Ybq4SPJpN1zfaV+TtrlVtE/bA9sE2r+2hvYJIuF8S3CbT0CbOjs/f/pr8/V0fn4KtKkzONgCPZ2mJOkzzG7Ns41XE2dhSdpPbY8kae/z1sDuS9LOx22B/byH/y38cTvc3T+g/zB+sPdm87W3I0n/Aip/TsiVOmPFAAAAAElFTkSuQmCC);
    background-size: 100% 100%;
    display: block;
    width: 203.91px;
    height: 98.44px;
    position: absolute;
    top: 773.454px;
    left: 50%;
    margin-left: -112.5px;
  }
</style>
