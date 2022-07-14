const { t } = require("testcafe")

fixture("Test Speed Fixture")
  .page("https://devexpress.github.io/testcafe/example/");

test("Set Test Speed Test", async t => {
  await t
    .setTestSpeed(0.1)
    .typeText("#developer-name", "Cata")
    .click("#macos")
    .click("#submit-button");
});