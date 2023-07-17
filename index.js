const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 30) + 1;

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener('click', play);

function play() {
    const userNumber = document.querySelector('#guess').value;

    if (userNumber < 1 || userNumber > 30) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 30!',
        })  
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You need to enter a number!',
        }) 
    }

    else {
        if (userNumber < answer) {
            Swal.fire('Enter above',
            'The computer is winning for now!')
        }

        else if (userNumber > answer) {
            Swal.fire('Enter below',
            'The computer is winning for now!')
        }

        else {
            Swal.fire({
                title: 'WIN!',
                imageUrl: 'https://media.istockphoto.com/id/1338810194/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BB%D1%8E%D0%B4%D0%B8-%D0%B7-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D1%8E-%D1%87%D0%B0%D1%88%D0%BA%D0%BE%D1%8E-%D1%82%D1%80%D0%BE%D1%84%D0%B5%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BB%D1%8C%D0%BE%D1%80%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D0%B8%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=cDS-umtiJJBQzCnO1oQ_PC0b0ugg6CWOIgF0Ye3HpAA=',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
            })
        }
    }
    
}

