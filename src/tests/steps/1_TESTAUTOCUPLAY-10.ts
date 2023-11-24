import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { browser, page } from "./1_TESTAUTOCUPLAY-7";

When('the user clears the {string} field', async function (field) {
    await page.getByRole("form").getByPlaceholder(field).clear();
    await expect(page.getByRole("form").getByPlaceholder(field)).toBeEmpty();
    await page.getByRole("form").click();
});