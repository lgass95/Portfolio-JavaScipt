const numbers = [1, 2, 3, 4, 5];

const fetchNumber = () => {
    let num = numbers [Math.floor(Math.random() * 5)];
    for (let i = 0; i < numbers.length; i++) {
        // console.log(i);
        // console.log (num);
        if (num === numbers[i]) {
            console.log(num);
            // console.log(i);
        }
    }
}

fetchNumber();
