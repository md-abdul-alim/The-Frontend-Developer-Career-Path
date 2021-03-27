/*
fetch('example.txt')
    .then(response => {
        // console.log(response);
        // console.log(response.text());
        return response.text();
    })
    .then(text => {
        console.log(text)
        const div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
    })
*/


///////////////JSON EXAMPLE//////////////
/*
const user = {
    name: 'Milon',
    age: 26
}
const json = JSON.stringify(user)
console.log(json)
*/


////Fetch data from a json file and show on html///
//Example 1
/*
fetch('people1.json')
    .then(response => response.json())
    .then(json => {
        json.forEach(person => {
            const div = document.createElement('div')
            div.innerHTML = person.name
            document.body.appendChild(div);
        });
    })

//Example 2

fetch('people2.json')
    .then(response => response.json())//return json response
    .then(json => {
        json.forEach(person => {
            const div = document.createElement('div')
            div.innerHTML = `${person.name} is ${person.age}`;
            document.body.appendChild(div);
        })
    })
*/


////Fetch data from online api////
/*
fetch('https://jsonplaceholder.typicode.com/photos/5') // Add the URL
	.then(res => res.json()) // Process the data
	.then(json => { 
		const img = document.createElement('img');
		img.src = json.url; // Set the image source to the image URL value
		document.body.appendChild(img);
        console.log(json);
	});
*/


///Json error handling///
/*
fetch('example.txt')
    // .then(res => res.text())
    .then(res => {throw 404})
    .then(text => {
        const div = document.createElement('div')
        div.innerHTML = text;
        document.body.appendChild(div)
    })
    .catch(err => console.error(err))
*/


// Async Await //
/*
const getData = async () => {
    const response = await fetch('people1.json');
    const data = await response.json();
        
    data.forEach( person => {
        const div = document.createElement('div');
        div.innerHTML = person.name;
        document.body.appendChild(div);
    })
}
getData();
*/

// Fetch Blog posts using async/await (GET) //

//function 1
async function getPosts1(){
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postsPromise.json();
    console.log(posts)

    let html = "";

    posts.forEach(post => {// posts.slice(0,5).forEach(post => {
        const title = post.title;
        const body = post.body;

        html +=`
            <div class = 'post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
        `;
    });
    document.body.innerHTML = html
}
getPosts1()

//function 2
//Error Handling of async/await
async function getPosts2(){
    const postsPromise = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
    if(postsPromise.ok){//if(!postsPromise.ok){
        const posts = await postsPromise.json();
        let html = "";
        posts.slice(0,5).forEach(post => {
            const title = post.title;
            const body = post.body;

            html +=`
                <div class = 'post'>
                    <h3>${title}</h3>
                    <p>${body}</p>
                </div>
            `;
        });
        document.body.innerHTML = html
    }else{
        console.error(`Error: ${postsPromise.status}`)
    }
}
getPosts2()