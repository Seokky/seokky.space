import getDeclension from '@/utils/declension';

export function getAgeByBirthday(birthdayStr: string, withWord = true) {
  const birthday = new Date(birthdayStr);
  const now = new Date();

  const age = now.getFullYear() - birthday.getFullYear();
  const word = getDeclension(age, 'год', 'года', 'лет');

  return withWord ? `${age} ${word}` : `${age}`;
}

export function getExperienceByStartDate(startStr: string) {
  const start = new Date(startStr);
  const now = new Date();

  const expSeconds = (+now - +start) / 1000;
  const expDays = Math.round(expSeconds / 86400);
  const expMonths = Math.ceil(expDays / 30);

  const resultY = Math.floor(expMonths / 12);
  const resultM = expMonths % 12;

  const wordY = getDeclension(resultY, 'год', 'года', 'лет');
  const wordM = getDeclension(resultM, 'месяц', 'месяца', 'месяцев');

  return `${resultY} ${wordY} ${resultM} ${wordM}`;
}

export default {
  getAgeByBirthday,
  getExperienceByStartDate,
};
