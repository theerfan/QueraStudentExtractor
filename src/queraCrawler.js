const chrome = require("selenium-webdriver/chrome");
const path = require('chromedriver').path;
const {By} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const writeToFile = require("./writeToJSON");
const loginURL = "https://quera.ir/accounts/login/";
const overviewURL = "https://quera.ir/overview/";
const overviewCourseURL = overviewURL + "course/";
const manageStudent = "/manage/student";
const loginButtonClass = "ui fluid large teal submit button";
const courseCardClass = "ui small link card course-card";

async function login(email, password, courseName)
{
    let service = new chrome.ServiceBuilder(path).build();
    let source;
    chrome.setDefaultService(service);
    let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(new chrome.Options().headless()).build();
    try {
        await driver.get(loginURL);
        await driver.findElement(By.name("login")).sendKeys(email);
        await driver.findElement(By.name("password")).sendKeys(password);
        await driver.findElement(By.className(loginButtonClass)).click();
        await driver.get(overviewURL);
        let elements = await driver.findElements(By.className(courseCardClass));

        for (let entry of elements)
        {
            var innerHTML = await entry.getAttribute('innerHTML');
            if (innerHTML.toString().includes(courseName)){
                courseNumber = await entry.getAttribute('href');
                courseNumber = courseNumber.split('/');
                courseNumber = courseNumber[courseNumber.length - 2]
                studentURL = overviewCourseURL + courseNumber + manageStudent;
                await driver.get(studentURL);
                source = await driver.getPageSource();
                console.log(source);   
                break;
            }
        }
    } 
    catch (err){
        reject(err);
    }
    finally {
        if (!err)
            await writeToFile(source);
        await driver.quit();
    }
}

module.exports = login;


/**
 * REDACTED, cause it couldn't bypass quera's auth system.
 */
    // const tokenType = "csrfmiddlewaretoken";
    // return new Promise((resolve, reject) => {
    //     request.get(loginURL, (err, res, body) => {
    //         if (err) reject(err);
    //         if (res.statusCode !== 200) reject("whats");
    //         var document = new jsdom.JSDOM(body).window.document;
    //         var token = document.getElementsByName(tokenType)[0].value;
    //         //csrfmiddlewaretoken: token,

    //         request.post(loginURL, 
    //             { login: email, password: pass},
    //             (err, res, body) => {
    //                 if(err) reject(err);
    //                 if (res.statusCode !== 200) reject("wronglogin");
    //                 console.log(body);
    //             });
    //     })
    // })