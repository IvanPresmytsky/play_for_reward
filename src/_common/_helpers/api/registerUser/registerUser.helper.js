const registerUser = (data, userType) => new Promise(resolve => {
  const { username, mentorName, password } = data;

  setTimeout(() => {
    if (password === '111') {
      resolve({
        ...data,
        message: `Successfull athorization as ${userType} for ${username}.
        ${mentorName && ` Your mentor is ${mentorName}`}`,
      });
    } else {
      resolve({
        error: `The password for user ${username} is incorrect`,
      });
    }
  }, 2000);
});

export default registerUser;
