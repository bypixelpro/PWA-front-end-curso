if(!window.Promise){
    window.Promise = Promise;
}

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(function(){
        console.log('SW registrado correctamente!');
    });
}

var promise = new Promise(function(resolve, reject){
setTimeout(function(){
//resolve('Mensaje 1');
reject({code:500, message: 'Error 500 de servidor'});
}, 4000);
});

promise.then(function(texto){
    console.log(texto);
}).catch(function(error){
    console.log(error.code, error.message);
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(function(response){
    return response.json();
}).then(function(post){
    console.log(post);
}).catch(function(error){
    console.log(error);
});

console.log('Mensaje 2');

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Mi primer post',
        body: 'Con body',
        userId: 2
    }),
    headers:{
        "Content-type": "application/json; charset-=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));
