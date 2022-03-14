import { useLayoutEffect, useState } from 'react';

export function useDeviceWidth() {
  const [deviceWidth, setDeviceWidth] = useState<number>();

  useLayoutEffect(() => {
    const width = document.body.clientWidth;

    window.addEventListener('resize', () => setDeviceWidth(document.body.clientWidth));
    setDeviceWidth(width);
  }, []);

  return { deviceWidth };
}
