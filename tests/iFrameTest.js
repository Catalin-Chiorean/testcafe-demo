import {Selector} from 'testcafe';

const iFrameName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("iFrame")
    .page("http://the-internet.herokuapp.com/iframe");

test("iFrame Tes", async t => {
    await t
        .switchToIframe(iFrameName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, 'Hello from Cata!')
        .expect(textArea.innerText).contains("Cata")
        .switchToMainWindow();
});