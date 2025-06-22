function logStatus(status:string):void {
    if (status === "loading") {
      console.log("Loading...");
    } else if (status === "success") {
      console.log("Success!");
    } else if (status === "error") {
      console.log("Something went wrong");
    }
  }
  type logStatus = 'loading'|'success'| 'error';
  
  logStatus("loading");