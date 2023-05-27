import { useEffect, useRef } from "react";

const useComponentDidUpdate = (cb, deps) => {
  const ref = useRef(null);
  const val = deps[0];

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      cb();
    }
  }, [val]);
};
export default useComponentDidUpdate;
