/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  main: '#20bf55',
  secondary: "#b9f6ca",
  primary: "#20bf55",
  light: {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    icon: '#687076',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
    defaultIcon: '#3E3E3E',
    card: '#f5f5f5',
    border: '#e1e1e1',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
    defaultIcon: '#C1C1C1',
    card: '#1c1c1e',
    border: '#2c2c2e',
  },
} as const;
