const postButton = document.getElementById('post-button')
postButton.addEventListener('click', function(){
    const inputText = document.getElementById('new-comment');

    if(inputText.value != '')
    {
        const commentContainer = document.getElementById('comment-container');
        const p = document.createElement('p');
        p.innerText = inputText.value;
        commentContainer.appendChild(p);
        inputText.value = '';
    }

    /*
        step 1: Add event Listener to the post button
        step 2: get the comment inside the text area
        step 3: set the comment inside the comment container
            3(a): get the comment container
            3(b): create a new element (p tag)
            3(c): set the text of the comment as innerText of the p tag
            3(d): add the p tag to parent container using appendChild
        step 4: Clear the text area 
    */

})

