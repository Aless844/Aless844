function chargeBreedsPhotos() {
    var connection = new XMLHttpRequest();
    connection.responseType = 'json';
    connection.onreadystatechange = function () {
        if (connection.readyState === 4 && connection.status === 200) {
            const dogs = connection.response;
            load(dogs);
        }
    };
    connection.open('GET','https://dog.ceo/api/breed/'+value+'/images\n');
    connection.send();
}

function send(value){
    var connectionB = new XMLHttpRequest();
    connectionB.responseType = 'json';
    connectionB.onreadystatechange = function () {
        if (connectionB.readyState === 4 && connectionB.status === 200) {
            const send = connectionB.response;
            var msg = document.querySelector(`#message_${value}`);
            for (let i=0; i<=100; ++i) {
                msg.innerHTML = `
                    <a href="">${send.value[i]}</a>
                `;
            }
        }
    };
    connectionB.open('GET','https://dog.ceo/api/breed/'+value+'/images\n');
    connectionB.send();
}
