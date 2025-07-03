declare module 'react-native-sweet-alert' {
  type AlertStyle = 'success' | 'danger' | 'warning' | 'info';

  interface AlertOptions {
    title: string;
    subTitle?: string;
    confirmButtonTitle?: string;
    otherButtonTitle?: string;
    style?: AlertStyle;
    onConfirmPressed?: () => void;
    onOtherPressed?: () => void;
  }

  const SweetAlert: {
    showAlertWithOptions: (options: AlertOptions) => void;
  };

  export default SweetAlert;
}