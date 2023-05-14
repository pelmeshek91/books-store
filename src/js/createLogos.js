export const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '#icon-image1',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '#icon-image2',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '#icon-image4',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '#icon-image6',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '#icon-image5',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '#icon-image9',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '#icon-image3',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '#icon-image7',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '#icon-image8',
  },
];

export function createLogos(charities) {
  let count = 1;
  return charities
    .map(charity => {
      const markup = `<li class="support-item block">
          <span class="support-nmbr">${count.toString().padStart(2, '0')}</span>
          <a href="${charity.url}" class="support-link" target="_new">
            <svg class="icon">
              <use href=${require('../images/support/support-svg.svg')}${
        charity.img
      }></use>
            </svg>
          </a>
        </li>`;
      count++;
      return markup;
    })
    .join('');
}
