/*!
 * Copyright by Space Squirrel Ltd.
 */
import{c as e}from"./p-cc3f09f6.js";const t=e({name:"sort",initialState:{selected:"",options:[{name:"All",value:""},{name:"Most recent",value:"most_recent"},{name:"Oldest",value:"oldest"},{name:"With review",value:"with_review"},{name:"Without review",value:"without_review"}]},reducers:{sortUpdated:(e,t)=>{e.selected=t.payload}}});const{sortUpdated:s}=t.actions;const a=t.reducer;const o=e({name:"modals",initialState:{uploadOpen:false,popupOpen:false},reducers:{setUploadOpen:(e,t)=>{e.uploadOpen=t.payload},setPopupOpen:(e,t)=>{e.popupOpen=t.payload}}});const{setUploadOpen:n,setPopupOpen:p}=o.actions;const l=o.reducer;export{s as a,p as b,n as c,l as m,a as s};
//# sourceMappingURL=p-b1aaf8a0.js.map