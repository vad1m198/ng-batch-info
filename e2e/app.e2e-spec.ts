import { NgSimpleAppPage } from './app.po';

describe('ng-simple-app App', () => {
  let page: NgSimpleAppPage;

  beforeEach(() => {
    page = new NgSimpleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
