export type TDialogOptions = {
  title: string;
  message: string;
  onConfirm?: () => void;
  onDismiss?: () => void;
  isConfirmDestructive?: boolean;
  isDismissDestructive?: boolean;
  actionType?: 'success' | 'error' | 'info' | 'warning';
};
