// SUBSTRACT TWO NUMBERS

//const test = QUnit.test;

//function subtract(x, y) {
  //  return x - y;
//}

//test('subtract function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //const x = 4; 
    //const y = 3; 
    //const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    //const difference = subtract(x, y);

    //Assert
    // Make assertions about what is expected valid result
    //assert.equal(difference, expected);
//});



/* //MULTIPLY TWO NUMBERS

const test = QUnit.test;

function multiply(x, y) {
    return x * y;
}

test('multiply function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 4; 
    const y = 3; 
    const expected = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    const product = multiply(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(product, expected);
}); */



/* //DIVIDE TWO NUMBERS (6/2)

const test = QUnit.test;

function divide(x, y) {
    return x / y;
}

test('divide function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 6; 
    const y = 2; 
    const expected = 3;

    //Act 
    // Call the function you're testing and set the result to a const
    const quotient = divide(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(quotient, expected);
}); */


/* //DIVIDE TWO NUMBERS (7/0)

const test = QUnit.test;

function divide(x, y) {
    return x / y;
}

test('divide function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 7; 
    const y = 0; 
    const expected = Infinity;

    //Act 
    // Call the function you're testing and set the result to a const
    const quotient = divide(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(quotient, expected);
}); */



/* //isEven (can interchange 6 and 7)

const test = QUnit.test;

function isEven(x) {
    if(x % 2 === 0)
        return true;
    else 
        return false; 
}

function isOdd(x) {
    if(x % 2 === 1)
        return true;
    else 
        return false; 
}

test('isEven function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 6; 
    const expected = isEven(x);

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(x);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
}); */



//getNumbers 

const test = QUnit.test;

function getNumbers() {
    return numbers = [2, 4, 6, 8];
}

test('getNumbers function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const expected = [2, 4, 6, 8]; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getNumbers(9);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
