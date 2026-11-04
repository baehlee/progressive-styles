/* Footer contact override — paste into Lofty CMS → Settings → Tools → Scripts,
   below the Util.addStyle(...) line.
   Lofty forces one agent's phone + email into the footer; swap in the group's.
   hosted.css hides any footer phone/email that isn't these two, so if this
   script ever fails the agent's details stay hidden rather than showing. */
(function () {
  var PHONE_HREF = 'tel:+19522995704', PHONE_TEXT = '(952) 299-5704';
  var EMAIL = 'info@progressiverealestate.com';
  function set(a, href, text) {
    if (a.getAttribute('href') !== href) a.setAttribute('href', href);
    if (a.textContent !== text) a.textContent = text;
  }
  function fix() {
    var d = document.querySelector('footer.md-footer .detail');
    if (!d) return;
    var t = d.querySelector('a[href^="tel:"]');
    if (t) set(t, PHONE_HREF, PHONE_TEXT);
    var m = d.querySelector('a[href^="mailto:"]');
    if (m) {
      set(m, 'mailto:' + EMAIL, EMAIL);
      var lbl = 'Email ' + EMAIL + '. Opens your email app.';
      if (m.getAttribute('aria-label') !== lbl) m.setAttribute('aria-label', lbl);
    }
  }
  function start() {
    fix();
    // Lofty may re-render the footer after load; re-apply for 15s.
    var mo = new MutationObserver(fix);
    mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['href'] });
    setTimeout(function () { mo.disconnect(); }, 15000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
