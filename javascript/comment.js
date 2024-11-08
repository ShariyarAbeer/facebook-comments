document.getElementById("post-comment").addEventListener("click",function (){

    // get the text box and value 
    const newComment = document.getElementById("new-comment");
    const comment = newComment.value;
    // get the id of text where to post 
    const createPost = document.getElementById("comment-container");

    const p = document.createElement("p");
    const h3 = document.createElement("h3");

    let userReview = "User Review";
    p.innerText = comment;
    h3.innerText = userReview;

    createPost.appendChild(h3);
    createPost.appendChild(p);

    newComment.value = " ";


});