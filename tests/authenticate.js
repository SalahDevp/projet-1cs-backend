async function authenticate(driver, token, userid) {
  await driver.executeScript(
    (userid, token) => {
      localStorage.setItem("userId", userid);
      localStorage.setItem("token", token);
    },
    userid,
    token
  );
}

module.exports = authenticate;
