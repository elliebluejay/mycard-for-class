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
      description: { type: String },
      image: { type: String },
      link: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Insert Title Here";
    this.description = "Insert Description Here";
    this.image = "https://ist.psu.edu/current-students/career-solutions/internship-program";
    this.link = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

h1 {
        font-size: 36px;
        font-family: Tahoma, sans-serif;
      }

      h2 {
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
        border: 4px dashed purple;
        border-radius: 8px;
        padding: 16px;
        width: 300px;
        max-width: 400px;
        background-color: lightgrey;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3); 
        overflow: auto;
      }

    h2 { font-family: Tahoma, sans-serif; font-size: 20px; color: purple; margin: 0 0 8px 0; }
    p { font-family: Tahoma, sans-serif; font-size: 16px; color: black; margin: 0 0 16px 0; }

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
        max-width: 300px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 16px;
        width: 64%;
        border: 2px solid white; 
        margin: 0 auto 16px auto;
        display: block;
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


  render() {
    return html`
         <div class="card">
          <h2>${this.title}</h2>
          <p>${this.description}</p>
            
            <img class="card-image"
              src="${this.image}" 
              alt="${this.title}">
            <a href="${this.link}">
              <button>Details</button>
            </a>
          </div>
    `;
  }

}


globalThis.customElements.define(MyCard.tag, MyCard);
