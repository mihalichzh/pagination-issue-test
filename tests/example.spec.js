import {expect, test} from "playwright/test";

test('pagination issue example', async ({ page }) => {
  const container = page.locator('[class="documentation-sandbox"]');
  const input = container.locator('[data-ui-name="Pagination.PageInput.Value"]');
  const totalPagesLink = container.locator('[data-ui-name="Pagination.TotalPages"]');

  await page.goto('https://developer.semrush.com/intergalactic/components/pagination/pagination');
  const maxPageNumber = await input.getAttribute('max');

  // set some valid value to input
  await input.fill("123");
  await page.keyboard.press('Enter');

  // click total pages link
  await totalPagesLink.click();

  // check input value is now set to max page number
  await expect(input).toHaveValue(maxPageNumber);
});
