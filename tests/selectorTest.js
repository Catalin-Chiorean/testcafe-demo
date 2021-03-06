import { Selector } from "testcafe";
const { t } = require("testcafe");
const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
  .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
  await t
    .typeText(developerName, "Cata")
    .click(osOption)
    .click(submitButton);
});