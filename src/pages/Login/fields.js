const required = (v) => (v ? undefined : 'This field is required.');

export const fields = [
  {
    placeholder: 'Enter Username',
    name: 'email',
    tstype: 'email',
    required: true,
    validate: [required],
    variant: 'outlined'
  },
  {
    placeholder: 'Enter Password',
    name: 'password',
    tstype: 'password',
    required: true,
    validate: [required],
    variant: 'outlined'
  }
];
