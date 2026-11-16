import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const GAScript = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
      />

      <Script id="google-analytics">
        {`
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${siteMetadata.analytics.googleAnalyticsId}');
        `}
      </Script>
    </>
  )
}

export default GAScript

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (action, category, label, value) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
