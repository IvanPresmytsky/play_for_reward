const authorizeMentor = (data, method) => new Promise(resolve => {
  const { username, password } = data;

  setTimeout(() => {
    if (password === '111') {
      resolve({
        ...data,
        message: `Successfull ${method} as a Mentor for ${username}`,
        players: [
          {
            id: 'palyer1',
            name: 'Player1',
            availableCategories: [
              {
                id: 'math',
                isSwitchedOn: true,
                games: [
                  {
                    id: 'addition',
                    isSwitchedOn: true,
                  },
                  {
                    id: 'subtraction',
                    isSwitchedOn: false,
                  },
                ],
              },
            ],
          }, {
            id: 'player2',
            name: 'Player2',
            availableCategories: [
              {
                id: 'math',
                isSwitchedOn: true,
                games: [
                  {
                    id: 'addition',
                    isSwitchedOn: false,
                  },
                  {
                    id: 'subtraction',
                    isSwitchedOn: true,
                  },
                ],
              },
            ],
          },
        ],
      });
    } else {
      resolve({
        error: `The password for user ${username} is incorrect`,
      });
    }
  }, 2000);
});


export default authorizeMentor;
