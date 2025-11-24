// pages/dashboardPage.ts
import { expect, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertOnDashboard() {
    await expect(this.page).toHaveURL(/.*\/dashboard/);
  }

  async clickPendingSOWCard() {
    // Directly locate the clickable card container by text
    const clientReviewCard = this.page.locator("//div[contains(@class, 'cursor-pointer')][.//p[text()='SOW Pending Client Review']]");
    const pendingApprovalCard = this.page.locator("//div[contains(@class, 'cursor-pointer')][.//p[text()='SOW Pending Approval']]");

    // Wait for at least one of the target cards to appear in the DOM
    await this.page.waitForSelector(
      "//div[contains(@class, 'cursor-pointer')][.//p[text()='SOW Pending Client Review'] or .//p[text()='SOW Pending Approval']]"
    );

    if (await clientReviewCard.isVisible().catch(() => false)) {
      await clientReviewCard.click();
    } else {
      await pendingApprovalCard.click();
    }
  }
}