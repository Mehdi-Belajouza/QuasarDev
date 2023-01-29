describe("Test for Counters", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000");
  });
  it("reset counters",
    () => {
    const max = Math.floor(Math.random() * 19 + 1);
    for (let i = 0; i < max; i++) {
      cy.get("#counter_A").find('[data-cy="btn-up"]').click();
      cy.get("#counter_B").find('[data-cy="btn-up"]').click();
    }
    cy.get("#counter_A").find('[data-cy="btn-res"]').click();
    cy.get("#counter_A").find('[data-cy="input"]').should("have.value", 0);
    cy.get("#counter_B").find('[data-cy="btn-res"]').click();
    cy.get("#counter_B").find('[data-cy="input"]').should("have.value", 0);
  });

  it("disable counters",
    () => {
    //for A
    cy.get("#counter_A").find('[data-cy="btn-disable"]').click();
    cy.get("#counter_A").find('[data-cy="input"]').should("be.disabled");
    cy.get("#counter_A").find('[data-cy="btn-dn"]').should("be.disabled");
    cy.get("#counter_A").find('[data-cy="btn-up"]').should("be.disabled");

    //for B
    cy.get("#counter_B").find('[data-cy="btn-disable"]').click();
    cy.get("#counter_B").find('[data-cy="input"]').should("be.disabled");
    cy.get("#counter_B").find('[data-cy="btn-dn"]').should("be.disabled");
    cy.get("#counter_B").find('[data-cy="btn-up"]').should("be.disabled");
  });

  it("tooltip for A"),
    () => {
      //button increment
      const max = Math.floor(Math.random() * 19 + 1);
      for (let i = 0; i < max; i++) {
        cy.get("#counter_A").find('[data-cy="btn-up"]').click();
      }
      cy.get("#counter_A").find('[data-cy="btn-up"]').trigger('mouseover').trigger("mouseenter").wait(1000);
      cy.get("body").find('[data-cy="btn-tool-up"]').should('contain', max);
      //button decrement
      const max2 = Math.floor(Math.random() * 19 + 1);
      for (let i = 0; i < max2; i++) {
        cy.get("#counter_A").find('[data-cy="btn-dn"]').click();
      }
      cy.get("#counter_A").find('[data-cy="btn-dn"]').trigger('mouseover').trigger("mouseenter").wait(1000);
      cy.get("body").find('[data-cy="btn-tool-dn"]').should('contain', max);
    };
  it("tooltip for B"),
    () => {
      //button increment
      const max = Math.floor(Math.random() * 19 + 1);
      for (let i = 0; i < max; i++) {
        cy.get("#counter_B").find('[data-cy="btn-up"]').click();
      }
      cy.get("#counter_B").find('[data-cy="btn-up"]').trigger('mouseover').trigger("mouseenter").wait(1000);
      cy.get("body").find('[data-cy="btn-tool-up"]').should('contain', max);
      //button decrement
      const max2 = Math.floor(Math.random() * 19 + 1);
      for (let i = 0; i < max2; i++) {
        cy.get("#counter_B").find('[data-cy="btn-dn"]').click();
      }
      cy.get("#counter_B").find('[data-cy="btn-dn"]').trigger('mouseover').trigger("mouseenter").wait(1000);
      cy.get("body").find('[data-cy="btn-tool-dn"]').should('contain', max);
    };
});
