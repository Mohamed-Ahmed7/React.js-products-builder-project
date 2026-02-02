// ** JSDOC
// **  Helpers Functions
/**
 *
 * @param {string} txt - The input text to be sliced
 * @param {number} [max=15] - The maximum length  before truncation
 * @returns The sliced text, with an ellipsis (...)
 */
export const textSlicer = (txt: string, max: number = 15): string =>
  txt.length >= max ? `${txt.split(" ").slice(0, max).join(" ")}...` : txt;

