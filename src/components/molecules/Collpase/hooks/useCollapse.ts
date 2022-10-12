import { useState } from "react";

import { useDebounce } from "@hooks/useDebounce";

type UseCollapsedProps = {
  collapsed: boolean;
};

const useCollapsed = (props?: UseCollapsedProps): [boolean, (timeout?: number) => void] => {
  const [collapsed, setCollapsed] = useState(props?.collapsed ?? false);
  const debounce = useDebounce();

  const toggleCollapsed = (timeout?: number) => {
    const toggle = () => setCollapsed((prevState) => !prevState);
    if (collapsed && timeout) {
      debounce(toggle, timeout);
    } else {
      toggle();
    }
  };

  return [collapsed, toggleCollapsed];
};

export { useCollapsed, UseCollapsedProps }
