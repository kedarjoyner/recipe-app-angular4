import { RecipeAppAngular4Page } from './app.po';

describe('recipe-app-angular4 App', () => {
  let page: RecipeAppAngular4Page;

  beforeEach(() => {
    page = new RecipeAppAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
