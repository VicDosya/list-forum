let myListContainer = Array.from(document.getElementsByClassName('myListContainer'));
let myListHeaders = Array.from(document.getElementsByClassName('listHeader'));
let myShortDescriptions = Array.from(document.getElementsByClassName('shortDescription'));
let myLongDescriptions = Array.from(document.getElementsByClassName('longDescription'));
let myPlusVotes = Array.from(document.getElementsByClassName('plusVotes'));
let myMinusVotes = Array.from(document.getElementsByClassName('minusVotes'));
let myDates = Array.from(document.getElementsByClassName('datePost'));

const posts = [
    {
        title: "Once upon a time...",
        shortDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla",
        longDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla skdhf kfsdhk dskjhsdkjf skjhfskj djhf sdkjf khsdfjds kfhdskf djskf fsfds",
        date: 1641154589174,
        upvotes: 45,
        downvotes: 2
    },
    {
        title: "Once upon a second time",
        shortDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla 2",
        longDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla 2 jhkdsk jdshk dhsfkdj hfjh dfskdhkjdshfdks jhk kdshewiurewi4y 437 4875 y4387 4378",
        date: 1641154589174,
        upvotes: 454,
        downvotes: 22
    },
];


for (let i = 0; i < 10; i++) {
    myListHeaders[i].innerText = posts[i].title;
    myShortDescriptions[i].innerText = posts[i].shortDescription;
    myDates[i].innerText = posts[i].date;
    myPlusVotes[i].innerText = posts[i].upvotes;
    myMinusVotes[i].innerText = posts[i].downvotes;
};