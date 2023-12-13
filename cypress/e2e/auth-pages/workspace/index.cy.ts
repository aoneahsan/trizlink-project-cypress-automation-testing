import { LOCAL_STORAGE_KEYS } from '@trzCy/utils/constants';
import { ENVS } from '@trzCy/utils/envKeys';
import { SELECTORS } from '@trzCy/utils/selectors/element-selector';

describe('Workspace page tests after entering user login credentials', () => {
  beforeEach('visit workspace after entering login details', () => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS?.userAuthToken,
      ENVS?.loginDetails?.ahsanZaions?.token
    );
    localStorage.setItem(
      LOCAL_STORAGE_KEYS?.userAccountDetails,
      ENVS?.loginDetails?.ahsanZaions?.userDetails
    );
    cy.visit('/app/workspaces');
  });

  it('should be able to click on the workspace box to enter details', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).should('be.visible');
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).should('be.visible').should('include', 'Create');
    // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).should('include', 'Create');
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Name_input).should('be.visible')
    cy.go('back');
  });
});
