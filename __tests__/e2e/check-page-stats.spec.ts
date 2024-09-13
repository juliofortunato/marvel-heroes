import { expect, test } from "@playwright/test";

test("Check page stats", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("button", { name: "Estatísticas" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Estatísticas" }).click();
  await expect(
    page.getByRole("heading", { name: "Estatísticas" }),
  ).toBeVisible();
  await expect(page.getByTestId("stats-chart")).toBeVisible();
  await expect(page.getByRole("button", { name: "Close" })).toBeVisible();
  await page.getByRole("button", { name: "Close" }).click();
});
