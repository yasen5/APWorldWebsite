export enum AppPage {
    START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION, SVG_GENERATOR
  }
  
export const AppPageLabels: Record<AppPage, string> = {
    [AppPage.START_SCREEN]: "Home",
    [AppPage.EXPLANATION]: "Explanation",
    [AppPage.GEOGRAPHIC_SELECTION]: "Geographic Selection",
    [AppPage.SVG_GENERATOR]: "SVG Generator"
};