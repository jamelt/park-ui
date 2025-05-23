---
id: changelog
title: Changelog
description: All notable changes will be documented in this file.
---

## [Unreleased]

### Removed

- **Breaking**: The Park UI Preset no longer includes component recipes. From now on, recipes will be added to your project when you install a component via the CLI, giving you full flexibility to customize them as needed. To migrate, simply reinstall your components using the CLI.

Afterward, update your `panda.config.ts` as follows:

```tsx
// other imports
import { recipes, slotRecipes } from '~/theme/recipes'

export default defineConfig({
  // other configuration
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
})
```

If you run into any issues, check out the updated [getting started guide](https://park-ui.com/react/docs/overview/getting-started#setup-guide).

## [0.43.1] - 2024-11-23

### Fixed

- **NumberInput**: Fixed an issue where the grid layout was not applied correctly.

## [0.43.0] - 2024-11-18

### Changed

- **Color Tokens**: The `accent` color concept has been removed. Components now rely on the built-in
  `colorPalette` prop for color customization. This change aligns with how Panda CSS envisions the
  use of its [virtual color system.](https://panda-css.com/docs/concepts/virtual-color).

Previously, color tokens were organized like this:

```markdown
colorPalette.1  
 └── accent.1  
 └── amber.1  
 ├── amber.light.1  
 └── amber.dark.1
```

The `accent` layer was unnecessary and has been removed:

```markdown
colorPalette.1  
 └── amber.1  
 ├── amber.light.1  
 └── amber.dark.1
```

Here's how this change impacts usage:

```diff
- <Box color="accent.default" />
+ <Box color="colorPalette.default" />
```

- Improved consistency and scalability by refining the Park UI Preset setup in the Panda
  configuration. [Learn more in the docs](https://park-ui.com/react/docs/theme/customize).

````diff
 import { defineConfig } from '@pandacss/dev'

```diff
 import { defineConfig } from '@pandacss/dev'
 import { createPreset } from '@park-ui/panda-preset'
+import amber from '@park-ui/panda-preset/colors/amber'
+import sand from '@park-ui/panda-preset/colors/sand'

 export default defineConfig({
   preflight: true,
   presets: [
-    '@pandacss/preset-base',
     createPreset({
-      accentColor: 'amber',
-      grayColor: 'sand',
-      borderRadius: 'sm',
+      accentColor: amber,
+      grayColor: sand,
+      radius: 'sm',
     }),
   ],
   include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
   jsxFramework: 'react', // or 'solid' or 'vue'
   outdir: 'styled-system',
 })
````

## [0.42.0] - 2024-08-01

### Added

- **Input, Textarea**: Now support usage within the `Field` component.

### Changed

- **CLI**: Installation of components using the CLI no longer requires a `tsconfig.json` file. This
  is particularly beneficial for setups like `nx` workspaces that do not include a `tsconfig.json`
  file.

The CLI now prompts the following:

```text
➜ Which JS framework do you use? [React / Solid / Vue]
➜ Where would you like to store your components? [./src/components/ui]
```

Adding a component will create the following folder structure:

```text
➜ /src/components/ui/
  |-- styled/
  |   |-- utils/
  |   |   `-- create-style-context.ts
  |   `-- button.tsx
  `-- button.tsx
```

### Fixed

- **Textarea**: Fixed an issue where the `invalid` state was not rendered correctly.
- **Tooltip**: Set a proper `z-index` value to ensure the tooltip is displayed above other elements.
- **Input**: Fixed an issue where the horizontal padding was not applied correctly.
- Resolved a warning related to the undefined usage of `colors.red.9`.

## [0.41.0] - 2024-07-28

### Added

- Added new semantic tokens: `fg.error` and `border.error` for styling error states.
- Added support for `invalid` state in the `Input` component.
- Added `_invalid` condition to the list of supported conditions.

### Changed

- Updated the `Button` component to support loading states.

### Fixed

- Resolved an issue where Panda sometimes did not recognize style props on `IconButton` components.

## [0.40.0] - 2024-07-27

### Added

- Added `Spinner` component.

### Fixed

- Fixed an issue where forcing a color mode on a component sometimes did not work as expected.

### Removed

- Removed the `icon-button` recipe in favor of reusing the `button` recipe.

## [0.39.0] - 2024-07-15

### Added

- Added support for forcing all components to render in either dark or light mode.

```jsx
export const App = () => {
  return (
    <Box className="dark">
      {/* Renders a Popover component always in dark mode */}
      <Popover />
    </Box>
  )
}
```

## [0.38.1] - 2024-06-25

### Fixed

- Prepared recipes for `QrCode`, `SignaturePad` and `Field` components.

## [0.38.0] - 2024-06-06

We are excited to announce that in this release, we have migrated all components to the new Ark UI
3.0.0 API. This update includes several breaking changes, so please make sure to update your code
snippets accordingly.

### Changed

- Optimized type checking for `Heading`, `Icon` and `Text` components for faster performance.

### Fixed

- Resolved an issue with the `Avatar` component where the image did not display as round after
  loading.

## [0.37.1] - 2024-05-19

### Fixed

- Set `white-space: pre` for the `Code` and `Kb` component to prevent text wrapping.

## [0.37.0] - 2024-04-10

### Added

- Added `on` and `off` to the list of supported conditions.

### Changed

- Improved the `hover` conditions to only activate on non-touch devices.

### Fixed

- Fixed an issue where the `NumberInput` component rendered a border incorrectly.
- Fixed an issue where the `ToggleGroup` component did not appear to work correctly on touch
  devices.

## [0.36.1] - 2024-03-06

### Changed

- Replaced `start` with `flex-start` due to mixed support in some browsers.

## [0.36.0] - 2024-02-27

### Added

- Introduced the `Collapsible` component.

### Changed

- Updated the `Accordion` to leverage the new `Collapsible` component from Ark UI (version 2.20+).

## [0.35.2] - 2024-02-19

### Fixed

- Fixed an issue with the `Switch` not being rendered correctly when a size was specified.

## [0.35.1] - 2024-02-16

### Fixed

- Replaced `{colors.white}` and `{colors.black}` with `black` and `white` in color references to
  prevent false positive error messages.

## [0.35.0] - 2024-02-16

### Added

- Added `TreeView` component.
- Added `Clipboard` component.

## [0.34.1] - 2024-02-12

### Fixed

- Resolved an issue that you had to add the `accent` and `gray` colors to the `additionalColors`
  option in the `createPreset` function to make them available in the CSS bundle.

## [0.34.0] - 2024-02-08

### Added

Introduced a new `additionalColors` option in the `createPreset` function to decrease the CSS bundle
size effectively. By default, the preset includes only the `gray` and `accent` colors. This maybe a
breaking change for some users, so please update your configuration accordingly.

Example configuration:

```tsx
import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'amber',
      grayColor: 'sand',
      additionalColors: ['red', 'green'],
    }),
  ],
  // Additional configuration...
})
```

To add all available colors, use this wildcard:

```tsx
createPreset({
  additionalColors: ['*'],
}),
```

## [0.33.0] - 2024-02-01

### Changed

- Replaced `heading` recipe in favor of `text` recipe. Please update your code snippets accordingly.

## [0.32.0] - 2024-01-31

This release marks an important milestone for Park UI as we have upgraded to the new major version
2.0 of Ark UI. Please update your dependencies accordingly.

### Changed

- Updated all code snippets to match the new Ark UI 2.0.0 API.
- Updated the `TagsInput` recipe to use the new `ItemPreview` part.

### Fixed

- Fixed an issue that the initials in `Avatar` were not centered correctly.

## [0.31.0] - 2024-01-26

### Added

- Added new `Skeleton` component.

### Fixed

- Resolved an issue with `SegmentControl` that the `indicator` was sometimes not rendered correctly.

## [0.30.1] - 2024-01-23

### Fixed

- Fixed a problem where the`enclosed` variant of the `Tabs` component was rendered slightly too big

## [0.30.0] - 2024-01-22

### Added

- Added new `enclosed` variant to the `Tabs` component.

### Fixed

- Resolved an issue with the `Card` component where the content would overflow the card.

## [0.29.0] - 2024-01-19

We are excited to announce that in this release, we have revised several components to feature a
closed Component API:

- `Avatar`
- `Checkbox`
- `Number Input`
- `Pagination`
- `Pin Input`
- `Rating Group`
- `Slider`
- `Switch`

For more information on the reasoning behind this change, please refer to the
[GitHub Issue](https://github.com/cschroeter/park-ui/issues/144).

### Added

- Introduced styles for the `Progress` component (Preview).
- Implemented support to render the `RatingGroup` in various colors.
- Added a hover color to the items in `SegmentControl`.
- Launched [Storybooks](https://github.com/cschroeter/park-ui/tree/main/components) for all
  components across each framework.

### Changed

- Enhanced typings for all components, aiming for an improved TypeScript experience.

### Fixed

- Fixed an issue in the `PinInput` component where the input width was incorrect.
- Addressed a bug in the `Select` component where a disabled item incorrectly displayed a hover
  color.

## [0.28.0] - 2024-01-01

### Changed

- Renamed `placement` prop to `variant` in `Drawer` component for better consistency with other CSS
  frameworks.
- Renamed `Label` to `FormLabel`
- Revised `Avatar` component. Check out the [docs](https://park-ui.com/docs/panda/components/avatar)
  for more details.

### Fixed

- Resolved an issue that `Avatar` did not render correctly when no image was provided.

## [0.27.0] - 2023-12-19

### Added

- Added new `Button` variant `subtle`.

### Fixed

- Fixed an issue with `RatingGroup` where the rating icons were not resized correctly.

## [0.26.2] - 2023-12-15

### Fixed

- Declared `@pandacss/dev` and `@pandacss/types` as peer dependencies to avoid TypeScript errors.

### Changed

- Updated import paths for more precise module referencing to help with tree-shaking.

```tsx
// before
import { Avatar as ArkAvatar } from '@ark-ui/react'
// after
import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
```

## [0.26.1] - 2023-12-14

### Fixed

- Resolved an issue with ruby color values in semantic tokens

## [0.26.0] - 2023-12-13

### Changed

- Integrated latest version of Ark UI 1.2.0
- Due to an issue with [Next.js](https://github.com/vercel/next.js/issues/51593) and React Server
  Components, we've revised the export method for multi-part components.

```tsx
// before
import { Avatar } from '~/components/ui/avatar'
// after
import * as Avatar from '~/components/ui/avatar'

function MyAvatar() {
  return (
    <Avatar.Root {...props}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  )
}
```

### Fixed

- Resolved an issue where the exported component props were not typed correctly

```tsx
// before
export type ButtonProps = typeof Button
// after
export type ButtonProps = HTMLStyledProps<typeof Button>
```

## [0.25.0] - 2023-12-01

### Added

- Added `Kbd` component.
- Added `accent.text` to the list of semantic tokens. This token is used do display text in
  interactive elements like buttons and links.
- Added support to render components with different colors. Pass the `colorPalette` prop to the
  component to change its visual style. See the example below for more details.

```tsx
<Button colorPalette="red">Danger</Button>
```

### Changed

- Resolved an issue with `Table` markup where the `thead` element was not rendered correctly.

### Fixed

- Resolved an issue that caused the `Dialog` to show up in the wrong position when the page was
  scrolled.

### Removed

- Removed `border.accent` from the list of semantic tokens. Use `accent.default` or
  `colorPalette.default` instead.

## [0.24.0] - 2023-11-21

### Added

- Added `FileUpload` component.

### Fixed

- Resolved an issue with the `Dialog` component where the scrollbar would cause a layout shift.

## [0.23.0] - 2023-11-17

### Added

- Added `focusVisible` styles to the `Checkbox` component.
- Added `disabled` styles to the `Accordion` component.

## [0.22.0] - 2023-11-09

With the introduction of Ark UI 1.0 support, this version implements significant changes, resulting
in several breaking updates. Key component revisions include: `Accordion`, `ColorPicker`,
`DatePicker`, `Dialog`, `RadioGroup`, `SegmentGroup`, `TagsInput`, `Toast`, and `ToggleGroup`.

### Added

- Added `indeterminate` styles to the `Checkbox` component.

### Changed

- Revised `Slider` component.

### Removed

- `RangeSlider` component has been removed in favor of the `Slider` component.

## [0.21.0] - 2023-11-05

### Added

- Added `Link` component.

### Changed

- Changed the background color of text that is selected by the user to match the `accent` color.
- Revised `IconButton` component.
- Revised `Code` component.

## [0.20.0] - 2023-10-22

### Added

- Added a default export to `@park-ui/panda-preset` for easier configuration. This will use
  `neutral` as accent and gray color with `borderRadius` of `sm`.

```jsx
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  // ...
})
```

To customize the Park UI preset, use the `createPreset` function as shown below:

```jsx
import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'amber',
      grayColor: 'sand',
      borderRadius: 'none',
    }),
  ],
  // ...
})
```

### Changed

- Tweaked semantic color tokens for a more consistent look and feel.

## [0.19.0] - 2023-10-19

This is one of the biggest releases of Park UI so far. We've introduced a new way to configure
presets, which will make it easier to customize the theme to your needs. We've also replaced the
default colors from `@pandacss/preset-base` with [Radix Colors](https://www.radix-ui.com/colors).

The overall look and feel of Park UI has been improved as well. We've revised the `Card` and
`Drawer` components and tweaked many of the existing components to make them more consistent.

We've also started to work on a Taildwind CSS plugin that will allow you to use Park UI as a plugin
in your Tailwind CSS project. This is still a work in progress, but we're excited to share it with
you soon.

In the light of these changes, we've renamed the `@park-ui/presets` package to
`@park-ui/panda-preset`. We will continue to support the old package name for the time being, but we
recommend that you update your configuration to use the new package name.

### Added

- `createPreset` function introduced for more convenient and flexible preset configuration. See the
  examples below for more details.
- Replaced default colors from `@pandacss/preset-base` with
  [Radix Colors](https://www.radix-ui.com/colors). This will allow us to provide more consistent
  colors when switching between light and dark mode.

### Changed

- Revised `Card` component.
- Revised `Drawer` component.

### Examples

**Before**: Extending Theme

```tsx
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  theme: {
    extend: {
      tokens: {
        colors: {
          grayPalette: {
            25: { value: '#fcfcfc' },
            // etc ..
          },
        },
      },
      semanticTokens: {
        colors: {
          accent: {
            default: { value: { base: '{colors.indigo.500}', _dark: '{colors.indigo.200}' } },
            // etc ..
          },
        },
      },
    },
  },
  // ...
})
```

**After**: Using `createPreset`

```tsx
import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'amber',
      grayColor: 'sand',
      borderRadius: 'md',
    }),
  ],
  // ...
})
```

## [0.18.0] - 2023-10-12

### Added

- Added support for component dot notation, e.g., `<Accordion.Content />` alongside
  `<AccordionContent />`.

### Changed

- BREAKING: Use `@pandacss/preset-base` as preset instead of `@pandacss/dev/presets`.

## [0.17.0] - 2023-10-04

### Added

- Added support for icons in the `Badge` component.

### Changed

- Revised `Alert` component.

## [0.16.0] - 2023-09-27

### Added

- Added open and close animation to the `Tooltip` component.
- Added `outline` variant and `lg` size to the `Tabs` component.

### Changed

- Improved `horizontal` and `vertical` orientation in `Tabs`.

## [0.15.0] - 2023-09-21

### Added

- Added `ghost` variant to the `Code` component.

### Changed

- BREAKING: Renamed `button` variants to match their visual style: `primary` to `solid`, `secondary`
  to `outline` and `tertiary` to `ghost`.

## [0.14.0] - 2023-09-21

### Added

- Added `Table` component.

## [0.13.0] - 2023-09-19

### Added

- Added `Icon` component.
- Added `ghost` variant to the `Select` component.

### Changed

- Revised `Menu` component.

## [0.12.0] - 2023-09-14

### Added

- Added open and close animations to the `Menu` component.
- Added `ToggleGroup` component.

### Changed

- Revised `NumberInput` component.
- Revised `Select` component.
- Revised `Combobox` component.

## [0.11.0] - 2023-09-08

### Changed

- Revised `PinInput` component.

## [0.10.0] - 2023-09-03

### Added

- Added support for the `disabled` state in the `RadioGroup`, `SegmentGroup` and `Tabs` components.

### Changed

- Improved responsiveness of the `Tabs` component by using `overflow: auto`

## [0.9.0] - 2023-08-29

### Added

- Added `Card` component.
- Added a `2xs` size token with a value of `16rem` or `256px`.
- Added new variant `outline` to the `RadioButtonGroup` component.

### Changed

- Revised `Select` component to match the visual style of the `Input` component.

### Fixed

- Resolved an issue with the `Textarea` recipe where the resize handle would be hidden.
- Resolved an issue with the `RadioButtonGroup` component where the radio buttons would be
  misaligned when the text was longer than the specified width.

## [0.8.1] - 2023-08-17

### Fixed

- Resolved a bug in the `Article` component where the font size didn't adjust appropriately in
  responsive modes.

## [0.8.0] - 2023-08-17

### Added

- Introduced a new `4.5` and `14` token for enhanced `spacing` and `sizes`.
- Added `Article` component to effortlessly style Markdown or CMS-generated HTML.

### Changed

- Replaced `fontSize` with `height` and `width` to set icon sizing in `Button` for a greater
  compatibility with other icon libraries.

## [0.7.1] - 2023-08-16

### Changed

- Provided a dedicated recipe for the `RangeSlider` component instead of using the `Slider` recipe.

## [0.7.0] - 2023-08-15

### Added

- `25` hue levels added for all grays palettes.
- Added `none` and `2xs` border radius tokens.
- Added `{radii.l1}`, `{radii.l2}` and `{radii.l3}` to the semantic tokens border radii.

## [0.6.0] - 2023-08-13

### Added

- Added `Code` component to display inline code snippets.
- Input elements like `Input`, `Textarea`, `NumberInput` etc. use `accent` color when focused.

### Changed

- Renamed box shadow token `outline` to `accent`.
- Renamed `tablist` part to `list` in `Tabs` recipe.
- Changed the color of the column header in `DatePicker` to `fg.subtle`.

### Removed

- The `icon` prop has been removed from `IconButton` as it would affect compatibility with the Ark
  UI `asChild` prop. Code snippets have been updated accordingly.

## [0.5.0] - 2023-08-10

### Added

- Added `DatePicker` component.

## [0.4.0] - 2023-08-10

### Added

- Added `label` styles for `Select` component.

### Changed

- All relevant recipes now use the new
  [defineSlotRecipe](https://panda-css.com/docs/concepts/slot-recipes) in Panda CSS to help organize
  the styles.

## 0.3.1 - 2023-08-09

### Fixed

- Resolved an issue with bundling the `@park-ui/panda-preset` package.

## [0.3.0] - 2023-08-09

### Added

- Added `accent.default`, `accent.emphasized` and `accent.fg` to the list of semantic tokens.
  Interative elements like buttons and links will use these colors for their background and
  foreground colors.

### Changed

- All recipes now use semantic tokens for their colors.
- Changed `outline` from `neutral.500` to `neutral.700` in light mode and `neutral.500` to
  `neutral.300` in dark mode to improve contrast.

### Removed

- Removed `bg.accent` and `fg.accent` from the list of semantic tokens.

## 0.2.0 - 2023-08-06

### Added

- Added `Drawer` component.
- Added new `easings` options: `easings.default`, `easings.emphasized-in`, `easings.emphasized-out`.

### Changed

- Changed animation for `Modal` components.
- Changed `transitionTimingFunction` for all relevant components to the new `easings.default`.
- Tweaked `bg.canvas` to be slightly darker in `light` mode.

## 0.1.0 - 2023-08-02

### Added

- Initial Release of [Park UI](https://park-ui.com)
