const postsContainer = document.getElementById('postsContainer');

function createPostHtml(posts) {
    return ` <div class="post" id="${posts.id}">
             <a href="#">
                <h2 class="listHeader">${posts.title}</h2></a> 
             <hr>
            <p class="shortDescription">
                ${posts.shortDescription}
            </p>
            <div class="buttonDate">
                <div class="buttonContainer">
                    <div class="plusVotes">+${posts.upvotes}</div>
                    <button id="upVote"><img src="pictures/arrowup.png"></button>
                    <div class="minusVotes">-${posts.downvotes}</div>
                    <button id="downVote"><img src="pictures/arrowdown.png"></button>
                </div>
            </div>
            <p class="datePost">${new Date(posts.date)}</p>
        </div>
        `;
};

const posts = [
    {
        id: 1,
        title: "Once upon a time...",
        shortDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla",
        longDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla skdhf kfsdhk dskjhsdkjf skjhfskj djhf sdkjf khsdfjds kfhdskf djskf fsfds",
        date: 1641154589174,
        upvotes: 45,
        downvotes: 2
    },
    {
        id: 2,
        title: "Once upon a second time",
        shortDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla 2",
        longDescription: "There was a boy that lived on a new planned called Nubmadreal, blablablabla 2 jhkdsk jdshk dhsfkdj hfjh dfskdhkjdshfdks jhk kdshewiurewi4y 437 4875 y4387 4378",
        date: 1641154589174,
        upvotes: 454,
        downvotes: 22
    },
    {
        id: 3,
        title: "1231231",
        shortDescription: "123123",
        longDescription: "123123123",
        date: 1641154589174,
        upvotes: 454,
        downvotes: 22
    }
];

for (let i = 0; i < posts.length; i++) {
    postsContainer.innerHTML += createPostHtml(posts[i]);
    //postsContainer.append(createPostHtml(posts[i]));//
}


