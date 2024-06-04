import Script from 'next/script';

const AnalyticScripts = () => (
  <>
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
      crossOrigin="anonymous"
    />
    <Script
      data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER}.goatcounter.com/count`}
      async
      src="//gc.zgo.at/count.js"
    />
  </>
);

export default AnalyticScripts;
