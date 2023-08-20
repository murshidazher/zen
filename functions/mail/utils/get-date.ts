export const getDate = (): string =>
  new Date().toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    dateStyle: "long",
    timeStyle: "short",
  });
