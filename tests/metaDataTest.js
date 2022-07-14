const { t } = require("testcafe")

fixture("First Fixture")
  .meta('version', '1')
  .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
  await t
    .typeText("#developer-name", "Cata")
    .click("#macos")
    .click("#submit-button");
})
  .meta('env', 'production');

test("Second Test", async t => {
  await t
    .typeText("#developer-name", "Cata")
    .click("#macos")
    .click("#submit-button");
});