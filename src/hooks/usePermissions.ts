import { useUser } from "../screens/context/userContext";

export function usePermissions(entityOwnerId: string) {
  const { user } = useUser();

  return {
    isPermitted: entityOwnerId === user?.id,
  };
}
