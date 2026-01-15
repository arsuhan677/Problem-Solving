function login(email, password) {
  if (!email || !password) {
    return "All are required faild";
  }
  if (email === "arsuhan677@gmail.com" && password === "12345678") {
    return "login successfully.!";
  } else {
    return "envalid email and password";
  }
}
