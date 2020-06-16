import { getAuthForm } from './authForm/authForm.js';

document.querySelector('.content').innerHTML = getAuthForm();
const messageForm = document.forms.messageForm;
const registrationForm = document.forms.registrationForm;
const getButton = document.querySelector('.getButton');

const apiKey = 'AIzaSyCnXf0PzlHyOqtHKsmyC4oYUPVBBKjwMK4'

const post = {
    message: ''
}

const user = {
    email: '',
    password: ''
}

const getData = (e) => {
    post[e.target.name] = e.target.value;
}
const getUserData = (e) => {
    user[e.target.name] = e.target.value
}

const signUp = (e) => {
    e.preventDefault();
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
            method: "POST", //"POST", "PUT", "PATCH", "DELETE"
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('user', JSON.stringify({token: data.idToken}))
        })
}

const createPost = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('user')).token;
    fetch(`https://asasdasdasd-dba3a.firebaseio.com/post.json?auth=${token}`,
        {
            method: "POST", //"POST", "PUT", "PATCH", "DELETE"
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))

}

const getPosts = () => {
   
    fetch(`https://asasdasdasd-dba3a.firebaseio.com/post.json`,
        {
            method: "GET", //"POST", "PUT", "PATCH", "DELETE"
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
}

getButton.addEventListener('click', getPosts);
messageForm.addEventListener('input', getData);
registrationForm.addEventListener('input', getUserData);
registrationForm.addEventListener('submit', signUp);
messageForm.addEventListener('submit', createPost);











// const body = {
//     body: "quisasdsadsuscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
//     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     userId: 11
// }


// =========== POST ========================
// fetch('https://asasdasdasd-dba3a.firebaseio.com/post.json', {
//     method: "PATCH", //"POST", "PUT", "PATCH", "DELETE"
//     body: JSON.stringify(body),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))

