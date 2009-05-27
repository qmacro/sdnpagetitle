// SdnPageTitle
// version 0.2
// 2009-05-27
// Copyright (c) 2009, DJ Adams

// SdnPageTitle
//
// ==UserScript==
// @name          SdnPageTitle
// @namespace     http://www.pipetree.com/qmacro
// @description   Fix SDN page titles to ease bookmarking
// @include       https://*.sdn.sap.com/*
// ==/UserScript==
//
// --------------------------------------------------------------------
//

titleframeurl = /(weblogs\.sdn\.sap\.com\/pub\/wlg\/\d+|forums\.sdn\.sap\.com\/(forum\.jspa\?forumID|thread.jspa\?threadID|profile\.jspa\?userID|category\.jspa\?categoryID)=\d+)/;
if (document.location.href.match(titleframeurl)) {
  top.document.title = document.title;
}
