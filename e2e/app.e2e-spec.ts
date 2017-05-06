import { AngularjsdemoPage } from './app.po';

describe('angularjsdemo App', () => {
  let page: AngularjsdemoPage;

  beforeEach(() => {
    page = new AngularjsdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
