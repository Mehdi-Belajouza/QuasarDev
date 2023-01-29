describe("E2E SPEC", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000");
  });

  it("works on one counter", () => {
    const max = Math.floor(Math.random() * 19 + 1);
    for (let i = 0; i < max; i++) {
      cy.get("#counter_A").find('[data-cy="btn-up"]').click();
    }
    cy.get("#counter_A").find('[data-cy="input"]').should("have.value", max);
  });

  it("works sum of two counters is correct", () => {
    const letters = ["A", "B"];
    letters.forEach((letter) => {
      cy.get(`#counter_${letter}`).find('[data-cy="btn-up"]').click();
      cy.get(`#counter_${letter}`)
        .find('[data-cy="input"]')
        .should("have.value", 1);
    });
    cy.get('[data-cy="total"]').should("have.text", 2);
  });

  it("should show an error", () => {
    cy.get("#counter_A").find('[data-cy="input"]').clear().type("AAA").blur();
    cy.get("#counter_A").should("contain", "Input must be a number");
  });
});
