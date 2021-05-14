import { html, css } from "../utils";

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = html`
      <div id="container" part="container">
        <div class="icons">
          <a href="https://www.facebook.com/block0space" target="_blank"
            ><img src="assets/imgs/fb.png"
          /></a>
          <a href="https://www.instagram.com/block0space/" target="_blank"
            ><img src="assets/imgs/insta.png"
          /></a>
          <a href="https://twitter.com/block0space" target="_blank"
            ><img src="assets/imgs/twitter.png"
          /></a>
          <a href="https://vm.tiktok.com/ZMexL6cqY/" target="_blank"
            ><img src="assets/imgs/tiktok.png"
          /></a>
        </div>
        <div class="text">END OF BLOCK ZERO</div>
        <div class="tm">2021 invi & codercat</div>
      </div>
    `;

    const styleString = css`
      @font-face {
        font-family: AbolitionRegular;
        src: url(assets/fonts/Abolition-Regular.ttf);
      }

      @font-face {
        font-family: Lato;
        src: url(assets/fonts/Lato-Regular.ttf);
      }

      #container {
        height: 155px;
        width: 100vw;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #container img {
        width: 35px;
        height: 35px;
      }

      .icons {
        display: flex;
      }

      .icons * {
        margin: 5px;
      }

      .text {
        font-family: AbolitionRegular;
        font-size: 20px;
        letter-spacing: 9px;
        color: white;
        margin-top: 3px;
      }

      .tm {
        color: #717171;
        font-family: Lato;
        font-size: 12px;
        margin-top: 11px;
      }
    `;

    const style = document.createElement("style");
    style.textContent = styleString;

    this.shadowRoot.append(style, template.content.cloneNode(true));
  }
}
