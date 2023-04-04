


class LoginPage {
    get emailInputField (){
        return cy.get("input[type='email']")
    }
    get passwordInputField (){
        return cy.get("input[type='password']")
    }
    get SubmitBtn (){
        return cy.get("button[type='submit']")
    }
    get AddNewBtn (){
        return cy.contains('Add New')
    }
    get AddBoard (){
        return(cy.contains('Add Board'))
    }
    get nameInputField (){
        return cy.get("input[name='name']")
    }
    get nextBtn (){
        return cy.get("button[name='next_btn']")
    }
    get OkBtn (){
        return(cy.contains('OK'))
    }
    get ScrumBtn (){
        return cy.get("span[name='type_scrum']")
    }
  
    login (email, password) {
        cy.visit('/login');
        this.emailInputField.type(email)
        this.passwordInputField.type(password)
        this.SubmitBtn.click()
    };
}
export const loginPage = new LoginPage
