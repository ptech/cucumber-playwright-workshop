import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { page } from "../../hooks/hooks";

let newPage: Page;

setDefaultTimeout(100 * 1000);

Given('the user is on the Present Technologies website', async function () {
    await page.goto("https://www.present-technologies.com/");
    await expect(page).toHaveTitle("Present Technologies");
    await page.locator("#cookie_action_close_header").click();
});

When('the user clicks on the subscribe newsletter button', async function () {
    const [newTab] = await Promise.all([
        page.context().waitForEvent("page"),
        await page.getByText("Subscribe our Newsletter").click()
    ]);
    newPage = newTab;
});

Then('the form opens in a new tab', async function () {
    await newPage.waitForLoadState();
    await expect(
        newPage.getByText("Present Technologies Newsletter")
    ).toBeVisible();
});