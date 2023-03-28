export const createListMarkupCountry = country => {
  return country
    .map(
      ({ name, flags }) =>
        `<li class='country-list__item'>
            <img
                class='country-list__img'
                src='${flags.svg}'
                alt='${name.official}'
                width='50'
                height='40'
            />
            <h2 class='country-list__title'>${name.official}</h2>
        </li>`
    )
    .join('');
};
