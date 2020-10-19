<template>
  <header class="header">
    <div class="strip blue"><span class="strict-letter">P</span></div>
    <div class="strip green">
      <span class="strict-letter">R</span><span class="soft-letter">S</span>
    </div>
    <div class="strip red">
      <span class="strict-letter">O</span><span class="soft-letter">h</span>
    </div>
    <div class="strip orange">
      <span class="strict-letter">F</span
      ><span class="soft-letter" style="color: white">o</span>
    </div>
    <div class="strip yellow">
      <span class="strict-letter">Y</span><span class="soft-letter">p</span>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.header {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .strip {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vh;
    color: white;

    span {
      display: block;
    }

    .strict-letter {
      @extend .rubik-fonts;
      font-size: 70px;
      font-weight: 400;
      margin-bottom: 20px;
      border-bottom: 4px white solid;
    }

    .soft-letter {
      font-family: "Kaushan Script", cursive;
      font-size: 60px;
      color: $footerColor;
    }

    @media (min-width: 320px) and (max-width: 640px) {
      height: $heightHeader / 2;

      .strict-letter {
        font-size: 40px;
      }

      .soft-letter {
        font-size: 30px;
      }
    }
  }

  .red {
    background-color: $redLine;

    &:hover {
      @extend .shake;
    }
  }

  .orange {
    background-color: $footerColor;
  }

  .yellow {
    background-color: rgb(231, 76, 255);

    &:hover {
      @extend .shake;
    }
  }

  .green {
    background-color: rgb(0, 161, 0);

    &:hover {
      @extend .shake;
    }
  }

  .blue {
    background-color: rgb(20, 20, 255);

    &:hover {
      @extend .shake;
    }
  }
}
</style>