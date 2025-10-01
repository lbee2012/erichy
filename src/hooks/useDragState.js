import { useCallback, useState } from 'react';

export function useDragState(onFocus, onStop) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = useCallback((event, data) => {
    setIsDragging(true);
    if (typeof onFocus === 'function') {
      onFocus(event, data);
    }
  }, [onFocus]);

  const handleDragStop = useCallback((event, data) => {
    setIsDragging(false);
    if (typeof onStop === 'function') {
      onStop(event, data);
    }
  }, [onStop]);

  return {
    isDragging,
    handleDragStart,
    handleDragStop
  };
}
