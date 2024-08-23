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

// Check user journey 3
test.describe("Booking Page Tests", () => {
  test("Navigate to 'Booking' page when clicked in menu.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    await page.click("#menu-button");
    await page.click("#booking");

    await expect(page).toHaveURL("http://localhost:3000/booking");
  });

  test("Navigate to 'Booking' page when clicked on home page.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.click("#booking");

    await expect(page).toHaveURL("http://localhost:3000/booking");
  });

  test("Submit a  blank form to view error message.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/booking");

    await page.fill(`input[name="fullname"]`, "First Last");
    await page.fill(`input[name="postcode"]`, "ABC1 2DEF");
    // await page.fill(`input[name="address"]`, ``);
    await page.fill(`input[name="city"]`, "London");
    await page.fill(`input[name="phone"]`, "0712345 67890");
    await page.fill(`input[name="email"]`, "test@email.com");

    await page.click('#submitButton');

    await expect(page.locator("#errorMessage")).toBeVisible();
  });

  test("Ensure the error message is not present on successful form submission.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/booking");

    await page.fill(`input[name="fullname"]`, "First Last");
    await page.fill(`input[name="postcode"]`, "ABC1 2DEF");
    await page.fill(`input[name="address"]`, "123 Street Road");
    await page.fill(`input[name="city"]`, "London");
    await page.fill(`input[name="phone"]`, "0712345 67890");
    await page.fill(`input[name="email"]`, "test@email.com");

    await page.click('#submitButton');

    await expect(page.locator("#errorMessage")).not.toBeVisible();
    await expect(page.locator("#submitButton")).toHaveText("Submitting...")
    await page.waitForTimeout(3000);
    await expect(page.locator("#submitButton")).toHaveText("Submitted ✅")
  });

  test("Ensure the error message appears on error, then hides on successful submission.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/booking");

    await page.click('#submitButton');
    await expect(page.locator("#errorMessage")).toBeVisible();

    await page.fill(`input[name="fullname"]`, "First Last");
    await page.fill(`input[name="postcode"]`, "ABC1 2DEF");
    await page.fill(`input[name="address"]`, "123 Street Road");
    await page.fill(`input[name="city"]`, "London");
    await page.fill(`input[name="phone"]`, "0712345 67890");
    await page.fill(`input[name="email"]`, "test@email.com");

    await page.click('#submitButton');

    await expect(page.locator("#errorMessage")).not.toBeVisible();
    await expect(page.locator("#submitButton")).toHaveText("Submitting...")
    await page.waitForTimeout(3000);
    await expect(page.locator("#submitButton")).toHaveText("Submitted ✅")
  });
});

//Check user journey 3
