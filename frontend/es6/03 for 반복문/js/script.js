{
    document.querySelector('.ex1 button').addEventListener('click', e => {
        document.querySelector('.ex1 .result').innerText = ''
        for(let i = 10; i >= 1; i--){
            document.querySelector('.ex1 .result').append(`${i},`)
        }
    })
}

{
    document.querySelector('.ex2 button').addEventListener('click', e => {
        let sum = 0
        let a = parseInt(document.querySelector('.ex2 .num1').value)
        let b = parseInt(document.querySelector('.ex2 .num2').value)

        if(a > b){
            for(let i = b; i <= a; i++){
                sum += i
            }
        }else{
            for(let i = a; i <= b; i++){
                sum += i
            }
        }

        document.querySelector('.ex2 .result').innerText = sum
    })
}