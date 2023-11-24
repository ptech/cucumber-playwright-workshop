import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { browser, page } from "./1_TESTAUTOCUPLAY-7";


When('the user clicks on send button when the service is down', async function () {
    await page.route("https://www.present-technologies.com/wp-json/contact-form-7/v1/contact-forms/9/feedback", async (route) => {
        await route.fulfill({
            status: 500
        })
    })
    await page.locator("input[type='submit']").dblclick();
});

Then('a service error message is displayed', async function () {
    await expect(page.getByText("Something went wrong. Please try again later")).toBeVisible();
    browser.close();
});