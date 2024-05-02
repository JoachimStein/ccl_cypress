import login from "../Pages/login";
const login_Page = new login();

describe("Login Page Test", function(){
    it("Login Page Test", function(){
        login_Page.loginPage()
    })
})