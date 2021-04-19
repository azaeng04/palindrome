describe("Palindrome", () => {
  it("should be a palindrome", () => {
    const word = "pop";
    const expectedResult = `Yes! ${word} reversed is ${word}`;

    cy.visit("/");
    cy.get("#originalWord").type(word);
    cy.get("#button1").click();

    cy.get("#palindromeResult").then((result) => {
      expect(result).to.have.text(expectedResult);
    });
  });
});
