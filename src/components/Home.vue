<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/bibi_brand.png" alt="Fancy Bibi" class="bibi unselectable">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle unselectable" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Change Language / 言語を変更する">{{ $t('navbar.lang') }} <Icon icon="iconoir:language" :inline="true" /></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item unselectable" @click="changeLang('en')">{{ $t('navbar.en') }}</a></li>
                <li><a class="dropdown-item unselectable" @click="changeLang('jp')">{{ $t('navbar.jp') }}</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link unselectable" href="#gallery-sect">{{ $t('navbar.gall') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link unselectable" href="#credits-sect">{{ $t('navbar.cred') }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="title-sect">
      <div id="greetings-container">
        <div id="greetings-inner-wrapper">
          <div class="credits-container">
            <div class="credits-column"></div>
            <div class="credits-column" id="greetings">
              <p class="rainbow_text_animated unselectable">{{ $t('greeting1') }}</p>
              <p class="rainbow_text_animated unselectable">{{ $t('greeting2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="message-sect">
      <div class="mt-5 p-5 text-white rounded-4 message-container unselectable">
        <div class="sect-title shine">{{ $t('msg-title') }}</div>
        <p>{{ $t('msg-desc') }} <span style="opacity: 33%;">{{ $t('msg-desc2') }}</span></p>
      </div>
    </section>
    <hr>
    <section id="gallery-sect">
      <div class="sect-title shine unselectable">{{ $t('title.gall') }}</div>
      <Carousel/>
    </section>

    <section id="credits-sect" data-aos="fade-in" class="unselectable">
      <div class="sect-title">{{ $t('title.cred') }}</div>
      <div class="credits-container">
        <div class="credits-column credit-title">{{ $t('title.subs') }}</div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/mk7eam">Requiem <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>Lightmask</li>
            <li><a target='_blank' href="https://twitter.com/LightningKL">Kinney <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li><a target='_blank' href="https://twitter.com/Umiboshi_">Umiboshi <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>Michael Rowland</li>
            <li>HeroicID</li>
            <li>Mjay10k</li>
            <li><a target='_blank' href="https://twitter.com/Meggal_SA">MegGal <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>피네</li>
            <li>Ser</li>
            <li>Curseesus</li>
            <li>MARUHI</li>
            <li>Kihezo<span style="opacity: 33%">#2402 <Icon icon="akar-icons:discord-fill" :inline="true" /></span></li>
            <li>Kordiark Lindworm</li>
            <li>Rena Moon</li>
            <li><a target='_blank' href="https://twitter.com/fsltha">fsltha <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>Mayt_s</li>
            <li>Douge</li>
            <li><a target='_blank' href="https://twitter.com/SkimmyMut">Swimpz <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column">
          <ul>
            <li>ReisenInaba</li>
            <li><a target='_blank' href="https://twitter.com/itsyoboiBrent">itsyoboibrent <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>Shin_Gero</li>
            <li>AtomicPandaSloth</li>
            <li>YouMyon</li>
            <li>Savage_Strudel</li>
            <li>Drake_Grazer<span style="opacity: 33%">#3481 <Icon icon="akar-icons:discord-fill" :inline="true" /></span></li>
            <li>Rikako / ChunkyButter<span style="opacity: 33%">#9593 <Icon icon="akar-icons:discord-fill" :inline="true" /></span></li>
            <li>Deln</li>
            <li>Rai</li>
            <li><a target='_blank' href="https://twitter.com/BigOnMars">BigOnMars <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>Raido</li>
            <li>Lime</li>
            <li><a target='_blank' href="https://twitter.com/Silvers35054612">Silverstar <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>mattscout007</li>
            <li><a target='_blank' href="https://twitter.com/ExiaAsh">AshExia <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
            <li>Partyman1099</li>
            <li>Loy-kun</li>
          </ul>
        </div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title">{{ $t('title.org') }}</div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/BigOnMars">BigOnMars <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column"></div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title">{{ $t('title.primary-tl') }}</div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/SlaveInUtopia">エデンの奴隷 <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column"></div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title">{{ $t('title.added-tl') }}</div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/rephirairis">Rephira <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/ExiaAsh">AshExia <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title"><a target="_blank" href="https://github.com/Epikkyu/towa-2022-bday">{{ $t('title.site') }} <Icon icon="akar-icons:github-fill" :inline="true" /></a></div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/Epikkyu">Epikkyu <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column"></div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title"><a target="_blank" href="https://www.pixiv.net/en/artworks/85385848">{{ $t('title.cover') }} <Icon icon="simple-icons:pixiv" :inline="true" /></a></div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/MrSnakesnake628">Mr.Lime <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column"></div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title">{{ $t('title.bibi') }}</div>
        <div class="credits-column">
          <ul>
            <li><a target="_blank" href="https://twitter.com/fittyyen">FittyYen <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column"></div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title"><a target="_blank" href="https://twitter.com/MrSnakesnake628/status/1556300491847794697">{{ $t('title.header') }} <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/MrSnakesnake628">Mr.Lime <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column"></div>
      </div>
      <div class="credits-container">
        <div class="credits-column credit-title">{{ $t('title.other') }}</div>
        <div class="credits-column">
          <ul>
            <li><a target='_blank' href="https://twitter.com/BigOnMars">BigOnMars <Icon icon="akar-icons:twitter-fill" :inline="true" /></a></li>
          </ul>
        </div>
        <div class="credits-column"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import { Icon } from '@iconify/vue';
import {setDocTitle} from "../i18n";
import { Tooltip } from "bootstrap";

export default {
  name: "Home",
  components: {
    Carousel,
    Icon
  },
  methods: {
    changeLang(locale) {
      this.$i18n.locale = locale
      localStorage.TowaLocale = locale

      setDocTitle(this.$i18n.locale = localStorage.TowaLocale)
    }
  },

  mounted() {
    if(localStorage.TowaLocale != null) this.$i18n.locale = localStorage.TowaLocale
    setDocTitle(this.$i18n.locale = localStorage.TowaLocale)

    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
  },
};
</script>

<style scoped>
@import "../effects/shiny.css";
@import "../effects/niji.css";

.unselectable {
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.bibi {
  height: 60px;
}

.bibi:hover {
  filter: brightness(125%) !important;
  transition-duration: 0.5s !important;
}

#home {
  background-color: #d4d4d4;
  margin: 0;
  min-height: 100vh;
  height: 100%;
}

#title-sect {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sect-title {
  text-align: center;
  font-family: 'Murecho', sans-serif;
  font-weight: 900;
  font-size: 3rem;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 0 rgba(255, 255, 102, 0.71);
  margin-bottom: -3vh;
}

.message-container {
  font-family: 'M PLUS 1p', sans-serif;
  margin-left: 1.5vw;
  background: #222222;
  width: 96vw;
  font-size: 1.5rem;
  text-align: justify;
}

#greetings-container {
  width: 100%;
  height: 350px;
  justify-content: center;
  background-image: url('../assets/FZkWma2aQAEHCtw.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}


#greetings {
  margin-top: 100px;
  color: white;
  font-family: 'Mochiy Pop One', sans-serif;
  text-align: center;
  font-size: 2rem;
  text-shadow: 1px 1px 1px rgba(255,255,255,0.25);
}

#greetings p {
  margin-top: 0;
}

@media (min-width: 481px) {
  .nav-item {
    font-weight: 400;
    font-size: 1.2rem;
  }

  #greetings {
    font-size: 3em;
    padding-right: 0;
  }
}

