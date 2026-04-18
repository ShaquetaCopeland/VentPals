/**
 * session.js – VentPals child session helper
 *
 * Handles:
 *  1. Tracking the last visited child page (ventpals_last_url)
 *  2. Injecting a visible "Log Out" button on every child page
 *  3. Logout function that clears the session but preserves user data
 *
 * Scoped to child sessions only (ventpals_logged_in === 'true').
 * Does NOT interfere with adult/parent flows.
 */
(function () {
  'use strict';

  var LOGGED_IN_KEY = 'ventpals_logged_in';
  var LAST_URL_KEY  = 'ventpals_last_url';

  var isLoggedIn = localStorage.getItem(LOGGED_IN_KEY) === 'true';
  if (!isLoggedIn) return; // Not an active child session — do nothing

  /* ── 1. Resolve root path (handles pages inside subdirectories) ── */
  function resolveRoot() {
    var depth = (window.location.pathname.match(/\//g) || []).length - 1;
    return depth > 0 ? '../'.repeat(depth) : '';
  }

  /* ── 2. Track last meaningful page ── */
  var path = window.location.pathname;
  var skipPages = ['/login', '/signup', '/set-pin', '/app-switcher', '/onboarding'];
  var shouldTrack = !skipPages.some(function (s) { return path.indexOf(s) !== -1; });
  if (shouldTrack) {
    localStorage.setItem(LAST_URL_KEY, window.location.href);
  }

  /* ── 3. Logout ── */
  function doLogout() {
    localStorage.removeItem(LOGGED_IN_KEY);
    // Preserve ventpals_user and ventpals_last_url so the child can resume later
    window.location.href = resolveRoot() + 'login.html';
  }

  /* ── 4. Inject floating logout button ── */
  function injectLogoutButton() {
    if (document.getElementById('vp-logout-btn')) return;

    var btn = document.createElement('button');
    btn.id = 'vp-logout-btn';
    btn.setAttribute('aria-label', 'Log out of VentPals');
    btn.innerHTML = '&#x1F6AA; Log Out';
    btn.style.cssText = [
      'position:fixed',
      'bottom:22px',
      'right:22px',
      'z-index:9999',
      'background:#A259FF',
      'color:#fff',
      'border:none',
      'border-radius:999px',
      'padding:11px 22px',
      'font-size:14px',
      'font-weight:700',
      'cursor:pointer',
      'box-shadow:0 4px 18px rgba(162,89,255,0.35)',
      'font-family:inherit',
      'transition:background 0.2s,transform 0.15s',
      'letter-spacing:0.01em',
    ].join(';');

    btn.addEventListener('mouseenter', function () {
      btn.style.background = '#7c3aed';
      btn.style.transform  = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.background = '#A259FF';
      btn.style.transform  = 'translateY(0)';
    });
    btn.addEventListener('click', doLogout);

    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLogoutButton);
  } else {
    injectLogoutButton();
  }

  /* ── 5. Expose helpers for other scripts ── */
  window.VPSession = {
    logout:    doLogout,
    isLoggedIn: true,
  };
})();
