import { useRelayEnvironment } from "react-relay";
import { useEffect } from "react";
import { commitLocalUpdate } from "relay-runtime";
import { ActiveUser } from "./";

export function useSetUserToRelayStore(
  user: ActiveUser,
  userState: ActiveUser | null,
  setUser: (user: ActiveUser) => void
) {
  const environment = useRelayEnvironment();

  // Create a unique ID.
  const dataID = `client:ActiveUser:${user.id}`;

  useEffect(() => {
    if (!userState) {
      commitLocalUpdate(environment, (store) => {
        const activeUser = store.get(dataID);

        if (!activeUser) {
          const userRecord = store.getRoot().getLinkedRecord("activeUser");
          //Create a new note record.
          const newLocalRecord = store.create(dataID, "ActiveUser");

          // Add the record to the user's list of notes.
          userRecord?.setLinkedRecord(newLocalRecord, "activeUser");

          Object.keys(user).map((key) => userRecord?.setValue(user[key], key));

          setUser(userRecord);
          return userRecord;
        }
        setUser(activeUser);
        return activeUser;
      });
    }
  }, [user, userState]);
}
