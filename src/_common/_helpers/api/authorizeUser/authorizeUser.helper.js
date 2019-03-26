const authorizeUser = (data, userType, method) => new Promise(resolve => {
  const { username, password } = data;

  setTimeout(() => {
    if (password === '111') {
      resolve({
        ...data,
        message: `Successfull ${method} as ${userType} for ${username}`,
        availableCategories: [
          {
            id: 'math',
            games: ['addition', 'subtraction'],
            name: 'math',
            description: 'math games',
          },
        ],
        availableGames: [
          {
            category: 'math',
            id: 'addition',
            name: 'addition',
            description: 'add digits to get correct result',
          },
          {
            category: 'math',
            id: 'subtraction',
            name: 'subtraction',
            description: 'subtract digits to get correct result',
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


export default authorizeUser;
