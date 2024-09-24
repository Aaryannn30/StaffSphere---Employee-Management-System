import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [contextMenu, setContextMenu] = useState(null);

    const showContextMenu = (type, x, y, index) => {
        setContextMenu({ type, x, y, index });
    };

    const hideContextMenu = () => {
        setContextMenu(null);
    };

    return (
        <UIContext.Provider value={{ contextMenu, showContextMenu, hideContextMenu }}>
            {children}
        </UIContext.Provider>
    );
};

export const useContextMenu = () => useContext(UIContext);
