# QueraStudentExtractor

A basic Node.JS app (including the pure JS script) for teachers and teacher assistants to extract students list from a quera course's "Students list" page.
e.g [Sample Course Students Page](https://quera.ir/overview/course/0000/manage/student/)

## Getting Started

First things first, clone the project to any directory on your local machine that you want.
```
git clone https://github.com/theerfan/QueraStudentExtractor.git
```

### Prerequisites

In order to make use of the project's entire features, you'll need to install [Node.JS](https://nodejs.org/en/download/).
After adding npm and node to your PATH (for windows users), execute the following command in the project's local folder to install the necessary packages.

```
npm install 
```

## Usage

The app has two modes (actually three, but we'll get to that later). Either you have downloaded the [Sample Course](https://quera.ir/overview/course/0000/manage/student/),
or you just want to get it automatically from the internet.

So, for the offline mode, do this:
```
node app.js <Local address to the html file downloaded from quera>
```

And for the online mode, do this:
```
node app.js <Your email> <Your password> <The desired course's name, at least a distinct part of it>
```

The third mode, which is actually for the people who have no intentions of installing node and dealing with JavaScript too much,
it's completely understandable, JavaScript can be a headache to deal with.
For the mentioned people, after you've opened the [Sample Course Students Page](https://quera.ir/overview/course/0000/manage/student/), -whose 0000 part has to be replaced with the actual id of your desired quera course-, in chrome or firefox, press F12, go to the  console tab, then copy and paste the [chromeScript](https://github.com/theerfan/QueraStudentExtractor/blob/master/src/chromeScript.js)'s code in there.
After you press enter, you'll find a JavaScript object that you'll need to copy and paste into a new file while missing out on the automation and the transliteration that the node users can enjoy.


## Built With

* [NodeJS](https://nodejs.org/en/) 
* [jsdom](https://github.com/jsdom/jsdom) - For the actual extraction part
* [Selenium WebDriver](https://www.seleniumhq.org/download/) - Used to crawl quera.


## Authors

* **Erfan Abedi** - *all the work :)))* - [TheErfan](https://github.com/TheErfan)

## License

This project is masalan licensed under the MIT License

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

