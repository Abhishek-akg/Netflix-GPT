export const checkValidData = (email, password) => {
  // const isNameValid =
  //   /^([A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})$/.test(
  //     name
  //   );

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //if (!isNameValid) return "Full Name is NOT Valid";
  if (!isEmailValid) return "Email must be like abcd@netflix.com";
  if (!isPasswordValid)
    return "Password must have an Uppercase character, a special character, a numeric character and should be of length 8 atleast";

  return null;
};
