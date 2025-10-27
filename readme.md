# Blank Solito Example Monorepo 🕴

```sh
npx create-solito-app@latest my-solito-app
```

👾 [View the website](https://example.solito.dev)

## ⚡️ Instantly clone & deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnandorojo%2Fsolito%2Ftree%2Fmaster%2Fexample-monorepos%2Fblank&env=ENABLE_ROOT_PATH_BUILD_CACHE&root-directory=apps/next&envDescription=Set%20this%20environment%20variable%20to%201%20for%20Turborepo%20to%20cache%20your%20node_modules.&envLink=https%3A%2F%2Ftwitter.com%2Fjaredpalmer%2Fstatus%2F1488954563533189124&project-name=solito-app&repo-name=solito-app&demo-title=Solito%20App%20%E2%9A%A1%EF%B8%8F&demo-description=React%20Native%20%2B%20Next.js%20starter%20with%20Solito.%20Made%20by%20Fernando%20Rojo.&demo-url=https%3A%2F%2Fsolito.dev%2Fstarter&demo-image=https%3A%2F%2Fsolito.dev%2Fimg%2Fog.png&build-command=cd+..%2F..%3Bnpx+turbo+run+build+--filter%3Dnext-app)

## 🔦 About

This monorepo is a blank(ish) starter for an Expo + Next.js app.

While it's pretty barebones, it does a lot of the annoying config for you. The folder structure is opinionated, based on my long experience building for this stack.

## 📦 Included packages

- `solito` for cross-platform navigation
- `moti` for animations
- Expo SDK 54
- Next.js 16
- Expo Router 6
- React 19 (read more below)
- React Compiler 19

For more, see the [compatibility docs](https://solito.dev/compatibility).

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev:
  - First, build a dev client onto your device or simulator
    - `cd apps/expo`
    - Then, either `expo run:ios`, or `eas build`
  - After building the dev client, from the root of the monorepo...
    - `yarn native` (This runs `expo start --dev-client`)

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

## 🎙 About the creator

Follow Fernando Rojo on Twitter: [@FernandoTheRojo](https://twitter.com/fernandotherojo)

## 🧐 Why use Expo + Next.js?

See my talk about this topic at Next.js Conf 2021:

<a href="https://www.youtube.com/watch?v=0lnbdRweJtA"><img width="1332" alt="image" src="https://user-images.githubusercontent.com/13172299/157299915-b633e083-f271-48c6-a262-7b7eef765be5.png">
</a>
# Blank Solito Example Monorepo 🕴

```sh
npx create-solito-app@latest my-solito-app
```

👾 [View the website](https://example.solito.dev)

## ⚡️ Instantly clone & deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnandorojo%2Fsolito%2Ftree%2Fmaster%2Fexample-monorepos%2Fblank&env=ENABLE_ROOT_PATH_BUILD_CACHE&root-directory=apps/next&envDescription=Set%20this%20environment%20variable%20to%201%20for%20Turborepo%20to%20cache%20your%20node_modules.&envLink=https%3A%2F%2Ftwitter.com%2Fjaredpalmer%2Fstatus%2F1488954563533189124&project-name=solito-app&repo-name=solito-app&demo-title=Solito%20App%20%E2%9A%A1%EF%B8%8F&demo-description=React%20Native%20%2B%20Next.js%20starter%20with%20Solito.%20Made%20by%20Fernando%20Rojo.&demo-url=https%3A%2F%2Fsolito.dev%2Fstarter&demo-image=https%3A%2F%2Fsolito.dev%2Fimg%2Fog.png&build-command=cd+..%2F..%3Bnpx+turbo+run+build+--filter%3Dnext-app)

## 🔦 About

This monorepo is a blank(ish) starter for an Expo + Next.js app.

While it's pretty barebones, it does a lot of the annoying config for you. The folder structure is opinionated, based on my long experience building for this stack.

## 📦 Included packages

- `solito` for cross-platform navigation
- `moti` for animations
- Expo SDK 54
- Next.js 16
- Expo Router 6
- React 19 (read more below)
- React Compiler 19

For more, see the [compatibility docs](https://solito.dev/compatibility).

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev:
  - First, build a dev client onto your device or simulator
    - `cd apps/expo`
    - Then, either `expo run:ios`, or `eas build`
  - After building the dev client, from the root of the monorepo...
    - `yarn native` (This runs `expo start --dev-client`)

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

## Cross-Platform Development Workflow

### Overview

This monorepo uses **Solito** to share code between React Native (Expo) and Next.js (Web). The `packages/app` folder contains all shared UI and business logic that runs on both platforms.

### Use Case: Selective Feature Sharing

**You don't need to share everything between platforms.** Solito excels at sharing *specific features* while keeping platform-specific code separate. 

**Example: Sharing Only a Chat Component**

If you have an existing React Native app with many features, but only want to expose a chat component on web:

1. **Extract the chat feature to `packages/app/features/chat/`**
   - Move chat UI components, hooks, and logic to the shared package
   - Keep other mobile-only features in your native app

2. **Create minimal web routes for just the chat**
   ```
   apps/next/app/
   └── chat/
       └── page.tsx    # Only the chat feature on web
   
   apps/expo/app/
   ├── chat.tsx        # Chat route (shared component)
   ├── profile.tsx     # Mobile-only
   ├── settings.tsx    # Mobile-only
   └── camera.tsx      # Mobile-only
   ```

3. **Benefits of this approach:**
   - Share chat logic, UI, and state management
   - Single codebase for AI/messaging features
   - Web version stays lightweight (no mobile bloat)
   - Mobile app keeps all existing native features
   - Independent deployment cycles per platform

**Migration Strategy:**
```bash
# 1. Extract shared chat code
packages/app/features/chat/
├── screen.tsx           # Main chat UI
├── message-list.tsx     # Message components
├── input-bar.tsx        # Input component
├── use-chat.ts          # Chat hook with AI integration
└── api/
    └── chat-api.ts      # Shared API calls

# 2. Platform-specific integrations (if needed)
packages/app/features/chat/
├── notifications.native.tsx  # Push notifications (mobile only)
└── notifications.tsx         # Web notifications API
```

This pattern is ideal for:
- Adding web access to specific mobile features
- Testing cross-platform viability before full migration
- Building web companion apps for mobile-first products
- Keeping bundle sizes optimized per platform

### Architecture

```
packages/app/          # Shared code (runs on both platforms)
├── features/          # Feature-based organization
│   ├── home/
│   │   └── screen.tsx # Shared screen component
│   └── user/
│       └── detail-screen.tsx
├── provider/          # Platform providers
│   ├── index.tsx      # Main provider wrapper
│   └── navigation/
│       ├── index.tsx        # Web navigation (no-op)
│       └── index.native.tsx # Native navigation (no-op with expo-router)
└── navigation/        # Platform-specific navigation

apps/expo/             # React Native entry point
└── app/              # Expo Router file-based routing
    ├── _layout.tsx   # Root layout
    ├── index.tsx     # Home route (imports from packages/app)
    └── users/[id].tsx # Dynamic route

apps/next/            # Next.js entry point
└── app/             # Next.js App Router
    ├── layout.tsx
    ├── page.tsx     # Home route (imports from packages/app)
    └── users/[userId]/
        └── page.tsx # Dynamic route
```

### Developing a New Cross-Platform Feature

Follow these steps when building a feature that works on both native and web:

#### 1. **Create Shared Components in `packages/app/features`**

All UI components that work on both platforms go here. Use React Native primitives (`View`, `Text`, `Pressable`) that work everywhere.

```tsx
// packages/app/features/profile/screen.tsx
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'solito/navigation'

export function ProfileScreen() {
  const router = useRouter()
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Profile Screen</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  )
}
```

#### 2. **Add Dependencies Based on Platform Support**

**For universal packages (work on both platforms):**
```bash
cd packages/app
pnpm add zustand  # State management
pnpm add date-fns  # Date utilities
```

**For native-only packages (camera, sensors, etc):**
```bash
cd apps/expo
pnpm add expo-camera
pnpm add react-native-vision-camera
```

**For web-only packages:**
```bash
cd apps/next
pnpm add @vercel/analytics
```

**For packages with native code that need autoimport:**
```bash
# Install in both places with EXACT same version
cd apps/expo
pnpm add react-native-reanimated@~4.1.1

cd ../../packages/app
pnpm add react-native-reanimated@~4.1.1
```

#### 3. **Platform-Specific Code with `.native.tsx` and `.tsx` Extensions**

When you need different implementations for web vs native, use platform extensions:

```
packages/app/features/camera/
├── camera-view.tsx        # Web implementation
└── camera-view.native.tsx # Native implementation
```

The bundler automatically picks the right file:
- Metro (React Native) uses `.native.tsx` if it exists, otherwise falls back to `.tsx`
- Webpack/Next.js always uses `.tsx`

```tsx
// camera-view.native.tsx (React Native)
import { Camera } from 'expo-camera'

export function CameraView() {
  return <Camera style={{ flex: 1 }} />
}
```

```tsx
// camera-view.tsx (Web)
export function CameraView() {
  return (
    <div>
      <video ref={videoRef} />
      {/* HTML5 camera API */}
    </div>
  )
}
```

#### 4. **Create Routes in Both Apps**

**Expo Router (Native):**
```tsx
// apps/expo/app/profile.tsx
import { ProfileScreen } from 'app/features/profile/screen'

export default ProfileScreen
```

**Next.js (Web):**
```tsx
// apps/next/app/profile/page.tsx
'use client'
import { ProfileScreen } from 'app/features/profile/screen'

export default ProfileScreen
```

#### 5. **Navigation Using Solito**

Use Solito's navigation hooks and components for cross-platform navigation:

```tsx
import { TextLink } from 'solito/link'
import { useRouter, useParams } from 'solito/navigation'

// Links work on both platforms
<TextLink href="/profile">Go to Profile</TextLink>

// Programmatic navigation
const router = useRouter()
router.push('/profile')

// Dynamic routes
const { userId } = useParams<{ userId: string }>()
```

### Common Patterns

#### State Management
Install state libraries in `packages/app` for universal access:
```bash
cd packages/app
pnpm add zustand
# or
pnpm add @tanstack/react-query
```

#### Styling
- Use React Native's `StyleSheet` or inline styles for universal components
- Consider `dripsy` (already included) for responsive, theme-based styling
- For platform-specific styles, use platform extensions

#### API Calls
Place API logic in `packages/app` to share across platforms:
```tsx
// packages/app/api/users.ts
export async function fetchUser(id: string) {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}
```

### Troubleshooting

**Package not found in Metro (React Native):**
1. Clear Metro cache: `cd apps/expo && pnpm start --clear`
2. Check that dependencies are installed in workspace root: `pnpm install`

**Type errors with cross-platform packages:**
1. Ensure TypeScript is configured in workspace root
2. Run `pnpm install` from root to sync types

**Web-only packages breaking native build:**
Use `.native.tsx` extensions or configure Metro to block them (see `apps/expo/metro.config.js` for Radix UI example)

**Native-only packages breaking web build:**
Next.js automatically handles React Native packages, but if issues arise, use platform extensions or dynamic imports with `next/dynamic`

### Best Practices

1.  **Start with shared code** - Write in `packages/app` first, split only when needed
2.  **Use React Native primitives** - `View`, `Text`, `Pressable` work everywhere
3.  **Solito for navigation** - Consistent routing across platforms
4.  **Platform extensions** - Use `.native.tsx` for platform-specific implementations
5.  **Feature-based folders** - Organize by feature, not by file type
6.  **Avoid web-only JSX** - Don't use `<div>`, `<span>`, etc in shared code
7.  **Avoid platform checks** - Use platform extensions instead of `Platform.OS` when possible

## 🎙 About the creator

Follow Fernando Rojo on Twitter: [@FernandoTheRojo](https://twitter.com/fernandotherojo)

## 🧐 Why use Expo + Next.js?

See my talk about this topic at Next.js Conf 2021:

<a href="https://www.youtube.com/watch?v=0lnbdRweJtA"><img width="1332" alt="image" src="https://user-images.githubusercontent.com/13172299/157299915-b633e083-f271-48c6-a262-7b7eef765be5.png">
</a>
