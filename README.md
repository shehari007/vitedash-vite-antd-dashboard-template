<p align="center">
  <img src="src/assets/logo/logo-horizontal-light.png" alt="ViteDash" width="360" />
</p>

<h1 align="center">ViteDash</h1>

<p align="center">
  A modern, responsive, and production-ready admin dashboard template built with <b>React 19</b>, <b>Vite 8</b>, and <b>Ant Design 6</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Ant%20Design-6.5-0170FE?logo=antdesign" alt="Ant Design" />
</p>

## ✨ Features

- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, professional design using Ant Design 6 with the Inter typeface
- ⚡ **Lightning Fast** - Powered by Vite 8 for instant HMR and optimized builds
- 🔐 **Authentication Ready** - Sign in, sign up, forgot password, protected routes, and a split-screen `AuthLayout`
- 🎯 **TypeScript Ready** - Includes TypeScript type definitions
- 📊 **Dashboard Components** - Stat cards, gauges, tables, timelines, and schedules
- 🌗 **System-Wide Light/Dark Mode** - Powered entirely by Ant Design's `ConfigProvider` theme algorithm, not CSS overrides. Persisted to `localStorage` and defaults to the OS preference
- ⚡ **Header Quick Actions** - Global search, quick-create dropdown, fullscreen toggle, notifications, and theme switch
- 🧭 **Professional Sidebar** - Grouped navigation, colored icons, and a pinned account card, themed via Ant Design's `Layout`/`Menu` tokens
- 📄 **Starter Pages** - Tables, Forms, Analytics, Users, Profile, and Settings, all built purely with Ant Design components
- 🖼️ **Branded** - Ships with the ViteDash logo (icon, horizontal lockup, favicon) in light and dark variants
- 📦 **Minimal Dependencies** - Only essential packages included

## 🔗 Live Demo

[Add your live demo link here]

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| [React](https://react.dev/) | 19.2 | UI Library |
| [Vite](https://vitejs.dev/) | 8.1 | Build Tool |
| [Ant Design](https://ant.design/) | 6.5 | UI Component Library |
| [React Router](https://reactrouter.com/) | 7.18 | Client-side Routing |

## 📁 Project Structure

```
src/
├── assets/
│   └── logo/            # ViteDash logo assets (icon, horizontal lockups, light/dark)
├── components/
│   └── SectionLabel.jsx # Quiet uppercase section heading used across dashboard pages
├── context/              # App-wide context (theme mode / ConfigProvider)
│   ├── ThemeModeContext.jsx   # Light/dark ConfigProvider setup
│   ├── theme-mode-context.js  # Context object + shared font/sidebar color tokens
│   └── useThemeMode.js        # Hook to read/toggle theme mode
├── layout/                # Layout components
│   ├── MainLayout.jsx      # Main dashboard layout
│   ├── AuthLayout.jsx      # Split-screen layout for sign in / sign up / forgot password
│   ├── LayoutHeader.jsx    # Top navigation header + quick actions
│   ├── LayoutSidebar.jsx   # Side navigation (responsive drawer on mobile)
│   ├── LayoutMenu.jsx      # Grouped navigation menu items
│   ├── LayoutLogo.jsx      # ViteDash logo + wordmark
│   ├── LayoutUserCard.jsx  # Account card pinned to the bottom of the sidebar
│   └── LayoutFooter.jsx    # Footer component
├── pages/                 # Page components
│   ├── auth/
│   │   ├── SignIn.jsx         # Sign in page
│   │   ├── SignUp.jsx         # Sign up page
│   │   └── ForgotPassword.jsx # Forgot password page
│   ├── home/
│   │   └── Home.jsx        # Dashboard home page
│   ├── blank/
│   │   └── Blank.jsx       # Blank page template
│   ├── tables/
│   │   └── Tables.jsx      # Sortable / filterable data table example
│   ├── forms/
│   │   └── Forms.jsx       # Form controls example
│   ├── analytics/
│   │   └── Analytics.jsx   # Metrics built with Progress/Statistic
│   ├── users/
│   │   └── Users.jsx       # User management table
│   ├── profile/
│   │   └── Profile.jsx     # Profile overview and edit tabs
│   └── settings/
│       └── Settings.jsx    # General, appearance, security, notifications
├── Utils/                 # Utility functions
│   └── Auth/
│       ├── SignIn.jsx      # Sign in logic
│       └── Logout.jsx      # Logout logic
├── App.jsx                # Root component with routes
├── ProtectedRoute.jsx      # Route protection HOC
├── main.jsx                # Application entry point
├── App.css                 # Global app styles
└── index.css                # Base styles
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shehari007/antd-vite-react-admin-dashboard-template.git
   cd antd-vite-react-admin-dashboard-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔐 Authentication

The template includes a full front-end authentication flow:

- **Sign In** - `/signin`
- **Sign Up** - `/signup`
- **Forgot Password** - `/forgot-password`
- **Protected Routes** - Dashboard routes require authentication
- **Auth Storage** - Uses localStorage for demo purposes

To customize authentication:
1. Modify `src/Utils/Auth/SignIn.jsx` for login logic
2. Modify `src/Utils/Auth/Logout.jsx` for logout logic
3. Update `src/ProtectedRoute.jsx` for route protection
4. Edit `src/layout/AuthLayout.jsx` to change the shared branding panel for all auth screens

## 🌗 Light/Dark Theme System

Theming is handled entirely through Ant Design's `ConfigProvider`. There are no dark-mode CSS classes or overrides. `src/context/ThemeModeContext.jsx` swaps between `theme.defaultAlgorithm` and `theme.darkAlgorithm` based on the current mode, so every Ant Design component re-themes itself automatically. The mode is stored in `localStorage` and initialized from the OS `prefers-color-scheme` on first visit.

- Toggle from the header switch, or from **Settings → Appearance**
- Read or update the mode anywhere with the `useThemeMode()` hook:
  ```jsx
  import { useThemeMode } from './context/useThemeMode';

  const { mode, isDark, toggleMode, setMode } = useThemeMode();
  ```
- Card elevation (`boxShadowTertiary`), the global font (`Inter`), the sidebar color (`siderBg` / `darkItemBg` / `darkSubMenuItemBg`), and other design tokens are also configured here. Extend the `token` / `components` objects to customize further.

## 🖼️ Logo & Branding

ViteDash's logo assets live in `src/assets/logo/`:

| File | Use |
|------|-----|
| `logo-icon.png` | Transparent mark used in the sidebar, header, and auth branding panel |
| `logo-icon-tile-light.png` / `logo-icon-tile-dark.png` | Square app-icon tiles |
| `logo-horizontal-light.png` / `logo-horizontal-dark.png` | Full lockup (icon + wordmark) for docs/marketing |

Favicons generated from the mark are in `public/` (`favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`) and wired up in `index.html`. Swap these files to rebrand; no code changes required.

## 🎨 Customization

### Theming

The color, radius, font, and shadow tokens live in `src/context/ThemeModeContext.jsx`:

```jsx
<ConfigProvider
  card={{ variant: 'borderless' }}
  theme={{
    algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 8,
    },
  }}
>
  {/* Your app */}
</ConfigProvider>
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add a menu item in `src/layout/LayoutMenu.jsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Muhammad Sheharyar Butt**

- GitHub: [@shehari007](https://github.com/shehari007)
- Email: shehariyar@gmail.com

## 🙏 Acknowledgments

- [Ant Design](https://ant.design/) - Amazing UI components
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native user interfaces

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/shehari007">Muhammad Sheharyar Butt</a>
</p>

<p align="center">
  ⭐ Star this repo if you find it helpful!
</p>
