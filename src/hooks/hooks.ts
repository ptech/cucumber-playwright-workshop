import { After, Before } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

Before(async function ({ pickle }) {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    await context.tracing.start({
        name: pickle.name,
        title: pickle.name,
        sources: true,
        screenshots: true,
        snapshots: true
    })
    page = await context.newPage();
});

After(async function ({ pickle }) {
    await context.tracing.stop({ path: `${pickle.name}_${pickle.id}.zip` });
    if (context) await context.close();
    if (browser) await browser.close();
});