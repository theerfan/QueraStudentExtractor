const getTransliteration = require("./nodeTransliteration");

async function findPeople (document)
{
    people = {};
    peopleInTables = document.getElementsByTagName("tr")
    for (let i=1; i < peopleInTables.length -1; i++)
    {
        try {
        currentPerson = peopleInTables[i];
        currentPersonTags = currentPerson.getElementsByTagName("td");
        idTag = currentPersonTags[0];
        nameTag = currentPersonTags[1];
        emailTag = currentPersonTags[2];
        id = idTag.getElementsByTagName("div")[0].firstElementChild.value;
        let name = nameTag.textContent.trim().replace(/\d+/, '');
        
        if (name.match(/[a-zA-Z]+/))
        {
            await getTransliteration(name).then((answer) =>
            {
                name = answer;
            }).catch((err) =>{
                console.log(err);
            })
        }
        email = emailTag.getElementsByTagName("div")[0].textContent.trim();
        people[id] = {name, email}
        }
        catch (err)
        {
            /** Why is this here? Any man in his right mind would ask,
                and the answer is simple, if you run this script in a Node app,
                peopleInTables" will have one useless extra item in it which will cause a problem,
                which is not the case in chrome.
                And even though I've split the scripts, I really should make the reason
                for this distinction appear somewhere.
                */
            console.log("It's that one extra element, innit?");
            console.log("err");
        }
    }
    return people;
}

// findPeople("mamad fatemi");

module.exports = findPeople;