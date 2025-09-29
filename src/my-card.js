import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */


export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      /* description: { type: String }, */
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.title = "Insert Title Here";
    /* this.description = "Insert Description Here"; */
    this.image = "https://ist.psu.edu/current-students/career-solutions/internship-program";
    this.link = "#";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        box-sizing: border-box;
      }
      :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg, lightblue);
      }

      h1 {
        margin-left: 16px;
        font-size: 36px;
        font-family: Tahoma, sans-serif;
      }

      h2 {
        margin: 16px;
        font-size: 18px;
        font-family: Tahoma, sans-serif;
      }

      .control-wrapper {
        margin-bottom: 24px;
      }

      #cardlist {
        display: flex;
        flex-wrap: wrap; 
        gap: 24px; 
      }

      .card.fancy {
        background-color: pink;
      }

      .card {
        margin: 16px;
        border: 4px dashed purple;
        border-radius: 8px;
        padding: 16px;
        width: 300px;
        max-width: 400px;
        background-color: lightgrey;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3); 
        overflow: auto;
      }


    
    .card:hover {
      background-color: #e0c3fc; 
      transform: scale(1.02);
      cursor: pointer;
    }

    
    :host([fancy]) .card {
      background-color: var(--my-card-fancy-bg, lightblue);
    }

    
    :host([fancy]) .card:hover {
      background-color: #ffb3b3; 
      transform: scale(1.02);
      cursor: pointer;
    }


    h2 { 
      font-family: Tahoma, sans-serif; 
      font-size: 20px; 
      color: purple; 
      margin: 0 0 8px 0; 
    }
    p { 
      font-family: Tahoma, sans-serif; 
      font-size: 16px; 
      color: black; 
      margin: 0 0 16px 0; }

      button {
        font-family: Tahoma, sans-serif;
        font-size: 16px;
        padding: 12px;
        border-color: purple;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.5s ease;
      }

      button:focus {
        outline: 2px solid purple;
        outline-offset: 2px;
      }

      button:hover {
        background-color: #BB97C9;
      }

      .card-image {
        width: 100%;             
        height: 150px;           
        object-fit: cover; 
        border-radius: 4px;
        margin-bottom: 16px;
        border: 2px solid white; 
        margin: 0 auto 16px auto;
        display: block;
      }

      details summary {
      text-align: left;
      font-size: 16px;
      padding: 8px 0;
      cursor: pointer;
    }

      details[open] summary {
      font-weight: bold;
    }

      details div {
      text-align: left;
      padding: 8px;
      height: 70px;
      overflow: auto;
    }

      desc {
      padding: 8px;
      overflow: auto;
      }

      .details {
        padding: 8px;
        color: purple;
        border-radius: 8px;
        font-size: 18px;
        display: inline-block;
      }

      @media (max-width: 500px) {
        .card {
          width: 90%;
          height: auto; 
        }
      }
    `;
  }

  

  penChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }


  render() {
    return html`
         <div class="card">
          <h2>${this.title}</h2>
          <!-- <p>${this.description}</p> -->
            
            <slot name="description">
          <p></p>
        </slot>
            <img class="card-image"
              src="${this.image}" 
              alt="${this.title}">
            <a href="${this.link}">
              <button>Details</button>
            </a>
            <br>
            <br>
            <div>
              <details ?open="${this.fancy}" @toggle="${this.openChanged}">
              <summary>Description</summary>
              <div class="desc">
                <slot>Here is my text.</slot>
              </div>
              </details>
            </div>
          </div>
    `;
  }

  openChanged(event) {
    console.log(event.target);
    this.fancy = event.target.open;
  }

}


globalThis.customElements.define(MyCard.tag, MyCard);
