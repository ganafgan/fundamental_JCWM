
// Calculator

    function simpleCalculator(angka1, angka2, operator) {
        if (operator === '+'){
            return angka1 + angka2
    
        }
            
        else if (operator === 'x'){
            return angka1 * angka2
           
        } 

        else if(operator === '-'){
            return angka1 - angka2
        }

        else if (operator === '/') {
            return angka1 / angka2
        }

        else if (operator === '%') {
            return angka1 % angka2
        }
    }

    console.log(simpleCalculator(2,3,'x'))
    console.log(simpleCalculator(9,3,'/'))
    console.log(simpleCalculator(7,3,'%'))
    console.log(simpleCalculator(5,10,'+'))