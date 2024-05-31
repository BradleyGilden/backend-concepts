const translate = require('google-translate-api-x');

const translateText = async () => {
  const res = await translate('Hello!', { to: 'as', forceTo: true });
  console.log(res)
}

translateText();
