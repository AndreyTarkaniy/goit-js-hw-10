export const createListMarkupCountryInfo = country => {
  return country.map(
    ({ name, flags, population, capital, languages }) =>
      `<div class="country-info__wrap">
             <div class="country-info__wrapper">
                 <img class="country-info__img" 
                     src="${flags.svg}" 
                     alt="${name.official}" 
                     width="320" 
                     height="240"/>
                 <h2 class="country-info__title">${name.official}</h2>
             </div>
            <ul class="country-info__list">
                <li class="country-info__item">
                   <p class="country-info__text">Capital: ${capital}</p>
                </li>
                <li class="country-info__item">
                   <p class="country-info__text">Population: ${population}</p>
                </li>
                <li class="country-info__item">
                    <p class="country-info__text">Languages: ${Object.values(
                      languages
                    ).join(',')}</p>
                </li>
             </ul>
        </div>`
  );
};
