import { ReactNode, createContext, useState, useContext } from "react";

const SelectedRowsContext = createContext<{
  selectedRows: React.Key[];
  updateSelectedRows: (newValues: React.Key[]) => void;
}>({ selectedRows: [], updateSelectedRows: () => {} });

export const RowSelectionContextProvider = ({
  children,
}: {
  children?: ReactNode;
}): ReactNode => {
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);

  const updateSelectedRows = (newValues: React.Key[]) => {
    setSelectedRows(newValues);
  };

  return (
    <SelectedRowsContext.Provider value={{ selectedRows, updateSelectedRows }}>
      {children}
    </SelectedRowsContext.Provider>
  );
};

export const useSelectedRowsContext = () => {
  return useContext(SelectedRowsContext);
};
