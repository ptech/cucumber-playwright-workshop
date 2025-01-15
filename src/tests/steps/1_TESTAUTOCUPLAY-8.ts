import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks";

Given('the user clicks on the learn more button in the join us section', async function () {
    await page.getByText("Learn More!").click();
});

When('the user clicks on the {string} job opening', async function (job) {
    let jobUpper = job.toUpperCase();
    await page.getByTitle(jobUpper).click();
});

Then('the user is redirected to the {string} job details', async function (job) {
    await expect(page)
        .toHaveURL(/.*\/quality-assurance-qa-automation-engineer-202303\/$/);
    await expect(page).toHaveTitle(job + " | Present Technologies");
});

Then('the following sections are displayed:', async function (dataTable) {
    const sections = dataTable.rows();
    for (let section of sections) {
        await expect(page.getByText(section)).toBeVisible();
    }
});

Then('an apply online form is visible', async function () {
    await expect(page.getByText("Apply Online")).toBeVisible();
});