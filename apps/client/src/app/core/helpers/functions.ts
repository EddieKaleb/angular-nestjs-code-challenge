export const showErrorMessages = (messages: string[]) => {
  let errorMessage = '';
  for (let message of messages) {
    errorMessage += message + '\r\n';
  }
  alert(errorMessage);
};
