export const FETCH_FIGHTS = 'FETCH_FIGHTS';

export function fetchFights() {
  return {
    type: FETCH_FIGHTS,
    payload: [
      {
        id: 1,
        title: 'Genady Golovkin vs Daniel Jacobs',
        date: 'March 11, 2017 10PM/7PM ET/PT',
        firstFighterImage: 'http://placehold.it/80x80',
        secondFighterImage: 'http://placehold.it/80x80'
      },
      {
        id: 2,
        title: 'Genady Golovkin vs Daniel Jacobs',
        date: 'March 11, 2017 10PM/7PM ET/PT',
        firstFighterImage: 'http://placehold.it/80x80',
        secondFighterImage: 'http://placehold.it/80x80',
        isPpv: true
      }
    ]
  };
};
