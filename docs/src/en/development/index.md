---
next:
  text: 'Ham Connect Overview'
  link: '/en/development/open-platform/'
---

# Development

Welcome to the Ham open-source project development documentation! Ham currently has the following open-source projects:

| Project | Description | Repository |
| --- | --- | --- |
| [Ham Connect](/en/development/open-platform/) | Open platform OAuth 2.0 authorization service | — |
| [Ham Web](/en/development/ham-web/) | Web frontend for SSO authorization and more | [GitHub](https://github.com/whu-ham/ham-web) |
| [Ham React Native Components](/en/development/ham-rn/) | React Native component repository, integrated into native apps via OTA hot updates | [GitHub](https://github.com/whu-ham/ham-rn) |

## Overview

**Ham Connect** is the OAuth 2.0 authorization service provided by the Ham open platform, allowing third-party apps to securely obtain Ham user authorization and implement "Sign in with Ham" functionality.

**Ham Web** is the web frontend for Ham, built with Next.js. It primarily serves the SSO single sign-on authorization flow (including QR code login and Passkey login) and acts as the web entry point for the Ham Connect platform.

**Ham React Native Components** is the React Native component repository for the Ham app, integrated into native apps via OTA hot updates. It handles the UI and business logic for core features such as course schedule queries, grade queries, GPA calculation, and CAS authentication.

## Contributing

All projects are licensed under the [MIT License](https://opensource.org/licenses/MIT). Community contributions are welcome. Please read each project's contributing guide before submitting a PR.
