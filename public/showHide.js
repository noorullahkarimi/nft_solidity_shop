//obj for id pages
let idsPage = ["landingPage", "creatNftPage", "detailsNftPage"];

/**
 * author: safeparadise
 *  dev : this is for show and hide pages
 */

class showHide {
  constructor() {}
  showlandingPage() {
    let clazzlist = document.getElementById(idsPage[0]).className;
    if (clazzlist.includes("dis-hidden")) {
      console.log("first");
      clazzlist = clazzlist.replace("dis-hidden", "");
      console.log(clazzlist);
      document.getElementById(idsPage[0]).className = clazzlist;
    }
    for (let i = 0; i < idsPage.length; i++) {
      console.log(idsPage[i]);
      if (
        !document.getElementById(idsPage[i]).className.includes("dis-hidden") &&
        i !== 0
      ) {
        console.log("ids = " + idsPage[i]);
        document.getElementById(idsPage[i]).className += " dis-hidden";
      }
    }
  }

  showCreatePage() {
    let clazzlist = document.getElementById(idsPage[1]).className;
    if (clazzlist.includes("dis-hidden")) {
      console.log("first");
      clazzlist = clazzlist.replace("dis-hidden", "");
      console.log(clazzlist);
      document.getElementById(idsPage[1]).className = clazzlist;
    }
    for (let i = 0; i < idsPage.length; i++) {
      console.log(idsPage[i]);
      if (
        !document.getElementById(idsPage[i]).className.includes("dis-hidden") &&
        i !== 1
      ) {
        console.log("ids = " + idsPage[i]);
        document.getElementById(idsPage[i]).className += " dis-hidden";
      }
    }
  }

  showAddingDetailsPage() {
    let clazzlist = document.getElementById(idsPage[2]).className;
    if (clazzlist.includes("dis-hidden")) {
      console.log("first");
      clazzlist = clazzlist.replace("dis-hidden", "");
      console.log(clazzlist);
      document.getElementById(idsPage[2]).className = clazzlist;
    }
    for (let i = 0; i < idsPage.length; i++) {
      console.log(idsPage[i]);
      if (
        !document.getElementById(idsPage[i]).className.includes("dis-hidden") &&
        i !== 2
      ) {
        console.log("ids = " + idsPage[i]);
        document.getElementById(idsPage[i]).className += " dis-hidden";
      }
    }
  }
}
