import { useQuery } from "@tanstack/react-query";
import { getBurgers } from "@/services/burger.service";

export function useBurgers() {
  return useQuery({
    queryKey: ["burgers"],
    queryFn: getBurgers,
  });
}
