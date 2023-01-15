import React, { useState } from "react";

const useAnchorEl = (initialValue: null | HTMLElement) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(initialValue);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    handleOpenMenu,
    handleCloseMenu
  };
};

export default useAnchorEl;