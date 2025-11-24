import { Page } from '@playwright/test';

export class SOWMenu {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async clickParentSOWSidebar() {
    const sowLoc = this.page.locator('span.layout-menuitem-text', { hasText: 'SOW' }).first();
    console.log('SOW text:', await sowLoc.textContent());
    console.log('SOW visible:', await sowLoc.isVisible().catch(() => false));
    if (await sowLoc.isVisible().catch(() => false)) {
      await sowLoc.click();
    } else {
      // Try clicking parent li or anchor
      await this.page.locator('li:has(span.layout-menuitem-text:has-text("SOW"))').click({ force: true });
    }
  }
}
