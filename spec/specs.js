describe('Pizza', function() {
  it("allows user to select a size of a a pizza from a dropdown, and get a base price", function() {
    var testPizza = new Pizza("Large", 1, 1);
    expect(testPizza.Cost).to.equal(20);
  });


});
