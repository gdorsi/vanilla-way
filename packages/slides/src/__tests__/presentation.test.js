import { Slide } from "../Slide";
import { Progress } from "../Progress";
import { Deck } from "../Deck";
import { presentation } from "../presentation";
import { whenDefined } from "my-custom-elements-loader";

beforeAll(async done => {
  await whenDefined(Slide.is);
  await whenDefined(Progress.is);
  await whenDefined(Deck.is);
  done();
}, 500);

describe("presentation", () => {
  it("Should set the active slide to location hash number", () => {
    let el = example();
    location.hash = 2;

    presentation(el);

    location.hash = "";

    expect(el.querySelector("x-deck").active).toBe(2);
  });

  it("Should listen for keyboard events", () => {
    let el = example();
    presentation(el);

    document.dispatchEvent(getKeyDownEvent("Enter"));
    document.dispatchEvent(getKeyDownEvent("ArrowRight"));
    document.dispatchEvent(getKeyDownEvent("ArrowUp"));

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
