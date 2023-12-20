import { ENVS } from '@trzCy/utils/envKeys';
import { SELECTORS } from '@trzCy/utils/selectors/element-selector';
import { WORKSPACE } from '@trzCy/data/user';
import { LOCAL_STORAGE_KEYS } from '@trzCy/utils/constants';
import { API_METHODS } from '@trzCy/utils/enums';
import { WORKSPACE_DATA } from '@trzCy/data/workspace-data';

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
      (req) => {
        if (req.method === API_METHODS.GET) {
          req.continue((res) => {
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
      }
    );
    // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).should(
    //   'have.length',
    //   1
    // );
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Name_input).type(
      WORKSPACE_DATA.Sections.Workspace_Name
    );
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Timezone).click();
    // cy.contains('(UTC+05:00) Islamabad, Karachi');
    cy.contains(
      SELECTORS.PAGES.WORKSPACE_PAGE.Dropdown_Timezone,
      WORKSPACE_DATA.Sections.Timezone_Country
    ).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).click();
    // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).should(
    //   'have.length',
    //   2
    // );
    cy.intercept(
      'https://zlinkbackend.zaions.com/api/zlink/v1/user/workspaces',
      (_request) => {
        console.log({ _request });
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
              WORKSPACE.Sections.Workspace_Name,
              'this message shows in both cases true or false, it shows in front of the assertion'
            );
          });
        }
      }
    );
    // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).click();
  });
  it('should not be able to create a new workspace by not entering the workspace name ', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Timezone).click();
    // cy.contains('(UTC+05:00) Islamabad, Karachi');
    cy.contains(
      SELECTORS.PAGES.WORKSPACE_PAGE.Dropdown_Timezone,
      WORKSPACE_DATA.Sections.Timezone_Country
    ).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).should(
      'not.be.enabled'
    );
  });
  it('should be able to add workspace to favorite workspaces and check weather it is visible or not in favorites.', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Name_input).type(
      WORKSPACE_DATA.Sections.Workspace_Name
    );
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Timezone).click();
    // cy.contains('(UTC+05:00) Islamabad, Karachi');
    cy.contains(
      SELECTORS.PAGES.WORKSPACE_PAGE.Dropdown_Timezone,
      WORKSPACE_DATA.Sections.Timezone_Country
    ).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Favorite_Icon_NWC).last().click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Favorite_Workspace_Section).should(
      'have.length',
      4
    );
    // need to discuss with ahsan brother.
    cy.get('[cy-es="ztes__wlp-favorite-ws-card-657d692143cc1"]').should(
      'have.id',
      '657c8631819d8'
    );
  });

  // Cypress.Commands.add('deleteCardAndAssertLength', () => {
  //   cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).should('have.length').then((initialLength) => {
  //     cy.log(`Initial Workspace Length: ${initialLength}`);
  //     cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).eq(2).find(SELECTORS.PAGES.WORKSPACE_PAGE.Ellipses_General_Selector).click();
  //     cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Dlt_Btn).click();
  //     cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Delete_Btn_Alert).click();
  //     // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).should('have.length', initialLength - 1);
  //     // cy.log(`Workspace Length After Deletion: ${initialLength - 1}`);
  //   })
  // })
  it.only('should be able to click on a specific card and delete the card and check weather the card is removed or not', () => {
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Workspace_Card).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Name_input).type(
      WORKSPACE_DATA.Sections.Workspace_Name
    );
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Timezone).click();
    // cy.contains('(UTC+05:00) Islamabad, Karachi');
    cy.contains(
      SELECTORS.PAGES.WORKSPACE_PAGE.Dropdown_Timezone,
      WORKSPACE_DATA.Sections.Timezone_Country
    ).click();
    cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Create_Btn_New_Workspace).click();
    Cypress.Commands.add('deleteCardAndAssertLength', () => {
      cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).should('have.length').then((initialLength) => {
        cy.log(`Initial Workspace Length: ${initialLength}`);
        cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).eq(2).find(SELECTORS.PAGES.WORKSPACE_PAGE.Ellipses_General_Selector).click();
        cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Workspace_Dlt_Btn).click();
        cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Delete_Btn_Alert).click();
        // cy.get(SELECTORS.PAGES.WORKSPACE_PAGE.Owned_Workspace_Section).should('have.length', initialLength - 1);
        // cy.log(`Workspace Length After Deletion: ${initialLength - 1}`);
      })
    })
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
          console.log('INCORRECT ENTERIES ENTERED')
        }
        console.log(_request);
      }
    )
  })
})
