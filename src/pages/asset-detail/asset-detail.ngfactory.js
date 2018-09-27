/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i2 from "ionic-angular/components/button/button";
import * as i3 from "ionic-angular/config/config";
import * as i4 from "ionic-angular/components/toolbar/toolbar-header";
import * as i5 from "ionic-angular/navigation/view-controller";
import * as i6 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i7 from "ionic-angular/components/toolbar/navbar";
import * as i8 from "ionic-angular/components/app/app";
import * as i9 from "ionic-angular/navigation/nav-controller";
import * as i10 from "ionic-angular/components/menu/menu-toggle";
import * as i11 from "ionic-angular/components/app/menu-controller";
import * as i12 from "ionic-angular/components/toolbar/toolbar-item";
import * as i13 from "ionic-angular/components/toolbar/toolbar";
import * as i14 from "ionic-angular/components/icon/icon";
import * as i15 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i16 from "ionic-angular/components/toolbar/toolbar-title";
import * as i17 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i18 from "ionic-angular/components/content/content";
import * as i19 from "ionic-angular/platform/platform";
import * as i20 from "ionic-angular/platform/dom-controller";
import * as i21 from "ionic-angular/platform/keyboard";
import * as i22 from "@angular/common";
import * as i23 from "./asset-detail";
import * as i24 from "ionic-angular/navigation/nav-params";
var styles_AssetDetailPage = [];
var RenderType_AssetDetailPage = i0.ɵcrt({ encapsulation: 2, styles: styles_AssetDetailPage, data: {} });
export { RenderType_AssetDetailPage as RenderType_AssetDetailPage };
function View_AssetDetailPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\t    "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", " - ", ""])), (_l()(), i0.ɵted(-1, null, ["\n\t    "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(6, null, ["\n\t     ", " \u2022 ", "\n\t    "])), (_l()(), i0.ɵted(-1, null, ["\n\t    "])), (_l()(), i0.ɵeld(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(9, null, ["", " \u2022 ", ""])), (_l()(), i0.ɵted(-1, null, ["\n\t    "])), (_l()(), i0.ɵeld(11, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\t    "])), (_l()(), i0.ɵeld(13, 0, null, null, 2, "button", [["clear", ""], ["ion-button", ""], ["item-end", ""]], null, null, null, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(14, 1097728, null, 0, i2.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], { clear: [0, "clear"] }, null), (_l()(), i0.ɵted(-1, 0, ["Request"])), (_l()(), i0.ɵted(-1, null, ["\n\t \n  \t"]))], function (_ck, _v) { var currVal_6 = ""; _ck(_v, 14, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.asset.manufacturer.name; var currVal_1 = _co.asset.category.name; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.asset.model_number; var currVal_3 = _co.asset.serial_number; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = _co.asset.purchase_date; var currVal_5 = _co.asset.gurantee_year; _ck(_v, 9, 0, currVal_4, currVal_5); }); }
export function View_AssetDetailPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i4.Header, [i3.Config, i0.ElementRef, i0.Renderer, [2, i5.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i6.View_Navbar_0, i6.RenderType_Navbar)), i0.ɵdid(4, 49152, null, 0, i7.Navbar, [i8.App, [2, i5.ViewController], [2, i9.NavController], i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 8).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(7, 1097728, [[1, 4]], 0, i2.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(8, 1064960, null, 0, i10.MenuToggle, [i11.MenuController, [2, i5.ViewController], [2, i2.Button], [2, i7.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(9, 16384, null, 1, i12.ToolbarItem, [i3.Config, i0.ElementRef, i0.Renderer, [2, i13.Toolbar], [2, i7.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵeld(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(13, 147456, null, 0, i14.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(16, 0, null, 3, 2, "ion-title", [], null, null, null, i15.View_ToolbarTitle_0, i15.RenderType_ToolbarTitle)), i0.ɵdid(17, 49152, null, 0, i16.ToolbarTitle, [i3.Config, i0.ElementRef, i0.Renderer, [2, i13.Toolbar], [2, i7.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["Asset Detail"])), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(22, 0, null, null, 5, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i17.View_Content_0, i17.RenderType_Content)), i0.ɵdid(23, 4374528, null, 0, i18.Content, [i3.Config, i19.Platform, i20.DomController, i0.ElementRef, i0.Renderer, i8.App, i21.Keyboard, i0.NgZone, [2, i5.ViewController], [2, i9.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n\t"])), (_l()(), i0.ɵand(16777216, null, 1, 1, null, View_AssetDetailPage_1)), i0.ɵdid(26, 16384, null, 0, i22.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 1, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_8 = _co.asset; _ck(_v, 26, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 4)._hidden; var currVal_1 = i0.ɵnov(_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = i0.ɵnov(_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = i0.ɵnov(_v, 23).statusbarPadding; var currVal_7 = i0.ɵnov(_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); }); }
export function View_AssetDetailPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-asset-detail", [], null, null, null, View_AssetDetailPage_0, RenderType_AssetDetailPage)), i0.ɵdid(1, 49152, null, 0, i23.AssetDetailPage, [i9.NavController, i24.NavParams], null, null)], null, null); }
var AssetDetailPageNgFactory = i0.ɵccf("page-asset-detail", i23.AssetDetailPage, View_AssetDetailPage_Host_0, {}, {}, []);
export { AssetDetailPageNgFactory as AssetDetailPageNgFactory };
//# sourceMappingURL=asset-detail.ngfactory.js.map