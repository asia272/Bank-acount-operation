export const fakeLoginAPI = async (email, password, storeUser) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (
    storeUser &&
    storeUser.email === email &&
    storeUser.password === password
  ) {
    return { success: true, user: storeUser };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
};

export const fakeSignupAPI = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return { success: true, user: formData };
};
