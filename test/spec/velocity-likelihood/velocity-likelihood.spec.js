describe("Velocity range of velocities", function() {
  it("removes smallest and biggest", function() {
    expect(velocityRange([8,2,1,3,7,6,4,5])).toEqual([2,7]);
  });
  it("with NaN removes NaNs", function() {
    expect(velocityRange([8,2,1,"NaN",7,6,4,5])).toEqual([2,7]);
  });
  it("with undefined removes undefined", function() {
    expect(velocityRange([8,2,1,undefined,7,6,4,5])).toEqual([2,7]);
  });
  it("with 2 velocitys is the two velocitys", function() {
    expect(velocityRange([1,2])).toEqual([1,2]);
  });
  it("with 1 velocity is the velocity as range", function() {
    expect(velocityRange([1])).toEqual([1,1]);
  });
  it("with no velocity is the velocity range [0,0]", function() {
    expect(velocityRange([])).toEqual([0,0]);
  });
});