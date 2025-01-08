const checkValidation = (name,email, password) => {
  const isUsernameValid = /^[a-zA-Z0-9_]{3,16}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

    if (!isEmailValid) {
      return "Email is not valid";
    }else if (!isPasswordValid) {
      return "Password is not valid";   
    }else if (!isUsernameValid) {
      return "name is not valid";   
    }else {
      return null;
    }


};

export default checkValidation;
