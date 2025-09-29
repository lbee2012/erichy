import { useCallback, useState } from 'react';

export function useDragState(onFocus) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = useCallback((event, data) => {
    setIsDragging(true);
    if (typeof onFocus === 'function') {
      onFocus(event, data);
    }
  }, [onFocus]);

  const handleDragStop = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    isDragging,
    handleDragStart,
    handleDragStop
  };
}
