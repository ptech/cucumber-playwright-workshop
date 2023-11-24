import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { browser, page } from "./1_TESTAUTOCUPLAY-7";

When('the user fills the contact form', async function () {
    await page.getByRole("form").getByPlaceholder("Name").fill("Test");
    await expect(page.getByRole("form").getByPlaceholder("Name")).toHaveValue("Test");
    await page.getByRole("form").getByPlaceholder("Email").fill("test@test.test");
    await expect(page.getByRole("form").getByPlaceholder("Email")).toHaveValue("test@test.test");
    await page.getByRole("form").getByPlaceholder("Message").fill("this is a test message, please ignore");
    await expect(page.getByRole("form").getByPlaceholder("Message")).toHaveValue("this is a test message, please ignore");
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
    await expect(page.getByRole("form").getByText("One or more fields have an error. Please check and try again.")).toBeVisible();
    browser.close();
});

