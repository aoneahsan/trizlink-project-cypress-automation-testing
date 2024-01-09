export const DATA = {
  WORKSPACE_DETAILS: {
    Sections: {
      Workspace_Name: 'Zaions Work',
      Timezone_Country: 'Islamabad',
    },
    UPDATED_DATA: {
      WORKSPACE_NAME: function generateRandomName (): string {
        const generateRandomWord = (): string => {
          const length = Math.floor(Math.random() * 5) + 5; // Random length between 5 and 10 characters
          const alphabet = 'abcdefghijklmnopqrstuvwxyz';
          let randomWord = '';
          for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            randomWord += alphabet.charAt(randomIndex);
          }
          return randomWord;
        };

        const word1 = generateRandomWord();
        const word2 = generateRandomWord();

        return `${word1} ${word2}`;
      }
    }
  }
} as const;
