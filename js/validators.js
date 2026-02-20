const AMOUNT_REGEX = /^(0|[1-9][0-9]*)(\.[0-9]{1,2})?$/;

const DATE_REGEX = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

const CATEGORY_REGEX = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;

const DUPLICATE_WORDS_REGEX = /\b(\w+)\s+\1\b/i;


/**
 * Validate a transaction description.
 * @param {string} value
 * @returns {string|null} Error message or null if valid.
 */
function validateDescription(value) {
  if (!value || value.trim() === "") return "Description is required.";
  if (value !== value.trim()) return "Description cannot have leading/trailing spaces.";
  return null;
}

/**
 * Validate a transaction amount.
 * @param {string} value
 * @returns {string|null}
 */
function validateAmount(value) {
  if (!value) return "Amount is required.";
  if (!AMOUNT_REGEX.test(value)) return "Amount must be a valid number (up to 2 decimals).";
  if (parseFloat(value) <= 0) return "Amount must be greater than zero.";
  return null;
}

/**
 * Validate a date string.
 * @param {string} value
 * @returns {string|null}
 */
function validateDate(value) {
  if (!value) return "Date is required.";
  if (!DATE_REGEX.test(value)) return "Date must be in YYYY-MM-DD format.";
  return null;
}

/**
 * Validate a category string.
 * @param {string} value
 * @returns {string|null}
 */
function validateCategory(value) {
  if (!value) return "Category is required.";
  if (!CATEGORY_REGEX.test(value)) return "Category can only contain letters, spaces, and hyphens.";
  return null;
}

/**
 * Check if a string contains consecutive duplicate words.
 * @param {string} text
 * @returns {boolean}
 */
function hasDuplicateWords(text) {
  return DUPLICATE_WORDS_REGEX.test(text);
}
