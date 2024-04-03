<style scoped lang="postcss">
#wrapper {
  @apply sm:w-7/12 lg:w-5/12 mx-5 sm:mx-auto;
}

p {
  line-height: 27px;
}

.caption {
  @apply float-right pr-5;
}
.school-image {
  @apply mb-5 rounded-md;
  clear: both;
}

.pseudo-wrapper {
  @apply block relative;
}

.school-image-wrapper {
  @apply px-4;
}

.school-image-wrapper:before {
  @apply border-gray-400 dark:border-gray-800;
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 60px;
  height: 100px;
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-radius: 15px 0 0 0;
}

.school-image-wrapper:after {
  @apply border-gray-400 dark:border-gray-800;
  content: "";
  position: absolute;
  right: 0;
  bottom: -16px;
  width: 60px;
  height: 30px;
  border-width: 0 1px 1px 0px;
  border-style: solid;
  border-radius: 0 0 15px 0;
}
</style>

<script>
</script>

<div id="wrapper">
  <h1 class="pageTitle">About</h1>
  <p class="mb-3">
    Mijn naam is Simon, ik ben een negentien jarige student, studerend aan de HAN in nijmegen.
  </p>
  <h2>ROC</h2>
  <p>
    Binnen mijn opleiding heb ik veel geleerd. Sinds ik ~16 was begon ik
    techniek leuker te vinden. Uiteindelijk heb ik daarom ook besloten
    een technische opleiding te volgen.
  </p>
  <p>
    Naarmate ik meer met software in aanraking kwam, ben ik het steeds leuker
    gaan vinden. Uiteindelijk is mijn droom dan ook om als software ontwikkelaar
    aan de slag te kunnen... Full stack developer lijkt mij uiteindelijk het
    leukst om te kunnen.
  </p>

  <div class="pseudo-wrapper">
    <figcaption class="mt-5">
      <small class="caption">Afbeelding van het ROC</small>
    </figcaption>
    <div class="school-image-wrapper">
      <img src="../../img/school.jpg" alt="My school" class="school-image" />
    </div>
  </div>

  <h1>HAN</h1>
  <p>
    Op deze school studeer ik momenteel. Tot nu toe heb ik de vakken PHP, Java en C gehad.
    Van deze vakken vind ik C en PHP het leukst. C leer ik nu omdat ik op dit moment bezig ben met Arduino's. 
  </p>

  <div class="pseudo-wrapper">
    <figcaption class="mt-5">
      <small class="caption">Afbeelding van de HAN</small>
    </figcaption>
    <div class="school-image-wrapper">
      <img src="../../img/school2.jpg" alt="My second school" class="school-image" />
    </div>
  </div>

  <h1>Sport</h1>
  <p>
    Naast de passie voor mijn vak, heb ik dat ook voor bepaalde sporten. Vroeger
    heb ik gevoetbald bij R.K.S.V. Brakkenstein. Hier heb ik geleerd om in
    teamverband samen te werken. Hedendaags loop ik hard en fitness ik, als
    vervanger voor het voetballen.
  </p>

  <h1 class="mt-5">Doel</h1>
  <p>
    Voor nu heb ik als doel om een product te maken waar mensen wat aan hebben.
    Daarbij streef ik erna om alles zo perfect mogelijk te maken. Recentelijk
    ben ik bijvoorbeeld bezig geweest met het maken van een FTP client, omdat
    filezilla niet een ideaal interface heeft in mijn ogen.
  </p>
</div>
