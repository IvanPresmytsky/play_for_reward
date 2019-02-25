const loginPlayer = data => new Promise(resolve => {
  const { username, password } = data;

  setTimeout(() => {
    if (password === '111') {
      resolve({
        ...data,
        message: `Successfull athorization for ${username}`,
      });
    } else {
      resolve({
        error: `The password for user ${username} is incorrect`,
      });
    }
  }, 2000);
});


export default loginPlayer;
