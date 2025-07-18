import { useState } from "react";

function useRefetch() {
  const [refetch, setRefetch] = useState(false);

  const handleRefetch = () => {
    setRefetch((prev) => !prev);
  };
  return [refetch, handleRefetch];
}

export default useRefetch;
