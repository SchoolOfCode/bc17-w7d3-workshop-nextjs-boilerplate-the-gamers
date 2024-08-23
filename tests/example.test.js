// @ts-check
const { test, expect } = require("@playwright/test");

// Check user journey 1
test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fireplace Palace/);
});

test("has URL", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("http://localhost:3000/");
});

// Check user journey 2
test("should navigate to the correct page when button is clicked", async ({
  page,
}) => {
  // Go to the initial page
  await page.goto("http://localhost:3000/");

  // Click menu button
  await page.click("#menu-button");

  // Click the button (Assuming the button has an ID of 'my-button')
  await page.click("#founders");

  // Expect the URL to be the expected one after the click
  await expect(page).toHaveURL("http://localhost:3000/founders");
});

//Check user journey 3
