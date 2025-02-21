import { test as base } from 'playwright-bdd';
import * as Pages from './pages';

const { RegisterUserPage, LoginUserPage } = Pages;

const createTestFunction = (PageClass) => async ({page}, use) =>{
    await use(new PageClass(page));
}

export const test = base.extend({
    registerUserPage: createTestFunction(RegisterUserPage),
    loginUserPage: createTestFunction(LoginUserPage)
    // si desep agregar otra pagina solo agrego la coma ( , ) y lo demás es igual
});