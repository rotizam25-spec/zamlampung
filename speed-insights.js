/**
 * Vercel Speed Insights Integration
 * This script loads and initializes Vercel Speed Insights for performance tracking
 * For static HTML/vanilla JS projects
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights with configuration
injectSpeedInsights({
    debug: false, // Set to true for development debugging
    framework: 'vanilla',
});
