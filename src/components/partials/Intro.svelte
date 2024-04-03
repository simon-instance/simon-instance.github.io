<style scoped lang="postcss">
  .content-container {
    padding: 25px 35px;
    border-radius: 25px 25px 25px;
    display: flex;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .wrench-container {
    background: radial-gradient(#334466, #213151, #111525, #000, #000);
  }

  .alternative {
    background: #121212;
  }

  img {
    transform: scale(.7);
    z-index: 0;
  }

  .sphere-1 {
    width: 700px;
    height: 700px;

    left: -450px;
    top: -350px;
  }

  .sphere-2 {
    width: 700px;
    height: 700px;

    left: 250px;
    bottom: -450px;
  }

  .purple-sphere {
    position: absolute;
    border-radius: 25px 25px 25px;

    background: radial-gradient(#5500aa,  #330066, #131313,  #121212);
    z-index: -1;
    opacity: .7;
  }
</style>

<div class="container mx-auto">
  <div>
    <div class="content-container my-12">
      <div class="flex-2" style="z-index: 2;">
        <h1>What I offer</h1>
        <p>
          As a freelance developer, 
          I help individuals and businesses build custom websites that meet their specific needs.
          My expertise lies in various areas, including front-end development, back-end development, and user interface design.
          By creating intuitive interfaces, users will find what they need quickly and easily, leading to a more positive experience and higher engagement.
          <br/>
          <br/>
          Next to that, I'm an experienced database engineer which has experience with various types of databases. 
          This allows me to create websites that are both visually appealing and functionally efficient. I achieve this by ensuring smooth data flow between the user and the database, via a well-designed front-end.
        </p>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <div class="mx-10 my-auto wrench-container">
          <img src="../img/wrench-tag.png" alt="tag">
        </div>
      </div>
    </div>
    <div class="content-container alternative mb-12">
      <div class="inline-block">
        <div class="purple-sphere sphere-1"></div>
        <div class="purple-sphere sphere-2"></div>
        <div class="purple-sphere sphere-3"></div>
      </div>
      <div class="flex-1 ml-12 mr-20 my-auto">
        <img src="../img/ethereum.png" alt="tag">
      </div>
      <div class="flex-3">
        <h1>My experience</h1>
        <p>
          I'm Simon, a 22-year-old developer currently studying at HAN in Nijmegen. <br/>
          Last year marked my first step into freelancing. 
          During that time, I collaborated with a digital artist to develop a website for their business. For them, it was necessary to create a platform where their customers could keep track of their purchases related to the artist.
          <br/>
          <br/>
          Creating this website fulfilled my need to bring my expertise to work. 
          Additionally this experience has taught me new techniques as a software developer, with which I am ready to take on the next step as a freelancer.
          <br/>
          Are you ready to take on this journey with me? Reach out and lets turn your ideas into reality.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="root">
  <!-- <div class="first me">
    <img class="img" src="../img/me.jpeg" alt="photo_of_me" />
  </div> -->
</div>
