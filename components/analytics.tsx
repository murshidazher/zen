import Script from "next/script";

import { siteConfig } from "@/config/site";

const Analytics = () => {
  return (
    <>
      <Script id="google-analytics">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${siteConfig.googleAnalytics}', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script src="https://www.google-analytics.com/analytics.js" />
    </>
  );
};

export default Analytics;
