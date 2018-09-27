/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/avatar/avatar";
import * as i2 from "../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i3 from "ionic-angular/components/button/button";
import * as i4 from "ionic-angular/config/config";
import * as i5 from "ionic-angular/components/menu/menu-toggle";
import * as i6 from "ionic-angular/components/app/menu-controller";
import * as i7 from "ionic-angular/navigation/view-controller";
import * as i8 from "ionic-angular/components/toolbar/navbar";
import * as i9 from "ionic-angular/components/toolbar/toolbar-item";
import * as i10 from "ionic-angular/components/toolbar/toolbar";
import * as i11 from "ionic-angular/components/icon/icon";
import * as i12 from "ionic-angular/components/list/list";
import * as i13 from "ionic-angular/platform/platform";
import * as i14 from "ionic-angular/gestures/gesture-controller";
import * as i15 from "ionic-angular/platform/dom-controller";
import * as i16 from "../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i17 from "ionic-angular/components/item/item";
import * as i18 from "ionic-angular/util/form";
import * as i19 from "ionic-angular/components/item/item-reorder";
import * as i20 from "ionic-angular/components/item/item-content";
import * as i21 from "@angular/common";
import * as i22 from "ionic-angular/components/menu/menu-close";
import * as i23 from "../../node_modules/ionic-angular/components/menu/menu.ngfactory";
import * as i24 from "ionic-angular/components/split-pane/split-pane";
import * as i25 from "ionic-angular/components/menu/menu";
import * as i26 from "ionic-angular/platform/keyboard";
import * as i27 from "ionic-angular/components/app/app";
import * as i28 from "../../node_modules/ng4-loading-spinner/ng4-loading-spinner.ngfactory";
import * as i29 from "ng4-loading-spinner";
import * as i30 from "../../node_modules/ionic-angular/components/nav/nav.ngfactory";
import * as i31 from "ionic-angular/components/nav/nav";
import * as i32 from "ionic-angular/navigation/nav-controller";
import * as i33 from "ionic-angular/transitions/transition-controller";
import * as i34 from "ionic-angular/navigation/deep-linker";
import * as i35 from "./app.component";
import * as i36 from "@ionic-native/status-bar/index";
import * as i37 from "@ionic-native/splash-screen/index";
import * as i38 from "@ionic/storage/dist/storage";
import * as i39 from "../providers/auth.service";
var styles_MyApp = [];
var RenderType_MyApp = i0.ɵcrt({ encapsulation: 2, styles: styles_MyApp, data: {} });
export { RenderType_MyApp as RenderType_MyApp };
function View_MyApp_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i1.Avatar, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", _co.image, ""); _ck(_v, 3, 0, currVal_0); }); }
function View_MyApp_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i1.Avatar, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "img", [["src", "assets/imgs/user-default.jpeg"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "]))], null, null); }
function View_MyApp_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.username; _ck(_v, 1, 0, currVal_0); }); }
function View_MyApp_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "button", [["float-right", ""], ["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).toggle() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.goToProfile() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i2.View_Button_0, i2.RenderType_Button)), i0.ɵdid(1, 1097728, [[7, 4], [5, 4]], 0, i3.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(2, 1064960, null, 0, i5.MenuToggle, [i6.MenuController, [2, i7.ViewController], [2, i3.Button], [2, i8.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(3, 16384, null, 1, i9.ToolbarItem, [i4.Config, i0.ElementRef, i0.Renderer, [2, i10.Toolbar], [2, i8.Navbar]], null, null), i0.ɵqud(603979776, 7, { _buttons: 1 }), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(6, 0, null, 0, 1, "ion-icon", [["name", "md-arrow-forward"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(7, 147456, null, 0, i11.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n        "]))], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 2, 0, currVal_1); var currVal_3 = "md-arrow-forward"; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isHidden; _ck(_v, 0, 0, currVal_0); var currVal_2 = i0.ɵnov(_v, 7)._hidden; _ck(_v, 6, 0, currVal_2); }); }
function View_MyApp_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 22, "ion-list", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i12.List, [i4.Config, i0.ElementRef, i0.Renderer, i13.Platform, i14.GestureController, i15.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(3, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, i16.View_Item_0, i16.RenderType_Item)), i0.ɵdid(4, 1097728, null, 3, i17.Item, [i18.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i19.ItemReorder]], null, null), i0.ɵqud(335544320, 4, { contentLabel: 0 }), i0.ɵqud(603979776, 5, { _buttons: 1 }), i0.ɵqud(603979776, 6, { _icons: 1 }), i0.ɵdid(8, 16384, null, 0, i20.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MyApp_2)), i0.ɵdid(11, 16384, null, 0, i21.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MyApp_3)), i0.ɵdid(14, 16384, null, 0, i21.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 2, 1, null, View_MyApp_4)), i0.ɵdid(17, 16384, null, 0, i21.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 2, 1, null, View_MyApp_5)), i0.ɵdid(20, 16384, null, 0, i21.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.image; _ck(_v, 11, 0, currVal_0); var currVal_1 = !_co.image; _ck(_v, 14, 0, currVal_1); var currVal_2 = _co.isLoggedIn; _ck(_v, 17, 0, currVal_2); var currVal_3 = _co.isLoggedIn; _ck(_v, 20, 0, currVal_3); }, null); }
function View_MyApp_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "button", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 6).close() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.openPage(_v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i16.View_Item_0, i16.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i17.Item, [i18.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i19.ItemReorder]], null, null), i0.ɵqud(335544320, 11, { contentLabel: 0 }), i0.ɵqud(603979776, 12, { _buttons: 1 }), i0.ɵqud(603979776, 13, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i20.ItemContent, [], null, null), i0.ɵdid(6, 16384, null, 0, i22.MenuClose, [i6.MenuController], { menuClose: [0, "menuClose"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n       "])), (_l()(), i0.ɵeld(8, 0, null, 2, 1, "ion-icon", [["margin-right", ""], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(9, 147456, [[13, 4]], 0, i11.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(10, 2, [" ", "  \n      "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 6, 0, currVal_0); var currVal_2 = i0.ɵinlineInterpolate(1, "", _v.context.$implicit.icon, ""); _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = i0.ɵnov(_v, 9)._hidden; _ck(_v, 8, 0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_3); }); }
function View_MyApp_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MyApp_7)), i0.ɵdid(3, 802816, null, 0, i21.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pages; _ck(_v, 3, 0, currVal_0); }, null); }
function View_MyApp_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "button", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 6).close() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.openPage(_v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i16.View_Item_0, i16.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i17.Item, [i18.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i19.ItemReorder]], null, null), i0.ɵqud(335544320, 14, { contentLabel: 0 }), i0.ɵqud(603979776, 15, { _buttons: 1 }), i0.ɵqud(603979776, 16, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i20.ItemContent, [], null, null), i0.ɵdid(6, 16384, null, 0, i22.MenuClose, [i6.MenuController], { menuClose: [0, "menuClose"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n       "])), (_l()(), i0.ɵeld(8, 0, null, 2, 1, "ion-icon", [["margin-right", ""], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(9, 147456, [[16, 4]], 0, i11.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(10, 2, [" ", "  \n      "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 6, 0, currVal_0); var currVal_2 = i0.ɵinlineInterpolate(1, "", _v.context.$implicit.icon, ""); _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = i0.ɵnov(_v, 9)._hidden; _ck(_v, 8, 0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_3); }); }
function View_MyApp_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n     "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MyApp_9)), i0.ɵdid(3, 802816, null, 0, i21.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.accountMenuItems; _ck(_v, 3, 0, currVal_0); }, null); }
export function View_MyApp_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { nav: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 29, "ion-menu", [["role", "navigation"]], null, null, null, i23.View_Menu_0, i23.RenderType_Menu)), i0.ɵprd(6144, null, i24.RootNode, null, [i25.Menu]), i0.ɵdid(3, 245760, null, 2, i25.Menu, [i6.MenuController, i0.ElementRef, i4.Config, i13.Platform, i0.Renderer, i26.Keyboard, i14.GestureController, i15.DomController, i27.App], { content: [0, "content"] }, null), i0.ɵqud(335544320, 2, { menuContent: 0 }), i0.ɵqud(335544320, 3, { menuNav: 0 }), (_l()(), i0.ɵted(-1, 0, ["\n   "])), (_l()(), i0.ɵeld(7, 0, null, 0, 4, "div", [["padding", ""], ["style", "background:#488aff;height:100px;"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MyApp_1)), i0.ɵdid(10, 16384, null, 0, i21.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    \n  \n\t"])), (_l()(), i0.ɵted(-1, 0, ["\n\t"])), (_l()(), i0.ɵeld(13, 0, null, 0, 16, "ion-list", [["detail-none", ""]], null, null, null, null, null)), i0.ɵdid(14, 16384, null, 0, i12.List, [i4.Config, i0.ElementRef, i0.Renderer, i13.Platform, i14.GestureController, i15.DomController], null, null), (_l()(), i0.ɵted(-1, null, [" \n    "])), (_l()(), i0.ɵeld(16, 0, null, null, 12, "ion-item", [["class", "item item-block"], ["no-lines", ""], ["no-padding", ""]], null, null, null, i16.View_Item_0, i16.RenderType_Item)), i0.ɵdid(17, 1097728, null, 3, i17.Item, [i18.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i19.ItemReorder]], null, null), i0.ɵqud(335544320, 8, { contentLabel: 0 }), i0.ɵqud(603979776, 9, { _buttons: 1 }), i0.ɵqud(603979776, 10, { _icons: 1 }), i0.ɵdid(21, 16384, null, 0, i20.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, [" \n      "])), (_l()(), i0.ɵand(16777216, null, 2, 1, null, View_MyApp_6)), i0.ɵdid(24, 16384, null, 0, i21.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵand(16777216, null, 2, 1, null, View_MyApp_8)), i0.ɵdid(27, 16384, null, 0, i21.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 0, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(32, 0, null, null, 2, "ng4-loading-spinner", [], null, null, null, i28.View_Ng4LoadingSpinnerComponent_0, i28.RenderType_Ng4LoadingSpinnerComponent)), i0.ɵdid(33, 180224, null, 0, i29.Ng4LoadingSpinnerComponent, [i29.Ng4LoadingSpinnerService], null, null), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(37, 0, null, null, 2, "ion-nav", [["swipeBackEnabled", "false"]], null, null, null, i30.View_Nav_0, i30.RenderType_Nav)), i0.ɵprd(6144, null, i24.RootNode, null, [i31.Nav]), i0.ɵdid(39, 4374528, [[1, 4], ["content", 4]], 0, i31.Nav, [[2, i7.ViewController], [2, i32.NavController], i27.App, i4.Config, i13.Platform, i0.ElementRef, i0.NgZone, i0.Renderer, i0.ComponentFactoryResolver, i14.GestureController, i33.TransitionController, [2, i34.DeepLinker], i15.DomController, i0.ErrorHandler], { swipeBackEnabled: [0, "swipeBackEnabled"], root: [1, "root"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 39); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.isLoggedIn; _ck(_v, 10, 0, currVal_1); var currVal_2 = !_co.isLoggedIn; _ck(_v, 24, 0, currVal_2); var currVal_3 = _co.isLoggedIn; _ck(_v, 27, 0, currVal_3); var currVal_4 = "false"; var currVal_5 = _co.rootPage; _ck(_v, 39, 0, currVal_4, currVal_5); }, null); }
export function View_MyApp_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), i0.ɵdid(1, 49152, null, 0, i35.MyApp, [i13.Platform, i36.StatusBar, i37.SplashScreen, i38.Storage, i39.AuthService], null, null)], null, null); }
var MyAppNgFactory = i0.ɵccf("ng-component", i35.MyApp, View_MyApp_Host_0, {}, {}, []);
export { MyAppNgFactory as MyAppNgFactory };
//# sourceMappingURL=app.component.ngfactory.js.map