---
title: Sending errors through a Formik form
date: '2022-07-22'
draft: false
tags: ['web development', 'react', 'formik', 'tips']
summary: 'Sending validation errors through Formik forms'
---

When we need to validate a Formik form (often with Yup) we can use the following method: validateForm.
It returns a promise so we have to check if it resolves or not.
However, the validation errors are sent directly inside the promise as an argument and not caught. So the promise is always resolved in this case.

To pass the validation error, then, we have to pass the errors as an argument of the promise itself.

```js
  formik.validateForm({...})
    .then((errors) => submit(formik, values, errors))
```

Then the errors can be checked and the logic can be written in the submit method.

```js
const submit = (formik, values, errors) => {...}
```

Bonus: here are the types (for TS users) for the 3 arguments above:

```js
formik: FormikContextType<FormikValues>
values: FormikValues
errors: FormikErrors<FormikValues>
```
