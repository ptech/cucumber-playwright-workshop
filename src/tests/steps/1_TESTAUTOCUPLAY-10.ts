import { When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks";

When('the user clears the {string} field', async function (field) {
    await page.getByRole("form").getByPlaceholder(field).clear();
    await expect(page.getByRole("form").getByPlaceholder(field)).toBeEmpty();
    await page.getByRole("form").click();
});