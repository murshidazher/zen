<img src="https://raw.githubusercontent.com/murshidazher/zen/main/public/images/logo.png" aria-label="Murshid Azher Logo" width="90px">

# [zen](https://github.com/murshidazher/zen)

![Next JS](https://img.shields.io/badge/next-black?logo=next.js\&logoColor=white)

- ⚡️ My personal website — 2023 edition

## Table of Contents

- [zen](#zen)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Pre-requisite](#pre-requisite)
    - [Up and Running](#up-and-running)
  - [Inspirations](#inspirations)
  - [Typeface](#typeface)
  - [License](#license)

## Getting Started

### Pre-requisite

> 💡 We use [pnpm](https://pnpm.io/) as a drop-in replacement for `npm` for better package management

1. Install either [asdf](https://asdf-vm.com/guide/getting-started.html) or [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage your node version.
2. Install the node version mentioned in the `.nvmrc` file.
3. Install `pnpm` globally as package manager,

```sh
npm install -g pnpm
```

### Up and Running

Clone the repository and install dependencies

```sh
git clone git@github.com:murshidazher/zen.git
pnpm i
```

Create an `.env.local` file with the following variables:

```sh
NEXT_PUBLIC_SITE_URL=        # The local / hosted url (i.e. http://localhost:3000)
POSTMARK_SERVER_API_TOKEN="" # The Postmark API Token
EMAIL_ADDRESS=""             # The email address to send emails
```

To start the development server

```sh
pnpm dev
```

## Inspirations

- ✺ [Hayden Bleasel](https://haydenbleasel.com/) - Most of the component styles were heavily inspired and taken from this portfolio.
- 🗞️ [Siddharth Arun](https://sdrn.co/) - The website layout.
- 📦 [radix](https://www.radix-ui.com/) - UI elements.
- ⚙️ [shadn](https://ui.shadcn.com/) - Components and styles.
- 🫐 [qoals](https://qoals.com/) - Blended Blur Background.

## Typeface

The primary typeface used is [Inter](https://rsms.me/inter/), a sleek and minimalist sans-serif font, while [Google Sans](https://flutter.googlesource.com/gallery-assets/+/refs/heads/master/lib/fonts/) is employed for the headings.

## License

[MIT](./LICENSE) © 2023-present Murshid Azher.
