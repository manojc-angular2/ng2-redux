import { Ng2ReduxPage } from './app.po';

describe('ng2-redux App', () => {
  let page: Ng2ReduxPage;

  beforeEach(() => {
    page = new Ng2ReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
