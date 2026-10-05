import { useEffect, useState } from 'react';
import { getShopStatus } from '../utils/hours';

// Status is computed after mount so the prerendered HTML never bakes in a stale "Open now".
const useShopStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const update = () => setStatus(getShopStatus());
    update();
    const timer = setInterval(update, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return status;
};

export default useShopStatus;
