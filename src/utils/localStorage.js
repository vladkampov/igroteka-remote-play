
export const setItem = (...args) => {
  if (typeof Storage !== 'undefined') {
    try {
      return localStorage.setItem(...args);
    } catch (e) {
      return '{}';
    }
  }

  return '{}';
};

export const getItem = (...args) => {
  if (typeof Storage !== 'undefined') {
    try {
      return localStorage.getItem(...args);
    } catch (e) {
      return '{}';
    }
  }

  return '{}';
};
