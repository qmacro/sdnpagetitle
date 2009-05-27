// SdnPageTitle
// version 0.1
// 2009-05-27
// Copyright (c) 2009, DJ Adams

// SdnPageTitle
//
// ==UserScript==
// @name          SdnPageTitle
// @namespace     http://www.pipetree.com/qmacro
// @description   Fix SDN page titles to ease bookmarking
// @include       https://www.sdn.sap.com/irj/scn/weblogs/*
// @include       https://weblogs.sdn.sap.com/pub/wlg/*
// ==/UserScript==
//
// --------------------------------------------------------------------
//

titleframeurl = /weblogs\.sdn\.sap\.com\/pub\/wlg\/\d+/;
if (document.location.href.match(titleframeurl)) {
  top.document.title = document.title;
}
