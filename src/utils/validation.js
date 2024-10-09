export const validationForm = (email, password) => {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/.test(email);
  const validPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!validEmail) return "Email ID is not valid";
  if (!validPassword) return "Password is not valid";

  return null;
};
