import { V4AngularPage } from './app.po';

describe('v4-angular App', () => {
  let page: V4AngularPage;

  beforeEach(() => {
    page = new V4AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
