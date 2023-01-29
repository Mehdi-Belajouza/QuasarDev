const List = [
  "macbook-16",
  "macbook-15",
  "macbook-13",
  "macbook-11",
  "ipad-2",
  "ipad-mini",
  "iphone-xr",
  "iphone-x",
  "iphone-6+",
  "iphone-se2",
  "iphone-8",
  "iphone-7",
  "iphone-6",
  "iphone-5",
  "iphone-4",
  "iphone-3",
  "samsung-s10",
  "samsung-note9"
]

describe("Test of Response", () => {
  List.forEach((port) => {
    it(`[${port}]: show all page`, () => {
      cy.viewport(port);
      cy.visit("http://localhost:9000");

      cy.get("#counter_A").should("exist");
      cy.get("#counter_B").should("exist");
      cy.get('[data-cy="total"]').should("exist");
      cy.get(`[data-cy="btn-to-local"]`).should("exist");
      cy.get(`[data-cy="btn-from-local"]`).should("exist");
    });
  });
})
