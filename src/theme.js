// Theme levers carried over from the design mockup.
// Change these to re-skin the whole template for a new client.
export const THEME = {
  ink: '#22383F', // dark blue slate: text, footer, blueprint hero. Alternatives: '#395C6B', '#1C2326'
};

export function useTheme(pageDefaults) {
  return { ...pageDefaults, ...THEME };
}
