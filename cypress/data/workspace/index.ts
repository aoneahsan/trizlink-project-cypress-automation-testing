function generateRandomWord (): string {
  const length = Math.floor(Math.random() * 6) + 5; // Random length between 5 and 10 characters
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

export const DATA = {
  WORKSPACE_DETAILS: {
    Sections: {
      Workspace_Name: 'Zaions Work',
      Timezone_Country: 'Islamabad'
    },
    UPDATED_DATA: {
      WORKSPACE_NAME: (): string => {
        return generateRandomWord();
      }
    }
  }
} as const;
