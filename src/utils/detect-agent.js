export function detectAgent() {
  // We may add checks for other agents (browsers)
  // Internet Explorer 6-11
  const isIE = /*@cc_on!@*/ false || !!document.documentMode;

  return {
    isIE,
  };
}
