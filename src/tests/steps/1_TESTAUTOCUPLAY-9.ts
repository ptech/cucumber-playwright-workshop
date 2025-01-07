import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks";
import Utils from "../../utils/utils";

let utils: Utils;

When('the user fills the contact form except the {string} field', async function (emptyField) {
    utils = new Utils(page);

    const fieldsToFill = [
        { label: 'Name', value: 'Test' },
        { label: 'Email', value: 'test@test.test' },
        { label: 'Message', value: 'this is a test message, please ignore' },
    ];
    
    for (const field of fieldsToFill) {
        if (field.label === emptyField) {
            await expect(
                page.getByRole("form").getByPlaceholder(emptyField)
            ).toBeEmpty();
        } else {
            await utils.fillInput(field.label, field.value);
        }
    }
});

When('the user clicks to send the contact form', async function () {
    await page.getByRole("button", { name: "send" }).click();
});

Then('an error message is displayed under the field', async function () {
    await expect(
        page.getByRole("form").getByText("The field is required.")
    ).toBeVisible();
});

