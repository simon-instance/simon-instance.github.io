<style scoped lang="postcss">
  .content-container {
    @apply px-5 py-4 flex items-center;
    border-radius: 25px 25px 25px;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  body.dark * .wrench-container {
    background: radial-gradient(#334466, #213151, #111525, #000, #000);
  }
  .wrench-container {
    background: transparent;
  }

  body.dark * .alternative {
    background: #121212;
    box-shadow: none; 
  }

  .alternative {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0em 0em .5em 0em rgba(150, 80, 255, .3);
  }

  img {
    transform: scale(.7);
    z-index: 0;
  }

  body.dark * .html-tag {
    filter: invert(0);
  }
  .html-tag {
    filter: invert(1);
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

  body.dark * .purple-sphere {
    position: absolute;
    border-radius: 25px 25px 25px;

    background: radial-gradient(#5500aa,  #330066, #131313,  #121212);
    z-index: -1;
    opacity: .7;
  }

  .purple-sphere {
    position: absolute;
    border-radius: 25px 25px 25px;

    background: radial-gradient(#aa77dd,  #eeccff, #fff,  #fff);
    z-index: -1;
    opacity: .7;
  }
</style>

<div class="container">
  <div class="mx-0">
    <div class="content-container flex-col lg:flex-row my-12">
      <div id="what-i-offer" class="lg:flex-2" style="z-index: 2;">
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
      <div class="flex-1 flex justify-center items-center pt-6 lg:pt-0">
        <div class="mx-10 my-auto wrench-container">
          <img class="html-tag" src="../img/wrench-tag.png" alt="tag">
        </div>
      </div>
    </div>
    <div class="content-container flex-col md:flex-row alternative mb-12 justify-center">
      <div class="inline-block">
        <div class="purple-sphere sphere-1"></div>
        <div class="purple-sphere sphere-2"></div>
      </div>
      <div class="hidden md:block flex-1 ml-12 mr-20 my-auto">
        <img src="../img/ethereum.png" alt="tag">
      </div>
      <div id="my-experience" class="flex-3">
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
      <div class="block md:hidden flex-1 mx-14 sm:mx-40 my-auto">
        <img src="../img/ethereum.png" alt="tag">
      </div>
    </div>
  </div>
</div>
