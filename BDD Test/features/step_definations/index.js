const { expect } = require("chai");
const { Given} = require("@cucumber/cucumber");
const { Builder, By, until, } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

// 1 
Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");

  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.quit();
});

//2
Given("Test search functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(delay);
  await driver.quit();
});

//3
Given("Test add hotel to favorite functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("favouriteBtn")).click();
  await driver.sleep(delay);
  await driver.quit();
});

//4
Given("Test sort hotel list functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("highToLowBtn")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("lowToHighBtn")).click();
  await driver.sleep(delay);
  await driver.quit();
});

//5
Given("Test choose hotel functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("chooseBtn")).click();
  await driver.sleep(delay);
  await driver.quit();
});

//6
Given("Test share hotel functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("chooseBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("shareBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("facebookBtn")).click();
  await driver.sleep(1000);
  await driver.findElement(By.id("shareBtn")).click();
  await driver.sleep(delay);
  await driver.quit();
});

//7
Given("Test select hotel room functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("chooseBtn")).click();
  await driver.sleep(delay);
  await driver.executeScript("window.scrollTo(0,document.body.scrollHeight/5)");
  await driver.findElement(By.id("selectRoomBtn")).click();
  await driver.sleep(delay);  
  await driver.quit();
});

//8
Given("Test post review functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("chooseBtn")).click();
  await driver.sleep(delay); 
  // await driver.findElement(By.id("rating")).sendKeys(2);
  // await driver.sleep(1000);
  await driver.executeScript("window.scrollTo(0,document.body.scrollHeight/1.4)");
  await driver.sleep(delay); 
  await driver.findElement(By.id("review")).sendKeys("this hotel is best");
  await driver.sleep(1000);
  await driver.findElement(By.id("postReviewBtn")).click();
  await driver.quit();
});

//9
Given("Test reserve hotel room functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 5000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("search")).sendKeys("Pokhara");
  await driver.findElement(By.id("LetSGo")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("chooseBtn")).click();
  await driver.sleep(delay);
await driver.executeScript("window.scrollTo(0,document.body.scrollHeight/5)");
  await driver.sleep(delay);
  await driver.findElement(By.id("selectRoomBtn")).click();
  await driver.sleep(2000);  
  await driver.findElement(By.id("reserveBtn")).click();
  await driver.sleep(delay);  
  await driver.quit();
});

//10
Given("Test User Hotel Booking functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin148@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("AuthForm")), 5000);
  expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
  await driver.findElement(By.id("myBookingsBtn")).click();
  await driver.sleep(delay);
  await driver.executeScript("window.scrollTo(0,document.body.scrollHeight/2)");
  await driver.sleep(delay);
  await driver.quit();
});

//11
Given("Test user profile functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");

  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin148@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("profileBtn")).click();
  await driver.sleep(2000);
  await driver.executeScript("window.scrollTo(0,document.body.scrollHeight/9)");
  await driver.sleep(delay);
  await driver.quit();
});

// //12
Given("Test change user password functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");

  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin148@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("profileBtn")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("changePsdBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("oldPassword")).sendKeys("123456");
  await driver.findElement(By.id("newPassword")).sendKeys("123456");
  await driver.findElement(By.id("cPassword")).sendKeys("123456");
  await driver.findElement(By.id("viewBtn")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("updatePasswordBtn")).click();
  await driver.sleep(delay);
  await driver.quit();
});

//13
Given("Test admin login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");

  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("user01@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("logOutBtn")).click();
  await driver.sleep(2000);
  await driver.quit();
});

//14
Given("Test view favorite hotel functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");

  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("dangalsabin148@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("favoriteBtn")).click();
  await driver.sleep(2000);
  await driver.findElement(By.id("viewBtn")).click();
  await driver.sleep(delay);
  await driver.quit();
});

//15
Given("Test view specfic hotel bookings functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");

  await driver.findElement(By.id("SignInBtn")).click();
  await driver.findElement(By.id("email")).sendKeys("hotelorchid@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("bookings")).click();
  await driver.sleep(delay);
  await driver.quit();
});





// //////////////////////////////*******************////////////
// // Given("Test register functionality", { timeout: 30000 }, async function () {
// //   let driver = await new Builder().forBrowser("chrome").build();
// //   await driver.get("http://localhost:3000");
// //   // find don't have an account and click on it

// //   await driver.findElement(By.id("SignInBtn")).click();
// //   await driver.findElement(By.id("NewregisterBtn")).click();
// //   await driver.findElement(By.id("fullname")).sendKeys("Sabin Dangal");
// //   await driver.findElement(By.id("username")).sendKeys("sabin1049");
// //   await driver.findElement(By.id("email")).sendKeys("dangalsabin1049@gmail.com");
// //   await driver.findElement(By.id("phone")).sendKeys("9847894278");
// //   await driver.findElement(By.id("password")).sendKeys("123456");
// //   await driver.findElement(By.id("password_confirmation")).sendKeys("123456");
// //   await driver.findElement(By.id("role")).sendKeys("user");

// //   await driver.findElement(By.id("loginBtn")).click();
// //   await driver.sleep(delay);
// //   await driver.wait(until.elementLocated(By.id("AuthForm")), 100000);
// //   expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
// //   await driver.quit();
// // });


// // //
// // Given("Test book hotel functionality", { timeout: 300000 }, async function () {
// //   let driver = await new Builder().forBrowser("chrome").build();
// //   await driver.get("http://localhost:3000");
// //   await driver.findElement(By.id("SignInBtn")).click();
// //   await driver.findElement(By.id("email")).sendKeys("dangalsabin147@gmail.com");
// //   await driver.findElement(By.id("password")).sendKeys("123456");
// //   await driver.findElement(By.id("loginBtn")).click();
// //   await driver.sleep(delay);
// //   await driver.wait(until.elementLocated(By.id("AuthForm")), 5000);
// //   expect(await driver.wait(until.elementLocated(By.id("AuthForm"))));
// //   await driver.findElement(By.id("search")).sendKeys("Pokhara");
// //   await driver.findElement(By.id("LetSGo")).click();
// //   await driver.sleep(2000);
// //   await driver.findElement(By.id("chooseBtn")).click();
// //   await driver.sleep(delay);
// //   await driver.executeScript("window.scrollTo(0,document.body.scrollHeight/7)");
// //   await driver.findElement(By.id("selectRoomBtn")).click();
// //   await driver.sleep(2000);
// //   await driver.findElement(By.id("reserveBtn")).click();
// //   await driver.findElement(By.id("fname")).sendKeys("Sabin");
// //   await driver.findElement(By.id("lname")).sendKeys("Dangal");
// //   // await driver.findElement(By.id("email")).sendKeys("dangalsabin149@gmail.com");
// //   await driver.findElement(By.id("phone")).sendKeys("9847124785");
// //   await driver.findElement(By.id("address")).sendKeys("Kathmandu");
// //  const res= await driver.findElement(By.id("termsaccept")).sendKeys(setTcChecked(true));
// //   await driver.executeScript("window.scrollTo(0,document.body.scrollHeight/7)");
// //   await driver.findElement(By.id("khaltiBtn")).click();
// //   await driver.sleep(delay);
// //   await driver.quit();
// // });

