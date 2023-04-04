
    it.only('Successfully add new board',()=>{
        let boardId = ''
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
          }).as("getBoardID");

        loginPage.login(email, password)
        loginPage.AddNewBtn.click()
        loginPage.AddBoard.click()
        loginPage.nameInputField.type(board)
        loginPage.nextBtn.click()
        loginPage.ScrumBtn.click()
        loginPage.nextBtn.click()
        loginPage.nextBtn.click()
        loginPage.nextBtn.click()
        loginPage.nextBtn.click()

        cy.wait('@getBoardID').then((int) => {
            boardId = int.response.body.id;
            cy.log(boardId)
              });
        it('Delete board', () => {
            organizationPage.getBoardBtn(boardId)
            .scrollIntoView()
            .should('be.visible')
            .click();

        cy.url().should('include', '/boards/${boardId}');

        organizationPage.getBoardSettingsBtn(boardId).should
        ('be.visible').click();

        cy.url().should('include', '/boards/${boardId}/settings');

        })
    })

