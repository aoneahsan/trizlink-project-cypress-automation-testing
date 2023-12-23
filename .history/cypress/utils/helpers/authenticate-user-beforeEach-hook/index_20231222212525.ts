import { LOCAL_STORAGE_KEYS } from '@trzUtils/constants';
import { ENVS } from '@trzUtils/envKeys';

export const authenticateUserBeforeEachHook = (): void | never => {
  // as we need to have the login details in ENV file to continue hence, it will either return true or a error.
  if (
    (LOCAL_STORAGE_KEYS?.userAuthToken).length > 0 &&
    (ENVS?.loginDetails?.ahsanZaions?.token).length > 0
  ) {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS?.userAuthToken,
      ENVS?.loginDetails?.ahsanZaions?.token
    );
    localStorage.setItem(
      LOCAL_STORAGE_KEYS?.userAccountDetails,
      ENVS?.loginDetails?.ahsanZaions?.userDetails
    );
  } else {
    // TODO: aqeel please move the message in "messages" file
    throw new Error(
      'User login details not found, please make sure you have set the Cypress ENV properly.'
    );
  }
};
