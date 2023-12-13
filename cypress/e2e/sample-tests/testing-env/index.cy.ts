import { ENVS } from '@trzEnv';

describe('Testing ENV', () => {
  it('Checking that ENV is working', () => {
    cy.log(`${ENVS?.loginDetails?.ahsanZaions?.token?.length}`);
    cy.log(`${ENVS?.simple}`);
  });
});
