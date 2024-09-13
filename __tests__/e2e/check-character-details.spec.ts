import { expect, test } from "@playwright/test";

test("Check character details", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("link", { name: "A-Bomb (HAS) A-Bomb (HAS)" }),
  ).toBeVisible();
  await expect(page.getByLabel("Ir para a próxima página")).toBeVisible();
  await page.getByLabel("Ir para a próxima página").click();
  await expect(page.getByLabel("Ir para a página anterior")).toBeVisible();
  await page.getByLabel("Ir para a página anterior").click();
  await expect(
    page.getByRole("link", { name: "A-Bomb (HAS) A-Bomb (HAS)" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "A-Bomb (HAS) A-Bomb (HAS)" }).click();
  await expect(page.getByRole("img", { name: "A-Bomb (HAS)" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "A-Bomb (HAS)" }),
  ).toBeVisible();
  await expect(page.getByText("4Comics")).toBeVisible();
  await expect(page.getByText("0Events")).toBeVisible();
  await expect(page.getByText("2Series")).toBeVisible();
  await expect(page.getByText("7Stories")).toBeVisible();
  await expect(page.getByText("Rick Jones has been Hulk's")).toBeVisible();
  await expect(page.getByRole("button", { name: "Comics" })).toBeVisible();
  await page.getByRole("button", { name: "Comics" }).click();
  await expect(
    page.getByText("FREE COMIC BOOK DAY 2013 1 (2013) #"),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Voltar" })).toBeVisible();
  await page.getByRole("button", { name: "Voltar" }).click();
});
