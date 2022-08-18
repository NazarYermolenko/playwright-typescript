import { test } from "@playwright/test"

test("Simple test", async ({ page }) => {
    await page.goto("https://google.com")
    await page.waitForTimeout(1000)
})