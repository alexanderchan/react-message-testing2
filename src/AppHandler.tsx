import * as React from "react";

export function AppHandler({ action, resolve, reject }) {
  const [actionLog, setActionLog] = React.useState<any[]>([])  
  React.useEffect(
    function onMessageChange() {
      // dispatch the action but how to let the parent know it's done?
      // the resolve needs to be passed through to whoever resolves it
      if (action) {
        console.log({ action });

        setActionLog(actionLog => [...actionLog, action])

        // resolve(`You sent ${action?.type}`);
        setTimeout(() => {
          resolve(`You sent ${action?.type}`);
        }, 3000)        
      }
      
      
    },
    [action, resolve]
  );

  
  return <div >
    Last action: {action?.type}<br/>
    Action log: { actionLog?.map( (action, index) => {
      return <div key={index}>{action?.type}</div>
    })}
    </div>;
}