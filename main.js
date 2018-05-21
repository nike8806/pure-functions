(() => {
    const form = document.querySelector('form[name=bmi]');
    const onSubmit = event => {
        event.preventDefault();
    };
    form.addEventListener('submit', onSubmit, false);
})();