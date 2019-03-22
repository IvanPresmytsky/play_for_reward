const authorizeUser = (data, userType, method) => new Promise(resolve => {
  const { username, password } = data;

  setTimeout(() => {
    if (password === '111') {
      resolve({
        ...data,
        message: `Successfull ${method} as ${userType} for ${username}`,
      });
    } else {
      resolve({
        error: `The password for user ${username} is incorrect`,
      });
    }
  }, 2000);
});


export default authorizeUser;
