import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
// @customElement('my-counter')
export class MyCounter extends LitElement {
    static styles = css`
    :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
    }
`;

    /**
     * The name to say "Hello" to.
     */
    @property()
    name = 'World';

    /**
     * The number of times the button has been clicked.
     */
    @property({ type: Number })
    count = 0;

    render() {console.log("XXXXX")
        return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
    }

    private _onClick() {
        this.count++;
    }

    foo(): string {
        return 'foo';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-counter': MyCounter;
    }
}
