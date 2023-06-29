import { handleModalRender } from '~/utils/handleModal';

export function initGoogleAuth() {
  try {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: () => {},
    });

    // @ts-ignore
    google.accounts.id.renderButton(document.getElementById('google-sign-in'), {
      theme: 'filled_blue',
      size: 'large',
      text: 'continue_with',
      shape: 'pill',
      width: '250px',
    });

    // @ts-ignore
    google.accounts.id.prompt();
  } catch (error) {
    handleModalRender('modal-error');
  }
}
