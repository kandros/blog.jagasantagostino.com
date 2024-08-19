import randomColor from "randomcolor";
import * as accessibleColors from "accessible-colors";

export function genColors() {
  let light = randomColor();
  let dark = randomColor({
    hue: light,
    format: "hex",
    luminosity: "dark",
  });

  let isAccessible = accessibleColors.isAAContrast(light, dark);
  while (!isAccessible) {
    light = randomColor();
    dark = randomColor({
      hue: light,
      format: "hex",
      luminosity: "dark",
    });
    isAccessible = accessibleColors.isAAContrast(light, dark);
  }

  return { light, dark };
}
