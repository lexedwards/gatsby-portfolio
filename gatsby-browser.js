/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onClientEntry = () => {
  try {
    let iInnerHeight = window.innerHeight;
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = iInnerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  } catch(oError) {
    console.log(oError);
  }
}