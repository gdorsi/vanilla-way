import { Slide } from "../Slide";
import { whenDefined } from "my-custom-elements-loader";

beforeAll(async done => {
    await whenDefined(Slide.is);
    done();
}, 500);

describe("Slide", () => {
  describe(".active", () => {
    it("Should return the last active fragment index", () => {
      let slide = new Slide();
      slide.innerHTML = `<div><div class="active fragment"></div></div><div class="fragment active"></div><div class="fragment"></div>`;

      expect(slide.active).toBe(1);
    });

    it("Should set the active fragments", () => {
      let slide = new Slide();
      slide.innerHTML = `<div><div class="fragment"></div></div><div class="fragment"></div><div class="fragment"></div>`;

      slide.active = 1;

      expect(slide.querySelectorAll(".fragment.active").length).toBe(2);
    });

    it("Should return -1 there are't active fragments", () => {
      let slide = new Slide();
      slide.innerHTML = `<div></div><div class="fragment"></div><div></div><div></div>`;

      expect(slide.active).toBe(-1);
    });
  });

  describe(".fragments", () => {
    it("Should return the fragments array", () => {
      let slide = new Slide();
      slide.innerHTML = `<div><div class="fragment"></div></div><div class="fragment"></div><div class="fragment"></div>`;

      expect(Array.isArray(slide.fragments)).toBe(true);
      expect(slide.fragments.length).toBe(3);
    });
  });
});
