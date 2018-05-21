(() => {
    const form = document.querySelector('form[name=bmi]');
    const onSubmit = event => {
        // prevent the form actually submitting
        event.preventDefault();

        // create a variable to wait and hold for our "health message"
        // which will be mutated and bound a new String with the correct message later
        let healthMessage;

        // grabbing both the result and health <span> tags to inject the results into
        const result = form.querySelector('.result');
        const health = form.querySelector('.health');

        // parsing to Integers with base 10, based on the weight and height <input> values
        const weight = parseInt(form.querySelector('input[name=weight]').value, 10);
        const height = parseInt(form.querySelector('input[name=height]').value, 10);

        // run the formula to obtain the BMI result
        // finally, use toFixed(1) for 1 decimal place
        const bmi = (weight / (height /100 * height / 100)).toFixed(1);

        // run the logic to see "how healthy" the person's weight is considered
        // this overrides the "healthMessage" variable based on the expression that passes
        if (bmi < 18.5) {
          healthMessage = 'considered underweight';
        } else if (bmi >= 18.5 && bmi <= 25) {
          healthMessage = 'a healthy weight';
        } else if (bmi > 25) {
          healthMessage = 'considered overweight';
        }

        // bind results to DOM
        result.innerHTML = bmi;
        health.innerHTML = healthMessage;

      };

    form.addEventListener('submit', onSubmit, false);
})();