import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import { Slide } from "../Slide";
import { Progress } from "../Progress";
import { Deck } from "../Deck";
import { presentation, fromKeyboard } from "../presentation";
import observe from "callbag-observe";

describe("fromKeyboard", () => {
  [
    ["Enter", 1],
    ["ArrowRight", 1],
    ["ArrowUp", 1],
    ["ArrowDown", -1],
    ["ArrowLeft", -1]
  ].map(([key, modifier]) => {
    it(`Should transform ${key} keydown in ${modifier}`, () => {
      let el = document.createElement("div");
      let spy = jasmine.createSpy();
      observe(spy)(fromKeyboard(el));
      el.dispatchEvent(getKeyDownEvent(key));
      expect(spy).toHaveBeenCalledWith(modifier);
    });
  });
});

describe("presentation", () => {
  it("Should set the active slide to location hash number", () => {
    let el = example();
    location.hash = 2;

    presentation(el);

    location.hash = "";

    expect(el.querySelector("x-deck").active).toBe(2);
  });

  it("Should hendle keyboard events", () => {
    let el = example();
    presentation(el);

    document.dispatchEvent(getKeyDownEvent("Enter"));
    document.dispatchEvent(getKeyDownEvent("Enter"));
    document.dispatchEvent(getKeyDownEvent("Enter"));

    expect(el.querySelector("x-deck").active).toBe(1);
    expect(el.querySelector("x-slide").active).toBe(1);
  });
});

let example = () => {
  let div = document.createElement("div");
  let deck = new Deck();

  let slide = new Slide();
  deck.appendChild(slide);

  slide.innerHTML = `
    <h2>State management</h2>
    <p class="fragment">Putting state in closures may duplicate the source of truths</p>
    <p class="fragment">Let's try to use the DOM as state holder</p>
  `;

  for (let i = 0; i < 5; i++) {
    deck.appendChild(new Slide());
  }

  div.appendChild(deck);
  div.appendChild(new Progress());

  return div;
};

let getKeyDownEvent = key => new KeyboardEvent("keydown", { key });
