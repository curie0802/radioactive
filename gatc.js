function gatc() {
  let gatc_configUrl = document.getElementById("config").value;
  let gatc_originalTag = document.getElementById("originaltag").value;

  let gatc_UAIDRegex = /UA-\d/g;

  let gatc_arrUAID = gatc_originalTag.match(analytics_UAIDRegex) || 0;
  console.log(
gatc_arrUAID
  );

let analytics_strSlot = analytics_arrAdSlot.toString().replaceAll('slot="', "");
  console.log(gatc_strWidth, gatc_strHeight, gatc_strSlot);

  let gatc_resultingTag = `
  <script type="text/javascript">
  window.pg=window.pg||[];pg.acq=pg.acq||[];
  pg.acq.push(function() {
  //Google analytics code
  pg.loadJS("https://www.googletagmanager.com/gtag/js?id='${gatc_arrUAID}'1");
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gatc_arrUAID}');
  });
  </script>

  <script src="${gatc_configUrl}" async></script>
  <script type="text/javascript" src="//cdn.pubguru.com/fb.js"></script>
  `;

  // set the tag
  document.getElementById("resulttag").value = gatc_resultingTag.trim();
}
