import { Then, When } from "@cucumber/cucumber";
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

When('the user clicks on send button when the service is down', async function () {
    const requestUrl = "https://www.present-technologies.com/wp-json/contact-form-7/v1/contact-forms/9/feedback";
    const interceptBody = `{
        "contact_form_id": 9,
        "status": "error",
        "message": "There was an error trying to send your message. Please try again later.",
        "posted_data_hash": "",
        "into": "#wpcf7-f9-p11-o1"
    }`;
    await page.route(requestUrl, async (route) => {
        await route.fulfill({
            body: interceptBody
        });
    });
    await page.getByRole("button", { name: "send" }).click();
});

Then('a service error message is displayed', async function () {
    const errorMessage = "There was an error trying to send your message. Please try again later.";
    await expect(
        page.locator("div.wpcf7-response-output").getByText(errorMessage)
    ).toBeVisible();
});