import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks";
import Utils from "../../utils/utils";

let utils: Utils;

When('the user fills the contact form', async function () {
    utils = new Utils(page);
    await utils.fillInput("Name", "Test");
    await utils.fillInput("Email", "test@test.test");
    await utils.fillInput("Message", "this is a test message, please ignore");
});

When('the user clears the name field', async function () {
    await page.getByRole("form").getByPlaceholder("Name").clear();
    await expect(page.getByRole("form").getByPlaceholder("Name")).toBeEmpty();
    await page.getByRole("form").click();
});

When('the user clicks to send the contact form', async function () {
    await page.locator("input[type='submit']").click();
});

Then('an error message is displayed under the send button', async function () {
    await expect(page.getByRole("form")
        .getByText("One or more fields have an error. Please check and try again.")
    ).toBeVisible();
});

