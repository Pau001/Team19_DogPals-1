(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/main/webapp/app/admin/gateway/gateway-routes.service.ts":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/admin/gateway/gateway-routes.service.ts ***!
  \*********************************************************************/
/*! exports provided: GatewayRoutesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GatewayRoutesService\", function() { return GatewayRoutesService; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js\");\n/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ \"./src/main/webapp/app/app.constants.ts\");\n\n\n\n\n\nclass GatewayRoutesService {\n    constructor(http) {\n        this.http = http;\n    }\n    findAll() {\n        return this.http.get(app_app_constants__WEBPACK_IMPORTED_MODULE_2__[\"SERVER_API_URL\"] + 'api/gateway/routes/');\n    }\n}\nGatewayRoutesService.ɵfac = function GatewayRoutesService_Factory(t) { return new (t || GatewayRoutesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵinject\"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"])); };\nGatewayRoutesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjectable\"]({ token: GatewayRoutesService, factory: GatewayRoutesService.ɵfac });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](GatewayRoutesService, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Injectable\"]\n    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2dhdGV3YXkvZ2F0ZXdheS1yb3V0ZXMuc2VydmljZS50cz9jMDgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDTztBQUdDOzs7QUFJNUMsTUFBTSxvQkFBb0I7SUFDL0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLGdFQUFjLEdBQUcscUJBQXFCLENBQUMsQ0FBQztJQUMvRSxDQUFDOzt3RkFMVSxvQkFBb0I7dUdBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7NkZBQXBCLG9CQUFvQjtjQURoQyx3REFBVSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZ2F0ZXdheS9nYXRld2F5LXJvdXRlcy5zZXJ2aWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU0VSVkVSX0FQSV9VUkwgfSBmcm9tICdhcHAvYXBwLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBHYXRld2F5Um91dGUgfSBmcm9tICcuL2dhdGV3YXktcm91dGUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2F0ZXdheVJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZmluZEFsbCgpOiBPYnNlcnZhYmxlPEdhdGV3YXlSb3V0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8R2F0ZXdheVJvdXRlW10+KFNFUlZFUl9BUElfVVJMICsgJ2FwaS9nYXRld2F5L3JvdXRlcy8nKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/admin/gateway/gateway-routes.service.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/admin/gateway/gateway.component.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/admin/gateway/gateway.component.ts ***!
  \****************************************************************/
/*! exports provided: GatewayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GatewayComponent\", function() { return GatewayComponent; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _gateway_routes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gateway-routes.service */ \"./src/main/webapp/app/admin/gateway/gateway-routes.service.ts\");\n/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ \"./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js\");\n/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/__ivy_ngcc__/fesm2015/ng-jhipster.js\");\n\n\n\n\n\n\n\nfunction GatewayComponent_tr_40_div_10_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\", 9);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n                            Warning: no server available!\\n                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} }\nfunction GatewayComponent_tr_40_table_14_tr_2_div_8_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const instance_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]().$implicit;\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵclassMapInterpolate1\"](\"badge badge-\", instance_r5.instanceInfo.status === \"UP\" ? \"success\" : \"danger\", \"\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](1);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate\"](instance_r5.instanceInfo.status);\n} }\nfunction GatewayComponent_tr_40_table_14_tr_2_div_10_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\", 14);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"?\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} }\nfunction GatewayComponent_tr_40_table_14_tr_2_span_15_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"span\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n                                            \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"span\", 15);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \"\\n                                                \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](4, \"span\", 16);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](7, \"\\n                                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const entry_r10 = ctx.$implicit;\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](5);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate\"](entry_r10.key);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](1);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate1\"](\"\\n                                                \", entry_r10.value, \"\\n                                            \");\n} }\nfunction GatewayComponent_tr_40_table_14_tr_2_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"tr\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n                                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](3, \"a\", 11);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](4);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5, \"\\n                                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](6, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](7, \"\\n                                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](8, GatewayComponent_tr_40_table_14_tr_2_div_8_Template, 2, 4, \"div\", 12);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](9, \"\\n                                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](10, GatewayComponent_tr_40_table_14_tr_2_div_10_Template, 2, 0, \"div\", 13);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](11, \"\\n                                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](12, \"\\n                                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](13, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](14, \"\\n                                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](15, GatewayComponent_tr_40_table_14_tr_2_span_15_Template, 8, 2, \"span\", 6);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipe\"](16, \"keys\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](17, \"\\n                                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](18, \"\\n                                \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const instance_r5 = ctx.$implicit;\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpropertyInterpolate\"](\"href\", instance_r5.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵsanitizeUrl\"]);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](1);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate\"](instance_r5.uri);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](4);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", instance_r5.instanceInfo);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", !instance_r5.instanceInfo);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](5);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngForOf\", _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipeBind1\"](16, 5, instance_r5.metadata));\n} }\nfunction GatewayComponent_tr_40_table_14_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"table\", 10);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n                                \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](2, GatewayComponent_tr_40_table_14_tr_2_Template, 19, 7, \"tr\", 6);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \"\\n                            \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const route_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]().$implicit;\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngForOf\", route_r1.serviceInstances);\n} }\nfunction GatewayComponent_tr_40_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"tr\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](4, \"\\n                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](5, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](7, \"\\n                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](8, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](9, \"\\n                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](10, GatewayComponent_tr_40_div_10_Template, 2, 0, \"div\", 7);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](11, \"\\n\\n                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](12, \"div\", 3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](13, \"\\n                            \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](14, GatewayComponent_tr_40_table_14_Template, 4, 1, \"table\", 8);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](15, \"\\n                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](16, \"\\n                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](17, \"\\n                \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const route_r1 = ctx.$implicit;\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate\"](route_r1.path);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate\"](route_r1.serviceId);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](4);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", route_r1.serviceInstances.length === 0);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](4);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", route_r1);\n} }\nclass GatewayComponent {\n    constructor(gatewayRoutesService) {\n        this.gatewayRoutesService = gatewayRoutesService;\n        this.gatewayRoutes = [];\n        this.updatingRoutes = false;\n    }\n    ngOnInit() {\n        this.refresh();\n    }\n    refresh() {\n        this.updatingRoutes = true;\n        this.gatewayRoutesService.findAll().subscribe(gatewayRoutes => {\n            this.gatewayRoutes = gatewayRoutes;\n            this.updatingRoutes = false;\n        });\n    }\n}\nGatewayComponent.ɵfac = function GatewayComponent_Factory(t) { return new (t || GatewayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](_gateway_routes_service__WEBPACK_IMPORTED_MODULE_1__[\"GatewayRoutesService\"])); };\nGatewayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineComponent\"]({ type: GatewayComponent, selectors: [[\"jhi-gateway\"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵProvidersFeature\"]([_gateway_routes_service__WEBPACK_IMPORTED_MODULE_1__[\"GatewayRoutesService\"]])], decls: 46, vars: 1, consts: [[\"id\", \"gateway-page-heading\"], [1, \"btn\", \"btn-primary\", \"float-right\", 3, \"click\", \"disabled\"], [\"icon\", \"sync\"], [1, \"table-responsive\"], [\"aria-describedby\", \"gateway-page-heading\", 1, \"table\", \"table-striped\"], [\"scope\", \"col\"], [4, \"ngFor\", \"ngForOf\"], [\"class\", \"label label-danger\", 4, \"ngIf\"], [\"class\", \"table table-striped\", 4, \"ngIf\"], [1, \"label\", \"label-danger\"], [1, \"table\", \"table-striped\"], [\"target\", \"_blank\", 3, \"href\"], [3, \"class\", 4, \"ngIf\"], [\"class\", \"badge badge-warning\", 4, \"ngIf\"], [1, \"badge\", \"badge-warning\"], [1, \"badge\", \"badge-default\", \"font-weight-normal\"], [1, \"badge\", \"badge-pill\", \"badge-info\", \"font-weight-normal\"]], template: function GatewayComponent_Template(rf, ctx) { if (rf & 1) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"h2\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](4, \"span\", 0);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5, \"Gateway\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6, \"\\n\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](7, \"button\", 1);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵlistener\"](\"click\", function GatewayComponent_Template_button_click_7_listener() { return ctx.refresh(); })(\"disabled\", function GatewayComponent_Template_button_disabled_7_listener() { return ctx.updatingRoutes; });\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](8, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](9, \"fa-icon\", 2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](10, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](11, \"span\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](12, \"Refresh\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](13, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](14, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](15, \"\\n\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](16, \"h3\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](17, \"Current routes\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](18, \"\\n\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](19, \"div\", 3);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](20, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](21, \"table\", 4);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](22, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](23, \"thead\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](24, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](25, \"tr\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](26, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](27, \"th\", 5);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](28, \"URL\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](29, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](30, \"th\", 5);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](31, \"Service\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](32, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](33, \"th\", 5);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](34, \"Available servers\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](35, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](36, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](37, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](38, \"tbody\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](39, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](40, GatewayComponent_tr_40_Template, 18, 4, \"tr\", 6);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](41, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](42, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](43, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](44, \"\\n\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](45, \"\\n\");\n    } if (rf & 2) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](40);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngForOf\", ctx.gatewayRoutes);\n    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FaIconComponent\"], _angular_common__WEBPACK_IMPORTED_MODULE_3__[\"NgForOf\"], _angular_common__WEBPACK_IMPORTED_MODULE_3__[\"NgIf\"]], pipes: [ng_jhipster__WEBPACK_IMPORTED_MODULE_4__[\"JhiKeysPipe\"]], encapsulation: 2 });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](GatewayComponent, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"],\n        args: [{\n                selector: 'jhi-gateway',\n                templateUrl: './gateway.component.html',\n                providers: [_gateway_routes_service__WEBPACK_IMPORTED_MODULE_1__[\"GatewayRoutesService\"]],\n            }]\n    }], function () { return [{ type: _gateway_routes_service__WEBPACK_IMPORTED_MODULE_1__[\"GatewayRoutesService\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2dhdGV3YXkvZ2F0ZXdheS5jb21wb25lbnQudHM/ZTYzOSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2dhdGV3YXkvZ2F0ZXdheS5jb21wb25lbnQuaHRtbD8zYTgwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRWM7Ozs7Ozs7SUN1QnhDLHlFQUNJO0lBQUEsZ0pBQ0o7SUFBQSw0REFBTTs7O0lBT1Usc0VBQTBIO0lBQUEsdURBQWtDO0lBQUEsNERBQU07OztJQUEvSCx5SkFBc0Y7SUFBQywwREFBa0M7SUFBbEMsZ0dBQWtDOzs7SUFDNUosMEVBQWdFO0lBQUEsNERBQUM7SUFBQSw0REFBTTs7O0lBR3ZFLHVFQUNJO0lBQUE7SUFBQSwyRUFDSTtJQUFBO0lBQUEsMkVBQTZEO0lBQUEsdURBQWU7SUFBQSw0REFBTztJQUNuRix1REFDSjtJQUFBLDREQUFPO0lBQ1g7SUFBQSw0REFBTzs7O0lBSDhELDBEQUFlO0lBQWYsOEVBQWU7SUFDNUUsMERBQ0o7SUFESSx5TEFDSjs7O0lBWFoscUVBQ0k7SUFBQTtJQUFBLHFFQUFJO0lBQUEsd0VBQTZDO0lBQUEsdURBQWtCO0lBQUEsNERBQUk7SUFBQSw0REFBSztJQUM1RTtJQUFBLHFFQUNJO0lBQUE7SUFBQSxpSUFBMEg7SUFDMUg7SUFBQSxtSUFBZ0U7SUFDcEU7SUFBQSw0REFBSztJQUNMO0lBQUEsc0VBQ0k7SUFBQTtJQUFBLG9JQUNJOztJQUtSO0lBQUEsNERBQUs7SUFDVDtJQUFBLDREQUFLOzs7SUFiTSwwREFBeUI7SUFBekIseUpBQXlCO0lBQWlCLDBEQUFrQjtJQUFsQixnRkFBa0I7SUFFMUQsMERBQTZCO0lBQTdCLDBGQUE2QjtJQUM3QiwwREFBOEI7SUFBOUIsMkZBQThCO0lBRzdCLDBEQUFpRDtJQUFqRCwySkFBaUQ7OztJQVJuRSw0RUFDSTtJQUFBO0lBQUEsMEhBQ0k7SUFjUjtJQUFBLDREQUFROzs7SUFmQSwwREFBK0M7SUFBL0MsOEZBQStDOzs7SUFWbkUscUVBQ0k7SUFBQTtJQUFBLHFFQUFJO0lBQUEsdURBQWdCO0lBQUEsNERBQUs7SUFDekI7SUFBQSxxRUFBSTtJQUFBLHVEQUFxQjtJQUFBLDREQUFLO0lBQzlCO0lBQUEscUVBQ0k7SUFBQTtJQUFBLG9IQUNJO0lBR0o7SUFBQSwwRUFDSTtJQUFBO0lBQUEsd0hBQ0k7SUFnQlI7SUFBQSw0REFBTTtJQUNWO0lBQUEsNERBQUs7SUFDVDtJQUFBLDREQUFLOzs7SUEzQkcsMERBQWdCO0lBQWhCLDhFQUFnQjtJQUNoQiwwREFBcUI7SUFBckIsbUZBQXFCO0lBRWhCLDBEQUEyQztJQUEzQyx3R0FBMkM7SUFLVCwwREFBYTtJQUFiLDBFQUFhOztBRHBCckUsTUFBTSxnQkFBZ0I7SUFJM0IsWUFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFIOUQsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7SUFFbEUsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnRkFoQlUsZ0JBQWdCO2dHQUFoQixnQkFBZ0IsNEdBRmhCLENBQUMsNEVBQW9CLENBQUM7UUNSbkMsc0VBQ0k7UUFBQTtRQUFBLHFFQUNJO1FBQUE7UUFBQSwwRUFBZ0M7UUFBQSxrRUFBTztRQUFBLDREQUFPO1FBRTlDO1FBQUEsNEVBQ0k7UUFEd0Msd0lBQVMsYUFBUyxJQUFDO1FBQzNEO1FBQUEsd0VBQStCO1FBQUM7UUFBQSx3RUFBTTtRQUFBLG1FQUFPO1FBQUEsNERBQU87UUFDeEQ7UUFBQSw0REFBUztRQUNiO1FBQUEsNERBQUs7UUFFTDtRQUFBLHNFQUFJO1FBQUEsMEVBQWM7UUFBQSw0REFBSztRQUV2QjtRQUFBLDBFQUNJO1FBQUE7UUFBQSw0RUFDSTtRQUFBO1FBQUEseUVBQ0k7UUFBQTtRQUFBLHNFQUNJO1FBQUE7UUFBQSx5RUFBZ0I7UUFBQSwrREFBRztRQUFBLDREQUFLO1FBQ3hCO1FBQUEseUVBQWdCO1FBQUEsbUVBQU87UUFBQSw0REFBSztRQUM1QjtRQUFBLHlFQUFnQjtRQUFBLDZFQUFpQjtRQUFBLDREQUFLO1FBQzFDO1FBQUEsNERBQUs7UUFDVDtRQUFBLDREQUFRO1FBQ1I7UUFBQSx5RUFDSTtRQUFBO1FBQUEsNkdBQ0k7UUE0QlI7UUFBQSw0REFBUTtRQUNaO1FBQUEsNERBQVE7UUFDWjtRQUFBLDREQUFNO1FBQ1Y7UUFBQSw0REFBTTtRQUNOOztRQWpDb0IsMkRBQW1DO1FBQW5DLHNGQUFtQzs7NkZEWDFDLGdCQUFnQjtjQUw1Qix1REFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyw0RUFBb0IsQ0FBQzthQUNsQyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZ2F0ZXdheS9nYXRld2F5LmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGV3YXlSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9nYXRld2F5LXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEdhdGV3YXlSb3V0ZSB9IGZyb20gJy4vZ2F0ZXdheS1yb3V0ZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1nYXRld2F5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhdGV3YXkuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtHYXRld2F5Um91dGVzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEdhdGV3YXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBnYXRld2F5Um91dGVzOiBHYXRld2F5Um91dGVbXSA9IFtdO1xuICB1cGRhdGluZ1JvdXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2F0ZXdheVJvdXRlc1NlcnZpY2U6IEdhdGV3YXlSb3V0ZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0aW5nUm91dGVzID0gdHJ1ZTtcbiAgICB0aGlzLmdhdGV3YXlSb3V0ZXNTZXJ2aWNlLmZpbmRBbGwoKS5zdWJzY3JpYmUoZ2F0ZXdheVJvdXRlcyA9PiB7XG4gICAgICB0aGlzLmdhdGV3YXlSb3V0ZXMgPSBnYXRld2F5Um91dGVzO1xuICAgICAgdGhpcy51cGRhdGluZ1JvdXRlcyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2PlxuICAgIDxoMj5cbiAgICAgICAgPHNwYW4gaWQ9XCJnYXRld2F5LXBhZ2UtaGVhZGluZ1wiPkdhdGV3YXk8L3NwYW4+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiIChjbGljayk9XCJyZWZyZXNoKClcIiAoZGlzYWJsZWQpPVwidXBkYXRpbmdSb3V0ZXNcIj5cbiAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJzeW5jXCI+PC9mYS1pY29uPiA8c3Bhbj5SZWZyZXNoPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2gyPlxuXG4gICAgPGgzPkN1cnJlbnQgcm91dGVzPC9oMz5cblxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZ2F0ZXdheS1wYWdlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVSTDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNlcnZpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BdmFpbGFibGUgc2VydmVyczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3V0ZSBvZiBnYXRld2F5Um91dGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57eyByb3V0ZS5wYXRoIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHJvdXRlLnNlcnZpY2VJZCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJyb3V0ZS5zZXJ2aWNlSW5zdGFuY2VzLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FybmluZzogbm8gc2VydmVyIGF2YWlsYWJsZSFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIiAqbmdJZj1cInJvdXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaW5zdGFuY2Ugb2Ygcm91dGUuc2VydmljZUluc3RhbmNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ7eyBpbnN0YW5jZS51cmkgfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBpbnN0YW5jZS51cmkgfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5zdGFuY2UuaW5zdGFuY2VJbmZvXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS17eyBpbnN0YW5jZS5pbnN0YW5jZUluZm8uc3RhdHVzID09PSAnVVAnID8gJ3N1Y2Nlc3MnIDogJ2RhbmdlcicgfX1cIj57eyBpbnN0YW5jZS5pbnN0YW5jZUluZm8uc3RhdHVzIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFpbnN0YW5jZS5pbnN0YW5jZUluZm9cIiBjbGFzcz1cImJhZGdlIGJhZGdlLXdhcm5pbmdcIj4/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBlbnRyeSBvZiAoaW5zdGFuY2UubWV0YWRhdGEgfCBrZXlzIClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1kZWZhdWx0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWluZm8gZm9udC13ZWlnaHQtbm9ybWFsXCI+e3sgZW50cnkua2V5IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW50cnkudmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/admin/gateway/gateway.component.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/admin/gateway/gateway.module.ts":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/admin/gateway/gateway.module.ts ***!
  \*************************************************************/
/*! exports provided: GatewayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GatewayModule\", function() { return GatewayModule; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js\");\n/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ \"./src/main/webapp/app/shared/shared.module.ts\");\n/* harmony import */ var _gateway_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateway.component */ \"./src/main/webapp/app/admin/gateway/gateway.component.ts\");\n/* harmony import */ var _gateway_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gateway.route */ \"./src/main/webapp/app/admin/gateway/gateway.route.ts\");\n\n\n\n\n\n\n\nclass GatewayModule {\n}\nGatewayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineNgModule\"]({ type: GatewayModule });\nGatewayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjector\"]({ factory: function GatewayModule_Factory(t) { return new (t || GatewayModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"DogpalsPresentationSharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([_gateway_route__WEBPACK_IMPORTED_MODULE_4__[\"gatewayRoute\"]])]] });\n(function () { (typeof ngJitMode === \"undefined\" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵsetNgModuleScope\"](GatewayModule, { declarations: [_gateway_component__WEBPACK_IMPORTED_MODULE_3__[\"GatewayComponent\"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"DogpalsPresentationSharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"]] }); })();\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](GatewayModule, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"NgModule\"],\n        args: [{\n                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"DogpalsPresentationSharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([_gateway_route__WEBPACK_IMPORTED_MODULE_4__[\"gatewayRoute\"]])],\n                declarations: [_gateway_component__WEBPACK_IMPORTED_MODULE_3__[\"GatewayComponent\"]],\n            }]\n    }], null, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2dhdGV3YXkvZ2F0ZXdheS5tb2R1bGUudHM/OGEwNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNNO0FBQzRCO0FBRXBCO0FBRVI7OztBQU14QyxNQUFNLGFBQWE7OzRGQUFiLGFBQWE7b0pBQWIsYUFBYSxrQkFIZixDQUFDLHdGQUErQixFQUFFLDREQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsMkRBQVksQ0FBQyxDQUFDLENBQUM7bUlBR3RFLGFBQWEsbUJBRlQsbUVBQWdCLGFBRHJCLHdGQUErQixFQUFFOzZGQUdoQyxhQUFhO2NBSnpCLHNEQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsd0ZBQStCLEVBQUUsNERBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQywyREFBWSxDQUFDLENBQUMsQ0FBQztnQkFDakYsWUFBWSxFQUFFLENBQUMsbUVBQWdCLENBQUM7YUFDakMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2dhdGV3YXkvZ2F0ZXdheS5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERvZ3BhbHNQcmVzZW50YXRpb25TaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHYXRld2F5Q29tcG9uZW50IH0gZnJvbSAnLi9nYXRld2F5LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IGdhdGV3YXlSb3V0ZSB9IGZyb20gJy4vZ2F0ZXdheS5yb3V0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtEb2dwYWxzUHJlc2VudGF0aW9uU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW2dhdGV3YXlSb3V0ZV0pXSxcbiAgZGVjbGFyYXRpb25zOiBbR2F0ZXdheUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEdhdGV3YXlNb2R1bGUge31cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/admin/gateway/gateway.module.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/admin/gateway/gateway.route.ts":
/*!************************************************************!*\
  !*** ./src/main/webapp/app/admin/gateway/gateway.route.ts ***!
  \************************************************************/
/*! exports provided: gatewayRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gatewayRoute\", function() { return gatewayRoute; });\n/* harmony import */ var _gateway_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway.component */ \"./src/main/webapp/app/admin/gateway/gateway.component.ts\");\n\nconst gatewayRoute = {\n    path: '',\n    component: _gateway_component__WEBPACK_IMPORTED_MODULE_0__[\"GatewayComponent\"],\n    data: {\n        pageTitle: 'Gateway',\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2dhdGV3YXkvZ2F0ZXdheS5yb3V0ZS50cz9hNjllIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUF1RDtBQUVoRCxNQUFNLFlBQVksR0FBVTtJQUNqQyxJQUFJLEVBQUUsRUFBRTtJQUNSLFNBQVMsRUFBRSxtRUFBZ0I7SUFDM0IsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLFNBQVM7S0FDckI7Q0FDRixDQUFDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9nYXRld2F5L2dhdGV3YXkucm91dGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEdhdGV3YXlDb21wb25lbnQgfSBmcm9tICcuL2dhdGV3YXkuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGdhdGV3YXlSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IEdhdGV3YXlDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdHYXRld2F5JyxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/admin/gateway/gateway.route.ts\n");

/***/ })

}]);