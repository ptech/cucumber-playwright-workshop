import { Page, expect } from "@playwright/test";

export default class Utils {

    constructor(private page: Page) { }

    async fillInput(field: string, text: string): Promise<void> {
        await this.page.getByRole("form").getByPlaceholder(field).fill(text);
        await expect(this.page.getByRole("form").getByPlaceholder(field))
            .toHaveValue(text);
    }
}