(() => {
    const form = document.querySelector('form[name=bmi]');
    const onSubmit = event => {

        event.preventDefault();

        let healthMessage;

        const result = form.querySelector('.result');
        const health = form.querySelector('.health');

        const weight = parseInt(form.querySelector('input[name=weight]').value, 10);
        const height = parseInt(form.querySelector('input[name=height]').value, 10);

        const bmi = (weight / (height /100 * height / 100)).toFixed(1);

        if (bmi < 18.5) {
          healthMessage = 'considered underweight';
        } else if (bmi >= 18.5 && bmi <= 25) {
          healthMessage = 'a healthy weight';
        } else if (bmi > 25) {
          healthMessage = 'considered overweight';
        }

        result.innerHTML = bmi;
        health.innerHTML = healthMessage;

      };

    form.addEventListener('submit', onSubmit, false);
})();