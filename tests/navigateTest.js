const { t } = require("testcafe")

fixture("Navigate Example")
  .page("https://devexpress.github.io/testcafe/example/");

test("Navigate Test", async t => {
  await t
    .navigateTo("http://www.google.com")
});