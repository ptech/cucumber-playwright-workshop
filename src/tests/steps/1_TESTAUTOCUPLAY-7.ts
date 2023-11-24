import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import {Browser, Page, chromium, expect} from "@playwright/test"

export let browser: Browser
export let page:Page
export let newPage: Page

setDefaultTimeout(100 * 1000 );

Given('the user is on the Present Technologies website', async function () {
    browser = await chromium.launch({headless: false})
    page = await browser.newPage();
    await page.goto("https://www.present-technologies.com/")
    await expect(page).toHaveTitle("Present Technologies")
    await page.locator("#cookie_action_close_header").click();
});

When('the user clicks on the subscribe newsletter button', async function () {
    const [newTab] = await Promise.all([
        page.context().waitForEvent("page"),
        await page.getByText("Subscribe our Newsletter").click()
    ])
    newPage = newTab
});

Then('the form opens in a new tab', async function () {
    await newPage.waitForLoadState();
    await expect(newPage.getByText("Present Technologies Newsletter")).toBeVisible();
    await browser.close();
});