import { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const testProjects = {
  chromium: {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome']
    }
  },
  webkit: {
    name: 'webkit',
    use: {
      ...devices['Desktop Safari']
    }
  },
  chromeMobile: {
    name: 'Mobile Chrome',
    use: {
      ...devices['Pixel 5']
    }
  },
  safariMobile: {
    name: 'Mobile Safari',
    use: {
      ...devices['iPhone 13']
    }
  }
}

const config: PlaywrightTestConfig = {
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  projects: [
    testProjects.chromium,
    testProjects.webkit,
    testProjects.chromeMobile,
    testProjects.safariMobile
  ],
  testDir: 'e2e',
  timeout: 60000,
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    headless: true,
    trace: 'on-first-retry'
  },
  reporter: 'html',
  retries: 0,
  webServer: {
    command: 'pnpm run start',
    port: 3000,
    reuseExistingServer: false
  },
  workers: undefined
}

export default config
