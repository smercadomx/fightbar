export const FETCH_FIGHT = 'FETCH_FIGHT';
export const FETCH_FIGHTS = 'FETCH_FIGHTS';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

const allFights = [
  {
    id: 1,
    title: 'Genady Golovkin vs Daniel Jacobs',
    date: 'March 11, 2017 10PM/7PM ET/PT',
    firstFighterImage: 'http://placehold.it/80x80',
    secondFighterImage: 'http://placehold.it/80x80',
    bars: [{
      id: 1,
      name: 'The Abbey Tavern',
      address: '4100 Geary Blvd',
      image: 'http://placehold.it/100x100',
      phone: '(510) 547-3552',
      website: 'http://abbeytavern.com'
    }, {
      id: 2,
      name: 'The Abbey Tavern 2',
      address: '4100 Geary Blvd',
      image: 'http://placehold.it/100x100',
      phone: '(510) 547-3552',
      website: 'http://abbeytavern.com'
    }]
  },
  {
    id: 2,
    title: 'Saul Alvarez vs Julio Cesar Chavez Jr.',
    date: 'May 6, 2017 10PM/7PM ET/PT',
    firstFighterImage: 'http://placehold.it/80x80',
    secondFighterImage: 'http://placehold.it/80x80',
    isPpv: true,
    bars: [{
      id: 1,
      name: 'The Abbey Tavern',
      address: '4100 Geary Blvd',
      image: 'http://placehold.it/100x100',
      phone: '(510) 547-3552',
      website: 'http://abbeytavern.com'
    }]
  }
];

function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location
  }
}

function fetchFightByLocation(options) {
  return {
    type: FETCH_FIGHT,
    payload: (options.id === '1') ? allFights[0] : allFights[1]
  };
}

export function fetchFight(options) {
  return function (dispatch) {
    return getLocation().then((location) => {
      dispatch(updateLocation(location))
      dispatch(fetchFightByLocation({
        ...options,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }));
    });
  };
}

export function fetchFights() {
  return {
    type: FETCH_FIGHTS,
    payload: allFights
  };
};

export function getLocation() {
  const geolocation = navigator.geolocation;

  // TODO: Polyfill Promise
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }

    // geolocation.getCurrentPosition is giving a 403 error (permission denied)
    // in local server, hence we return dummy data
    // TODO: find a fix for this
    resolve({coords: {latitude: Math.random(), longitude: Math.random()}});

    // geolocation.getCurrentPosition((position) => {
    //   resolve(position);
    // }, (e) => {
    //   reject (e);
    // });
  });

  return location;
};
