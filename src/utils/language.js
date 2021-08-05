export const DEFAULT_LANGUAGE = 'en';

export const loadLanguage = () => {
  const currentLanguage = localStorage.getItem('language');

  if (!currentLanguage) {
    localStorage.setItem('language', DEFAULT_LANGUAGE);
  }

  return localStorage.getItem('language');
}

export const setLanguage = lang => {
  localStorage.setItem('language', lang);
}