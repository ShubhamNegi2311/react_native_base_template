import AppDialog from 'components/organisms/app_dialog';
import React, {createContext, ReactNode, useContext, useState} from 'react';
import {TDialogOptions} from 'types/app_data_models';

type DialogContextType = {
  showDialog: (options: TDialogOptions) => void;
  hideDialog: () => void;
};

// Create context
const AppDialogContext = createContext<DialogContextType | undefined>(
  undefined,
);

// Dialog Provider
export const AppDialogProvider = ({children}: {children: ReactNode}) => {
  const [dialogData, setDialogData] = useState<TDialogOptions | null>(null);
  const showDialog = (options: TDialogOptions) => setDialogData(options);
  const hideDialog = () => setDialogData(null);

  return (
    <AppDialogContext.Provider value={{showDialog, hideDialog}}>
      {children}
      {dialogData && <AppDialog {...dialogData} />}
    </AppDialogContext.Provider>
  );
};

// Custom hook for easy access
export const useDialog = () => {
  const context = useContext(AppDialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
