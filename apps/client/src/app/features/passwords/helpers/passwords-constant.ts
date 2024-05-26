import { environment } from 'apps/client/src/environments/environment';

export const PasswordsConstant = {
  PASSWORDS_ENDPOINT: `${environment.API_BASE_URL}/password-cards`,
  METHODS: {
    GET_ALL_PASSWORDS: '',
    POST_PASSWORD: '',
    GET_PASSWORD: '',
    PUT_PASSWORD: '',
    DELETE_PASSWORD: '',
  },
};

export const DELETE_PASSWORD_MESSAGE =
  'Are you sure you want to delete this password?';
