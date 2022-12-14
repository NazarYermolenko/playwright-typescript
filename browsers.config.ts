import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: "debug",
            use: {
                browserName: "chromium",
                headless: false,
                viewport: { width: 1280, height: 720 },
                ignoreHTTPSErrors: true,
                screenshot: "on"
            }
        },
        {
            name: 'chromium',
            use: {
                browserName: "chromium",
                headless: true,
                viewport: { width: 1280, height: 720 },
                ignoreHTTPSErrors: true,
                screenshot: 'only-on-failure',
            },
        },
        {
            name: 'firefox',
            use: {
                browserName: "firefox",
                headless: true,
                viewport: { width: 1280, height: 720 },
                ignoreHTTPSErrors: true,
                screenshot: 'only-on-failure',
            },
        },
        {
            name: 'webkit',
            use: {
                browserName: "webkit",
                headless: true,
                viewport: { width: 1280, height: 720 },
                ignoreHTTPSErrors: true,
                screenshot: 'only-on-failure',
            },
        },
    ]
};
export default config;

