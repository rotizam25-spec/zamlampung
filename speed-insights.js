/**
 * Vercel Speed Insights Integration
 * This script loads and initializes Vercel Speed Insights for performance tracking
 */

// Import and initialize Speed Insights
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
    debug: false, // Set to true for development debugging
});
