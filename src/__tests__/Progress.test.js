import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import { Progress } from "../Progress";

describe("Progress", () => {
  describe(".percentage", () => {
    it("Should be consistent on set/get", () => {
      let progress = new Progress();

      progress.percentage = 60;
      expect(progress.percentage).toBe(60);
    });
  });
});
