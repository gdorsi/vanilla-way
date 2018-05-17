import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import { Deck } from "../Deck";

describe("Deck", () => {
  describe(".active", () => {
    it("Should return the active slide index", () => {
      let deck = new Deck();
      deck.innerHTML = `<div></div><div></div><div></div><div class="active"></div>`;

      expect(deck.active).toBe(3);
    });

    it("Should set the active slide", () => {
      let deck = new Deck();
      deck.innerHTML = `<div></div><div></div><div></div><div></div>`;

      deck.active = 2;

      let target = deck.querySelectorAll("div")[2];

      expect(target.classList.contains("active")).toBe(true);
    });

    it("Should return -1 there are't active slides", () => {
      let deck = new Deck();
      deck.innerHTML = `<div></div><div></div><div></div><div></div>`;

      expect(deck.active).toBe(-1);
    });

    it("Should set nothing if invalid ipnuts are passed", () => {
      let deck = new Deck();
      deck.innerHTML = `<div></div><div></div><div></div><div></div>`;

      deck.active = 100;

      expect(deck.querySelector(".active")).toBe(null);

      deck.active = null;

      expect(deck.querySelector(".active")).toBe(null);

      deck.active = -10;

      expect(deck.querySelector(".active")).toBe(null);
    });
  });

  describe(".length", () => {
    it("Should return the slides count", () => {
      let deck = new Deck();
      deck.innerHTML = `<div></div><div></div><div></div><div></div>`;

      expect(deck.length).toBe(4);
    });
  });

  describe(".slides", () => {
    it("Should return the slides array", () => {
      let deck = new Deck();
      deck.innerHTML = `<div></div><div></div><div></div><div></div>`;

      expect(Array.isArray(deck.slides)).toBe(true);
      expect(deck.slides.length).toBe(4);
    });
  });
});
