export enum AppPage {
    START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION, SVG_GENERATOR, TIMELINE, UNIT_9_NOTES
  }
  
export const AppPageLabels: Record<AppPage, string> = {
    [AppPage.START_SCREEN]: "Home",
    [AppPage.EXPLANATION]: "Explanation",
    [AppPage.GEOGRAPHIC_SELECTION]: "Geographic Selection",
    [AppPage.SVG_GENERATOR]: "SVG Generator",
    [AppPage.TIMELINE]: "Timeline",
    [AppPage.UNIT_9_NOTES]: "Unit 9 Notes"
};