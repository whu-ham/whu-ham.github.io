---
next:
  text: 'ham-web Overview'
  link: '/en/development/ham-web/'
---

# Development

Welcome to the Ham open-source project development documentation! Ham currently has the following open-source projects:

| Project | Description | Repository |
| --- | --- | --- |
| [ham-rn](/en/development/ham-rn/) | React Native component repository, integrated into native apps via OTA hot updates | [GitHub](https://github.com/whu-ham/ham-rn) |
| [ham-web](/en/development/ham-web/) | Web frontend for SSO authorization and more | [GitHub](https://github.com/whu-ham/ham-web) |

## Overview

**ham-rn** is the React Native component repository for the Ham app, integrated into native apps via OTA hot updates. It handles the UI and business logic for core features such as course schedule queries, grade queries, GPA calculation, and CAS authentication.

**ham-web** is the web frontend for Ham, built with Next.js. It primarily serves the SSO single sign-on authorization flow (including QR code login and Passkey login) and acts as the web entry point for the Ham Connect platform.

## Contributing

All projects are licensed under the [MIT License](https://opensource.org/licenses/MIT). Community contributions are welcome. Please read each project's contributing guide before submitting a PR.
