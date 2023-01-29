describe("Test saving and synchronising from local storage",()=>{
  beforeEach(() => {
    cy.visit("http://localhost:9000");
  });

  it("save to local storage",() => {
    const val=Math.floor(Math.random() * 19 + 1);
    for (let index = 0; index < val; index++) {
      cy.get("#counter_A").find('[data-cy="btn-up"]').click();
      cy.get("#counter_B").find('[data-cy="btn-dn"]').click();
    }
    cy.get("#counter_A").find(`[data-cy="btn-to-local"]`).click().should(() => {
      expect(localStorage.getItem('counterA')).to.eq(String(val));
    });
    cy.get("#counter_B").find(`[data-cy="btn-to-local"]`).click().should(() => {
      expect(localStorage.getItem('counterB')).to.eq(String(-val));
    });
  });

  it("sync from local storage" ,() =>{

    const val=Math.floor(Math.random() * 19 + 1);
    for (let index = 0; index < val; index++) {
      cy.get("#counter_A").find('[data-cy="btn-up"]').click();
      cy.get("#counter_B").find('[data-cy="btn-dn"]').click();
    }
    cy.get("#counter_A").find(`[data-cy="btn-to-local"]`).click();
    cy.get("#counter_B").find(`[data-cy="btn-to-local"]`).click();
    cy.get("#counter_A").find(`[data-cy="btn-res"]`).click();
    cy.get("#counter_B").find(`[data-cy="btn-res"]`).click();
    cy.get("#counter_A").find(`[data-cy="btn-from-local"]`).click();
    cy.get("#counter_B").find(`[data-cy="btn-from-local"]`).click();

    cy.get("#counter_A").find('[data-cy="input"]').should("have.value", val);
    cy.get("#counter_B").find('[data-cy="input"]').should("have.value", -val);
  })
});
