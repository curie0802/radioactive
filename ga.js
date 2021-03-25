function analytics() {
  let analytics_configUrl = document.getElementById("config").value;
  let analytics_originalTag = document.getElementById("originaltag").value;

  let analytics_UAIDRegex = /UA-\d/g;

  let analytics_arrUAID = analytics_originalTag.match(analytics_UAIDRegex) || 0;
  console.log(
    analytics_arrUAID
  );

  let analytics_strSlot = analytics_arrAdSlot.toString().replaceAll('slot="', "");
  console.log(analytics_strWidth, analytics_strHeight, analytics_strSlot);

  let analytics_resultingTag = `
<script>
window.pg=window.pg||[];pg.acq=pg.acq||[]; // build consent queue
pg.acq.push(function() {
// Global site tag (gtag.js)
pg.loadJS("https://www.googletagmanager.com/gtag/js?id='${analytics_arrUAID}'");
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analytics_arrUAID}');
});
</script>
    `;

  // set the tag
  document.getElementById("resulttag").value = analytics_resultingTag.trim();
}
