describe("Parsing JSON", () => {
  it("should parse JSON limited to 5 items", () => {
    let totalPrice = 0;
    cy.request(
        {
            method: "GET",
            url: "https://fakestoreapi.com/products",
            qs: {limit: 5,},
        }
    ).then((response) => {
      console.log("get", response.body);
      expect(response.status).to.eq(200);
      expect(response.body[4]).to.have.property("id", 5);
      expect(response.body[4]).to.have.property("category", "jewelery"); 
      expect(response.body[4]).to.have.property("price",695);
      expect(response.body[4].rating).to.have.property("count", 400);

      response.body.forEach((item) => {
        totalPrice = totalPrice + item.price;
        console.log(totalPrice);
      });
      expect(totalPrice).to.eq(899.23);
    });
  });
});
