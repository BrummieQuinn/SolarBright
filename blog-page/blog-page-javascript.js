// js being used for the send-us-an-article form
//can't get the two functions to work together! the submitForm cancels out the completeForm
function completeForm(event)    {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const article = document.getElementById('article').value;
    console.log(name, email, article);
}
/* function submitForm()  {
    alert('Thanks for getting in touch with us!');
} */