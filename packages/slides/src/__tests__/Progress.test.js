import { Progress } from "../Progress";
import { whenDefined } from "my-custom-elements-loader";

beforeAll(async done => {
    await whenDefined(Progress.is);
    done();
}, 500);

describe("Progress", () => {
  describe(".percentage", () => {
    it("Should be consistent on set/get", () => {
      let progress = new Progress();

      progress.percentage = 60;
      expect(progress.percentage).toBe(60);
    });
  });
});