.nav-item {
  font-family: 'M PLUS 1p', sans-serif;
}

#credits-sect {
  background: #36333E url("../assets/towa-yeah.png") no-repeat bottom right;
  color: white;
  padding: 20px;
  font-family: 'M PLUS 1p', sans-serif;
  box-shadow: 0 -2px 0 0 #FF99D9;
}

#credits-sect .sect-title{
  text-shadow: none;
  margin-top: -5vh;
  margin-bottom: 2vh;
}

.credit-title {
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
  text-align: center;
  font-size: 1.5rem;
  margin-top: -7px;
}

#credits-sect ul {
  list-style-type: none;
  color: #d4d4d4;
  font-weight: 400;
  padding: 0;
  margin: 0;
  text-align: center;
}

#credits-sect .sect-title {
  color: white;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-weight: 900;
}

section {
  margin-top: 5vh;
}

section#title-sect {
  margin-top: 0;
}

.credits-container {
  display: flex;
  margin-bottom: 5vh;
}

.credits-column {
  flex: 1;
}

@media (max-width: 768px) {
  .credits-container {
    flex-direction: column;
  }

  #greetings-container {
    background-position: center;
  }
}

@media (min-width: 769px) {
  #greetings-container {
    background-position: center;
  }

  #greetings {
    margin-right: 7vw;
  }
}

#home {
  background-image: url("../assets/bg/vintage-wallpaper.png");
}

#credits-sect a {
  color: inherit;
  text-decoration-line: none;
}

nav {
  box-shadow: 0 2px 0 0 #EDFF36, 2px 0 0 0 #212529, -2px 0 0 0 #212529, 0 -2px 0 0 #212529;
}

#message-sect p {
  padding-bottom: 5vh;
}

#message-sect {
  padding-top: -1vh;
}
</style>