<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Srujan Pant</strong>, an indie game designer and developer.<br/>
        I'm currently working on my game, Last Day Lockdown. I love designing puzzles, prototyping mechanics, and crafting narratives.
      </div>

      <div style="margin-top: 20px;">I've professionally worked on <router-link to="/game-projects">these projects</router-link> and personally worked on <router-link to="/other-projects">these</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently seeking opportunities</strong> as a game designer and developer. You can reach me at <a href="mailto:srujanpant@gmail.com">srujanpant@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Srujan" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>