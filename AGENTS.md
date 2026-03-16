# Project Notes

## Package Manager

**Always use `ddev pnpm`** instead of `npm` or `pnpm` directly.

Examples:
- `ddev pnpm install` (not `npm install` or `pnpm install`)
- `ddev pnpm build` (not `npm run build`)
- `ddev pnpm dev` (not `npm run dev`)
- `ddev pnpm add <package>` (not `pnpm add <package>`)

## Architecture

This project follows the [bulletproof-react](https://github.com/alan2207/bulletproof-react) architecture:

```
src/
├── app/           # Next.js App Router
├── assets/        # Static assets
├── components/    # Shared UI components
├── config/        # Environment variables
├── features/      # Feature-based modules
├── hooks/        # Shared custom hooks
├── lib/          # Reusable libraries
├── stores/       # Global state (Zustand)
├── types/        # Shared TypeScript types
└── utils/        # Utility functions
```
