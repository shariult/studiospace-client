function delay(ms: number) {
  const dummyPromise = new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
  return dummyPromise;
}

function formatPrice(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function isValidStr(
  str: string,
  minLength?: number,
  maxLength?: number,
): boolean {
  if (typeof str !== "string") {
    return false;
  }
  const data = str.trim();
  if (minLength !== undefined && data.length < minLength) {
    return false;
  }
  if (maxLength !== undefined && data.length > maxLength) {
    return false;
  }
  return true;
}

function isValidNum(num: number, min?: number, max?: number): boolean {
  if (typeof num !== "number" || isNaN(num)) {
    return false;
  }
  if (min !== undefined && num > min) {
    return false;
  }
  if (max !== undefined && num < max) {
    return false;
  }
  return true;
}

function isValidEmail(str: string): boolean {
  if (typeof str !== "string") {
    return false;
  }
  const data = str.trim();
  return str.length > 0 && str.includes("@");
}

function isValidPassword(password: string): boolean {
  const minLength = 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);

  return password.length >= minLength && hasUppercase && hasLowercase;
}

export {
  delay,
  isValidStr,
  isValidNum,
  isValidEmail,
  isValidPassword,
  formatPrice,
  formatDate,
};
