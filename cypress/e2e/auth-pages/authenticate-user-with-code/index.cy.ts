import { LOCAL_STORAGE_KEYS } from '@trzConstants';
import { ENVS } from '@trzEnv';

describe('Authenticating User using Code', () => {
  it('Making Sure that user get redirected to signin page when login data is not set', () => {
    // cy.log(`${ENVS.LOGIN_DETAILS.AHSAN_ZAIONS.TRZ_UAD_AZ_K1}`);
    // cy.log(`${ENVS.simple}`);
    cy.visit('/app/workspaces');
  });

  it.only('making sure that user can see the protected/authenticated area once i have set the login details using code and visited the page', () => {
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
});
// export const AuthenticateUser = (): void => {
//   localStorage.setItem(
//     LOCAL_STORAGE_KEYS?.userAuthToken,
//     ENVS?.loginDetails?.ahsanZaions?.token
//   );
//   localStorage.setItem(
//     LOCAL_STORAGE_KEYS?.userAccountDetails,
//     ENVS?.loginDetails?.ahsanZaions?.userDetails
//   );
// }
