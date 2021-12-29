export const base64ToUuid = (id: string) => {
  try {
    const idToString = b64DecodeUnicode(id);
    const array = JSON.parse(idToString);
    return array[3];
  } catch (e) {
    return id;
  }
};

function b64DecodeUnicode(str: string) {
  return decodeURIComponent(
    Array.prototype.map
      .call(atob(str), function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}
