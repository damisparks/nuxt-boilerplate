# Nuxt 3 Boilerplate

A modern, feature-rich Nuxt 3 starter template with TypeScript support, Nuxt UI, state management with Pinia, and comprehensive tooling for development.

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/damisparks/nuxity#NODE_VERSION=18&AWS_LAMBDA_JS_RUNTIME=nodejs18.x)

## Features

* ⚡️ [Nuxt 3](https://github.com/nuxt/nuxt) with [pnpm](https://pnpm.io/) - super fast development and build times
* 🎨 [Nuxt UI](https://ui.nuxt.com) - sophisticated, accessible, and highly performant user interfaces
* 🔍 [TypeScript](https://www.typescriptlang.org/) - type safety and improved developer experience
* 📝 [NuxtFonts](https://fonts.nuxt.com) - plug-and-play fonts optimization
* 🍍 [Pinia](https://pinia.vuejs.org/) - intuitive, type safe store for Vue
* 📱 [Device Detection](https://github.com/nuxt-modules/device) - mobile and device detection (@nuxtjs/device)
* ✨ [Eslint Nuxt](https://github.com/nuxt/eslint-config) - code quality and consistency
* 🐕 [Husky](https://github.com/typicode/husky) & [Lint-staged](https://github.com/okonet/lint-staged) - Git hooks for code quality
* 🖼️ [Nuxt Image](https://image.nuxtjs.org/) - optimized image handling
* 🚀 [Nuxt Icons](https://ui.nuxt.com/getting-started/icons/nuxt) - easy icon usage
* 🧩 Custom error page with consistent UI

## Project Structure

```
├── eslint.config.mjs  # ESLint configuration
├── LICENSE            # License file
├── nuxt.config.ts     # Nuxt configuration
├── package.json       # Project dependencies
├── pnpm-lock.yaml     # pnpm lock file
├── README.md          # Project documentation
├── tsconfig.json      # TypeScript configuration
├── app/               # Main application directory
│   ├── app.vue        # Application entry point
│   ├── error.vue      # Error page
│   ├── assets/        # Static assets
│   │   └── css/       # CSS files
│   │       └── main.css
│   ├── components/    # Vue components
│   │   ├── AppFooter.vue
│   │   ├── AppNavBar.vue
│   │   ├── AppTitle.vue
│   │   ├── ProductCard.vue
│   │   └── QuickAccess.vue
│   ├── layouts/       # Page layouts
│   │   └── default.vue
│   ├── pages/         # Application routes
│   │   ├── index.vue
│   │   └── play.vue
│   ├── store/         # Pinia store modules
│   │   └── productStore.ts
│   └── types/         # TypeScript type definitions
│       └── index.ts
└── public/            # Public static assets
    └── favicon.ico
```

## Setup

Make sure to install the dependencies:

```bash
# Install dependencies
pnpm install
```

## Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Linting

Run linting:

```bash
pnpm lint
```

Fix linting issues:

```bash
pnpm lintfix
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

Check out the [Nuxt 3 documentation](https://nuxt.com/docs) for more information.
