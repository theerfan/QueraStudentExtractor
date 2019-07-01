module.exports = function findPeople (document)
{
    people = {};
    peopleInTables = document.getElementsByTagName("tr")
    for (let i=1; i < peopleInTables.length; i++)
    {
        try {
        currentPerson = peopleInTables[i];
        currentPersonTags = currentPerson.getElementsByTagName("td");
        idTag = currentPersonTags[0];
        nameTag = currentPersonTags[1];
        emailTag = currentPersonTags[2];
        id = idTag.getElementsByTagName("div")[0].firstElementChild.value;
        name = nameTag.textContent.trim();
        email = emailTag.getElementsByTagName("div")[0].textContent.trim();
        people[id] = {name, email}
        }
        catch (err)
        {
            /** Why is this here? Any man in his right mind would ask,
                and the answer is simple, if you run this script in a Node app,
                peopleInTables" will have one useless extra item in it which will cause a problem,
                which is not the case in chrome.*/
            console.log("It's that one extra element, innit?");
            console.log("err");
        }
    }
    return people;
}