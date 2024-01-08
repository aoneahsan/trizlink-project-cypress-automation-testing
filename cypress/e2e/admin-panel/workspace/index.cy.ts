import { WORKSPACE_DETAILS } from '@trzData/workspace';
import { APP_ROUTES } from '@trzUtils/app-routes';
import { API_METHODS } from '@trzUtils/enums';
import { authenticateUserBeforeEachHook } from '@trzUtils/helpers/authenticate-user-beforeEach-hook';
import { SELECTORS } from '@trzUtils/selectors';
import { error } from 'console';
import { isNumber } from 'cypress/types/lodash';

describe('Workspace page tests after entering user login credentials', () => {
  beforeEach('visit workspace after entering login details', () => {
    authenticateUserBeforeEachHook();

    cy.visit(APP_ROUTES.WORKSPACE.LIST);
  });

  it('should be able to click on the workspace box and check weather the new workspace page is visible or not.', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).should(
      'be.visible'
    );
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).should('be.visible').should('include', 'Create');
    // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).should('include', 'Create');
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Name_input).should(
      'be.visible'
    );
    cy.go('back');
  });

  it('should be able to click on the workspace and create workspace by entering details and check weather the new workspace which is created is visible or not', () => {
    cy.intercept(
      'https://zlinkbackend.zaions.com/api/zlink/v1/user/workspaces',
      (_request) => {
        if (_request.method === API_METHODS.GET) {
          _request.continue((res) => {
            const resBody = res.body as {
              success: boolean;
              message: string;
              data: any;
              error: any;
            };
            // console.log({ res, resBody });

            expect(resBody.success).to.be.true;

            expect(resBody?.data?.items).to.have.length.gt(0);
          });
        }

        // api request should be of type post, in order to check the result of newly created workspace data
        if (_request.method === API_METHODS.POST) {
          _request.continue((_response) => {
            const _responseBody = _response.body as {
              success: boolean;
              message: string;
              data: any;
              error: any;
            };
            expect(_responseBody?.data?.item?.id).to.exist;
            const _workSpaceName = _responseBody?.data?.item?.workspaceName;

            expect(_workSpaceName).to.eq(
              WORKSPACE_DETAILS.Sections.Workspace_Name,
              'this message shows in both cases true or false, it shows in front of the assertion'
            );
          });
        }
      }
    );

    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Name_input).type(
      WORKSPACE_DETAILS.Sections.Workspace_Name
    );
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Timezone).click();

    cy.contains(
      SELECTORS.PAGES.WORKSPACE_PAGE.Dropdown_Timezone,
      WORKSPACE_DETAILS.Sections.Timezone_Country
    ).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).click();
  });

  it('should not be able to create a new workspace by not entering the workspace name ', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Timezone).click();
    // cy.contains('(UTC+05:00) Islamabad, Karachi');
    cy.contains(
      SELECTORS.PAGES.WORKSPACE_PAGE.Dropdown_Timezone,
      WORKSPACE_DETAILS.Sections.Timezone_Country
    ).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).should(
      'not.be.enabled'
    );
  });
  // TODO: need to add separate selectors for favorite icon OWS Elements and in FWS Elements
  // !: Unable to complete test, facing some problems while making assertions.
  it('should be able to add workspace to favorite workspaces and check weather it is visible or not in favorites.', () => {
    // TODO: aqeel add selectors in js file
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.FWS_ElEMENT_SECTION).then(
      (oldFavoriteWorkspaces) => {
        const oldFavoriteWorkspacesLength = oldFavoriteWorkspaces.length;
        console.log(oldFavoriteWorkspacesLength)
        cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.OWS_Element_Selector).then(
          (result) => {
            if (result.length > 0) {
              const firstWorkspaceElement = result[1];

              // TODO: create a "attributeKeys" constant and move this there
              const workspaceCyEsAttributeVal =
                firstWorkspaceElement.getAttribute(
                  SELECTORS.PAGES.ATTRIBUTE_KEYS.CYPRESS_SELECTOR
                );
              const workspaceId =
                workspaceCyEsAttributeVal?.replace(
                  SELECTORS.PAGES.ATTRIBUTE_KEYS.OWS_COMMON_SELECTOR_EXCEPT_ID,
                  ''
                ) ?? '';
              expect(workspaceId).to.exist.and.not.eq('');

              // !ERROR: Unable to make a good selector type and also getting 2 elements when clicking in a specific element ID
              // ztes__wlp-owned-ws-card-6586c192a56e3
              cy.get(
                `[cy-es="${SELECTORS.PAGES.ATTRIBUTE_KEYS.OWS_COMMON_SELECTOR_EXCEPT_ID}${workspaceId}"]`
              ).then((result) => {
                // if (
                //   SELECTORS.PAGES.WORKSPACE_PAGE.Favorite_Icon_NWC.length !== 0
                // ) {
                const FavIconEl = result.find(SELECTORS.PAGES.WORKSPACE_PAGE.Favorite_Icon_NWC)
                console.log(FavIconEl);
                cy.wrap(FavIconEl).click()
                ;
                // if (FavIconEl.length !== 0) {
                //   cy.get()
                // }

                // } else {
                //   cy.log('favorite icon does not exist');
                // }
                cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.FWS_ElEMENT_SELECTOR).then(
                  // .find(SELECTORS.PAGES.WORKSPACE_PAGE.Favorite_Icon_NWC)
                  // .click();
                  (updatedFavoriteWorkspaces) => {
                    const updatedFavoriteWorkspacesLength =
                      updatedFavoriteWorkspaces.length;
  
                    expect(updatedFavoriteWorkspacesLength).to.be.greaterThan(
                      oldFavoriteWorkspacesLength
                    );
                    cy.get(
                      SELECTORS.PAGES.WORKSPACE_PAGE.FAVORITE_WS_CARD(workspaceId)
                    ).should('exist');
                    // !ERROR Unable to make a good selector type - Ahsan Explained, aqeel bahi need to update
                    cy.get(
                      `[cy-es="ztes__wlp-card-favorites-btn-${workspaceId}"]`
                    ).click();
  
                    cy.get(
                      SELECTORS.PAGES.WORKSPACE_PAGE.FWS_ElEMENT_SELECTOR
                    ).then((finalFavoriteWorkspaces) => {
                      const finalFavoriteWorkspacesLength =
                        finalFavoriteWorkspaces.length;
  
                      expect(finalFavoriteWorkspacesLength).to.eq(
                        oldFavoriteWorkspacesLength
                      );
                      expect(finalFavoriteWorkspacesLength).to.lessThan(
                        updatedFavoriteWorkspacesLength
                      );
                      expect(finalFavoriteWorkspacesLength + 1).to.eq(
                        updatedFavoriteWorkspacesLength
                      );
                      expect(updatedFavoriteWorkspacesLength - 1).to.eq(
                        finalFavoriteWorkspacesLength
                      );
                    });
                  }
                );
              });
            }
          }
        );
      }
    );
  });

  it.only('should be able to click on a specific card and delete the card and check weather the card is removed or not', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.OWS_Element_Selector)
      .should('have.length.above', 0)
      .then((result) => {
        // you said second, but you are selecting 3rd element (index start from 0)
        const SecondElement = result[1];

        // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.OWS_Element_Selector)
        //   .eq(1)
        //   .find(SELECTORS.PAGES.WORKSPACE_PAGE.Ellipses_General_Selector)
        //   .click();
        cy.wrap(SecondElement)
          .find(SELECTORS.PAGES.WORKSPACE_PAGE.Ellipses_General_Selector)
          .click();

        cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Dlt_Btn).click();
        cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Delete_Btn_Alert).click();
        // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).should('have.length', initialLength - 1);
        // cy.log(`Workspace Length After Deletion: ${initialLength - 1}`);
      });
    // cy.deleteCardAndAssertLength();
    // new workspace card (NWC)
    cy.intercept(
      'https://zlinkbackend.zaions.com/api/zlink/v1/user/workspaces/65800053529b5',
      (_request) => {
        if (_request.method === API_METHODS.DELETE) {
          _request.continue((_response) => {
            const resBody = _response.body as {
              success: boolean;
              message: string;
              data: any;
              error: any;
            };
            // console.log({ res, resBody });

            expect(resBody.success).to.be.true;

            expect(resBody?.data?.items).to.have.length.gt(0);
          });
        } else {
          cy.log('INCORRECT ENTRIES ENTERED');
        }
      }
    );
  });
  it('should be able to click on a specific card and delete the card and click on setting and check we can update workspace by making a change in the name or timezone', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.OWS_Element_Selector).should(
      'have.length.above',
      0
    );
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.OWS_Element_Selector);
    // cy.deleteCardAndAssertLength();
    // new workspace card (NWC)
    cy.intercept(
      'https://zlinkbackend.zaions.com/api/zlink/v1/user/workspaces/65800053529b5',
      (_request) => {
        if (_request.method === API_METHODS.DELETE) {
          _request.continue((_response) => {
            const resBody = _response.body as {
              success: boolean;
              message: string;
              data: any;
              error: any;
            };
            // console.log({ res, resBody });

            expect(resBody.success).to.be.true;

            expect(resBody?.data?.items).to.have.length.gt(0);
          });
        } else {
          cy.log('INCORRECT ENTRIES ENTERED');
        }
      }
    );
  });
});
