const authorizePlayer = (data, method) => new Promise(resolve => {
  const { username, password } = data;

  setTimeout(() => {
    if (password === '111') {
      resolve({
        ...data,
        message: `Successfull ${method} as Player for ${username}`,
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
      });
    } else {
      resolve({
        error: `The password for user ${username} is incorrect`,
      });
    }
  }, 2000);
});

export default authorizePlayer;
