import { useEffect, useRef } from "react";
//state: to track change in listing
//stateEndRef: anchor element to scroll to
export function useScrollToBottom(state: any, stateEndRef: any) {
  useEffect(() => {
    if (stateEndRef) {
      // @ts-ignore
      stateEndRef?.current?.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
  }, [state, stateEndRef]);
}
