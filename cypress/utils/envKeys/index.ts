// login credentials of ahsan@zaions.com
export const ENVS = {
  loginDetails: {
    ahsanZaions: {
      token: String(Cypress.env('loginDetails')?.ahsanZaionsAccount?.token),
      userDetails: String(
        Cypress.env('loginDetails')?.ahsanZaionsAccount?.userDetails
      ),
    },
  },
  simple: String(Cypress.env('simple') ?? 'simple key value not set in env'),
} as const;
