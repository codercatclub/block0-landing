import { html, css } from "../utils";

export default class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = html`
      <div id="title-container" part="container">
        <a href="/">
          <h1 id="title">BLOCK ZERO</h1>
        </a>
        <nav id="nav">
          <a href="projects.html">projects</a>
          <div class="nav-div">|</div>
          <a href="/about/">about us</a>
          <div class="nav-div">|</div>
          <a href="/news/">news</a>
          <div class="nav-div">|</div>
          <a href="contacts.html">contacts</a>
        </nav>
      </div>
    `;

    const tab = window.location.pathname.split('/').pop();

    const styleString = css`
      @font-face {
        font-family: AbolitionRegular;
        src: url(assets/fonts/Abolition-Regular.ttf);
      }

      @font-face {
        font-family: Lato;
        src: url(assets/fonts/Lato-Regular.ttf);
      }

      @font-face {
        font-family: LatoBold;
        src: url(assets/fonts/Lato-Bold.ttf);
      }

      h1 {
        font-family: AbolitionRegular;
        font-size: 48px;
        letter-spacing: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        text-align: center;
      }

      #title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .equal {
        font-family: AbolitionRegular;
        font-size: 120px;
        margin-top: 30px;
      }

      nav {
        display: flex;
        margin-top: 40px;
      }

      nav a[href="<tab>"] {
        text-decoration: underline;
      }

      .nav-div {
        margin: 0 10px 0 10px;
        line-height: 1.6;
      }

      a {
        text-decoration: none;
        color: black;
        font-family: Lato;
        font-size: 20px;
        letter-spacing: 5px;
      }

      nav a:nth-child(1) {
        color: #e83731;
      }

      nav a:nth-child(3) {
        color: #e2b422;
      }

      nav a:nth-child(5) {
        color: #008bc5;
      }

      nav a:nth-child(7) {
        color: #3da9a4;
      }
  `;

    const style = document.createElement("style");
    style.textContent = styleString[0].replace("<tab>", tab);

    this.shadowRoot.append(style, template.content.cloneNode(true));
  }
}
