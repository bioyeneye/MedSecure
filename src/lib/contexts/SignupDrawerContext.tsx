// SignupDrawerContext.tsx
import type { ReactNode } from "react";
import type React from "react";
import { createContext, useContext, useMemo, useState } from "react";

interface SignupDrawerContextProps {
  isOpen: boolean;
  onClose: () => void;
  openDrawer: () => void;
}

const SignupDrawerContext = createContext<SignupDrawerContextProps | undefined>(
  undefined
);

export const useDrawer = () => {
  const context = useContext(SignupDrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const contextValue = useMemo(() => {
    return {
      isOpen,
      onClose,
      openDrawer,
    };
  }, [isOpen]); // Only recreate the contextValue when isOpen changes

  return (
    <SignupDrawerContext.Provider value={contextValue}>
      {children}
    </SignupDrawerContext.Provider>
  );
};
