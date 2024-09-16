import { expect, test } from "@playwright/test";

test("Filter by character name", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("button", { name: "Pesquisar" })).toBeVisible();
  await page.getByRole("button", { name: "Pesquisar" }).click();
  await expect(page.getByPlaceholder("Nome do personagem")).toBeVisible();
  await page.getByPlaceholder("Nome do personagem").click();
  await page.getByPlaceholder("Nome do personagem").fill("Spider");
  await expect(
    page.getByRole("button", { name: "Aplicar filtros" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Aplicar filtros" }).click();
  await expect(
    page.getByRole("link", { name: "Spider-dok Spider-dok" }),
  ).toBeVisible();
});
