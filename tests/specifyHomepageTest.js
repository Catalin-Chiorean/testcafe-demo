const { t } = require("testcafe")

fixture("First Fixture")
  .page("http://www.google.com");

test.page("https://devexpress.github.io/testcafe/example/")
  ("First Test", async t => {
    await t
      .typeText("#developer-name", "Cata")
      .click("#macos")
      .click("#submit-button");
  });