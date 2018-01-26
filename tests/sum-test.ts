import { Helper } from '../src/app/services/helper';
import { AppActions } from '../src/app/app.actions';
import { sum } from '../sum';
it('adds 1 + 2 to equal 3 in TScript', ()=> {
  //const sum = require('../sum.ts');
  expect(sum(1, 2)).toBe(3);
});
it('test action const', ()=> {
expect(AppActions.RESET).toBe('[App] Reset App');
});
it('test action const', ()=> {
const a = 	new Helper();
expect(a.isTest()).toBe("dd");
});
