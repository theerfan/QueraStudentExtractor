people = {};
peopleInTables = document.getElementsByTagName("tr")
for (let i=1; i < peopleInTables.length; i++)
{
    currentPerson = peopleInTables[i];
    currentPersonTags = currentPerson.getElementsByTagName("td");
    idTag = currentPersonTags[0];
    nameTag = currentPersonTags[1];
    emailTag = currentPersonTags[2];
    id = idTag.getElementsByTagName("div")[0].firstElementChild.value;
    name = nameTag.textContent.trim().replace(/\d+/, '');
    email = emailTag.getElementsByTagName("div")[0].textContent.trim();
    people[id] = {name, email}
}