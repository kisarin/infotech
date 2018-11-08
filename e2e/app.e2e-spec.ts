import { TestInfotechPage } from './app.po';

describe('test-infotech App', function() {
  let page: TestInfotechPage;

  beforeEach(() => {
    page = new TestInfotechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
