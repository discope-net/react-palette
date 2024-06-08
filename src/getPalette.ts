import Vibrant from "node-vibrant";

export type PaletteColors = {
  vibrant?: string;
  muted?: string;
  darkVibrant?: string;
  darkMuted?: string;
  lightVibrant?: string;
  lightMuted?: string;
  [name: string]: string | undefined;
};

export async function getPalette(src: string) {
  const palette = await Vibrant.from(src).getPalette();

  return Object.fromEntries(
    Object.entries(palette).map(([key, swatch]) => {
      if(!key[0]){
        return [
          key,
          swatch.getHex()
        ];
      }

      return [
        `${key[0].toLowerCase()}${key.slice(1)}`,
        swatch.getHex(),
      ]
    })
  );
}
