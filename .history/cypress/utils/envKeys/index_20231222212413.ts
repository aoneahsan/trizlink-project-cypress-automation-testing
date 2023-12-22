// login credentials of ahsan@zaions.com
export const ENVS = {
  loginDetails: {
    ahsanZaions: {
      token:
        Cypress.env('loginDetails')?.ahsanZaionsAccount?.token !== undefined
          ? String(Cypress.env('loginDetails')?.ahsanZaionsAccount?.token)
          : '',
      userDetails:
        Cypress.env('loginDetails')?.ahsanZaionsAccount?.userDetails !==
        undefined
          ? String(Cypress.env('loginDetails')?.ahsanZaionsAccount?.userDetails)
          : ''
    }
  },
  simple: String(Cypress.env('simple') ?? 'simple key value not set in env')
} as const;
