function refresh_cc_stream_info() {
  var ccsib = document.getElementsByTagName("BODY")[0];
  var ccsis = document.createElement("script");
  ccsis.type = "text/javascript";
  ccsis.src = window.ccsiu;
  ccsib.appendChild(ccsis);
}
function cc_streaminfo_get_callback(ccsiv) {
  for (n in ccsiv)
    if ((ccsie = document.getElementById("cc_stream_info_" + n)))
      ccsie.innerHTML = ccsiv[n];
  window.ccsiu = ccsiv.url;
  if (window.ccsic++ < 60) setTimeout("refresh_cc_stream_info()", 60000);
}
window.ccsic = 0;

   /* Volumen Playe_r */
   function volumen_set {
 var reproductor = document.getElementById("player");
 reproductor.volume = 0.1; } // Volumen al 50%
        