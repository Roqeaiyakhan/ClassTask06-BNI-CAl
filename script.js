//Function to calculate BMI and display the result
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Check for valid inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid weight and height values.";
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Get BMI 
    const interpretation = interpretBMI(bmi);

    // Display the result
    document.getElementById('result').innerHTML = `Result: Your BMI is ${bmi}. You are considered: <strong>${interpretation}</strong>`;
}

// Function to the BMI value
function interpretBMI(bmi) {
    if (bmi < 18.6) {
        return 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        return 'Normal range';
    } else {
        return 'Overweight';
    }
}

        
