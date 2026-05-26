import { useQuery } from "@tanstack/react-query";
import { getTopBurgers } from "@/services/burger.service";

export function useTopBurgers() {
  return useQuery({
    queryKey: ["top-burgers"],
    queryFn: getTopBurgers,
  });
}
