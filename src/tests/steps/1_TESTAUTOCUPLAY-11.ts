import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks";


When('the user clicks on send button when the service is down', async function () {
    const requestUrl = "https://www.present-technologies.com/wp-json/contact-form-7/v1/contact-forms/9/feedback";
    await page.route(requestUrl, async (route) => {
        await route.fulfill({
            status: 500
        })
    })
    await page.locator("input[type='submit']").dblclick();
});

Then('a service error message is displayed', async function () {
    await expect(page.getByText("Something went wrong. Please try again later")).toBeVisible();
});