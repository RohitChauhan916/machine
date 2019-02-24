(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n  header .row{\r\n    position: absolute;\r\n    top: 0px;\r\n  }\r\n  .lo h1{\r\n    margin-top: 50%;\r\n    margin-left: 58px;\r\n  }\r\n  header .row h1{\r\n    color: white;\r\n    font-size: 93px;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.8px;\r\n  }\r\n  .rect{\r\n    width: 100%;\r\n  }\r\n  .navbar{\r\n    border-radius: 15px;\r\n    position: absolute;\r\n    top: 0px;\r\n    width: 100%;\r\n    margin-top: 50px;\r\n    max-width: 1252px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    -webkit-transform: translate(4%, 5%);\r\n            transform: translate(4%, 5%);\r\n  }\r\n  .nav-item{\r\n    font-size: 14px;\r\n  }\r\n  .navbar ul li a{\r\n    color: black;\r\n  }\r\n  .navbar ul li a:hover{\r\n    color: blue;\r\n    border-bottom: 1px solid blue;\r\n  }\r\n  .bf1{\r\n    position: absolute;\r\n    width: 132px;\r\n    height: 148px;\r\n    top: 693px;\r\n    left: 210px;\r\n  }\r\n  .bf2{\r\n    position: absolute;\r\n    width: 186px;\r\n    height: 208px;\r\n    top: 669px;\r\n    left: 57px;\r\n  }\r\n  .container{\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  .our{\r\n    color: #2f83c5;\r\n    font-size: 61px;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    letter-spacing: 1.2px;\r\n  }\r\n  .smart{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 94px;\r\n    height: 70px;\r\n    \r\n  }\r\n  .sma{\r\n    text-align: center;\r\n    color: #000000;\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    letter-spacing: 1.8px;\r\n  }\r\n  .demo{\r\n    padding: 30px;\r\n    transition: -webkit-transform .5s;\r\n    transition: transform .5s;\r\n    transition: transform .5s, -webkit-transform .5s;\r\n  }\r\n  .view{\r\n    display: block;\r\n    color: #154e7d;\r\n    border-color: #154e7d;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 304px;\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    background-color: white;\r\n    \r\n  }\r\n  .view:hover{\r\n    color: white;\r\n    background-color: #154e7d;\r\n  }\r\n  .demo:hover{\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n  }\r\n  .trend{\r\n    position: relative;\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  .trend img{\r\n    width: 100%;\r\n  }\r\n  .tre{\r\n    position: absolute;\r\n    top: 167px;\r\n    color: #ffffff;\r\n    letter-spacing: 1.2px;\r\n    font-size: 61px;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  .tren{\r\n    position: absolute;\r\n    top: 285px;\r\n    color: white;\r\n    left: 0px;\r\n    right: 0px;\r\n    \r\n  }\r\n  .rea{\r\n    width: 374px;\r\n    height: 512px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .tren p{\r\n    margin-left: 58px;\r\n    margin-right: 56px;\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    letter-spacing: 1.8px;\r\n}\r\n  .tren img{\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-bottom: 108px;\r\n}\r\n  .real{\r\n  position: relative;\r\n}\r\n  .real button{\r\n  position: absolute;\r\n  top: 0px;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #174d7d;\r\n  border-color: #174d7d;\r\n  background-color: white;\r\n  width: 208px;\r\n}\r\n  .contact{\r\n  position: relative;\r\n}\r\n  .contact .row{\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n  .contact img{\r\n  width: 100%;\r\n}\r\n  .contact .new{\r\n  margin-top: 265px;\r\n  color: white;\r\n  font-size: 34px;\r\n  font-weight: 400;\r\n  letter-spacing: 1.8px;\r\n  margin-left: 57px;\r\n}\r\n  .frm{\r\n  background-color: white;\r\n  box-shadow: 0 10px 13px 3px rgba(0, 0, 0, 0.34);\r\n  text-align: center;\r\n  margin-right: 90px;\r\n  margin-top: 26px;\r\n  padding: 20px;\r\n}\r\n  footer{\r\n  background-color: #174d7c;\r\n  width: 100%;\r\n}\r\n  footer ul{\r\n  list-style: none;\r\n  display: inline-flex;\r\n}\r\n  footer li{\r\n  padding: 20px 10px;\r\n  font-size: 30px;\r\n  color: white;\r\n  transition: color .5s;\r\n  cursor: pointer;\r\n}\r\n  footer li:hover{\r\n  color: grey;\r\n}\r\n  .sli .carousel{\r\n  width: 30%;\r\n  height: auto;\r\n  display: block;\r\n  margin: auto auto auto auto;\r\n}\r\n  .contact{\r\n  top: 293px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtFQUNWO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0VBQ3ZCO0VBQ0Y7SUFDSSxXQUFXO0VBQ2I7RUFDRjtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5QjtFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZOztFQUVkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUI7RUFDM0I7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCOztFQUV6QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0VBQ1Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVOztFQUVaO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0VBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7RUFDQTtFQUNFLFdBQVc7QUFDYjtFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLHVCQUF1QjtFQUN2QiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0VBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtFQUNBO0VBQ0UsV0FBVztBQUNiO0VBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7RUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGhlYWRlciAucm93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5sbyBoMXtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OHB4O1xyXG4gIH1cclxuICBoZWFkZXIgLnJvdyBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogOTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuOHB4O1xyXG4gIH1cclxuLnJlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5uYXZiYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyNTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNCUsIDUlKTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1pdGVte1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5uYXZiYXIgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsdWU7XHJcbiAgfVxyXG4gIC5iZjF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTMycHg7XHJcbiAgICBoZWlnaHQ6IDE0OHB4O1xyXG4gICAgdG9wOiA2OTNweDtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gIH1cclxuICAuYmYye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4NnB4O1xyXG4gICAgaGVpZ2h0OiAyMDhweDtcclxuICAgIHRvcDogNjY5cHg7XHJcbiAgICBsZWZ0OiA1N3B4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5vdXJ7XHJcbiAgICBjb2xvcjogIzJmODNjNTtcclxuICAgIGZvbnQtc2l6ZTogNjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gIH1cclxuICAuc21hcnR7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDk0cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLnNtYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcclxuICB9XHJcbiAgLmRlbW97XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcclxuICB9XHJcbiAgLnZpZXd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMTU0ZTdkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTU0ZTdkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzA0cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICB9XHJcbiAgLnZpZXc6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU0ZTdkO1xyXG4gIH1cclxuICAuZGVtbzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB9XHJcbiAgLnRyZW5ke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50cmVuZCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRyZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTY3cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgIGZvbnQtc2l6ZTogNjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC50cmVue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyODVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLnJlYXtcclxuICAgIHdpZHRoOiAzNzRweDtcclxuICAgIGhlaWdodDogNTEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLnRyZW4gcHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcclxufVxyXG4udHJlbiBpbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwOHB4O1xyXG59XHJcbi5yZWFse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmVhbCBidXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogIzE3NGQ3ZDtcclxuICBib3JkZXItY29sb3I6ICMxNzRkN2Q7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDIwOHB4O1xyXG59XHJcbi5jb250YWN0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFjdCAucm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxufVxyXG4uY29udGFjdCBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhY3QgLm5ld3tcclxuICBtYXJnaW4tdG9wOiAyNjVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1N3B4O1xyXG59XHJcbi5mcm17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zNCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogOTBweDtcclxuICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzRkN2M7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuZm9vdGVyIHVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuZm9vdGVyIGxpe1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZm9vdGVyIGxpOmhvdmVye1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcbi5zbGkgLmNhcm91c2Vse1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gYXV0bztcclxufVxyXG4uY29udGFjdHtcclxuICB0b3A6IDI5M3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <img class=\"rect\" src=\"assets/bg/Rectangle 11.png\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"nav navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">HOME <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">PORTFOLIO</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                SERVICE\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item\" href=\"#\">SMART CONTRACT DEVELOPMENT</a>\n                <a class=\"dropdown-item\" href=\"#\">EXCHANGES</a>\n                <a class=\"dropdown-item\" href=\"#\">BLOCKCHAIN DEVELOPMENT</a>\n                <a class=\"dropdown-item\" href=\"#\">HYPERLEDGER</a>\n                <a class=\"dropdown-item\" href=\"#\">PRIVATE BLOCKCHAIN DEVELOPMENT</a>\n                <a class=\"dropdown-item\" href=\"#\">WALLET</a>\n              </div>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\">ABOUT US</a>\n                </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">TECHNOLOGIES</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">MARKETING INSIGHT</a>\n              </li>\n        </ul>\n      </div>\n      </div>\n    </nav>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-12 lo\">\n    <h1>lorem <b>ipsum</b></h1>\n    </div>\n    </div>\n</header>\n\n<div class=\"container\">\n    <p class=\"our\">our services</p>\n    <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12 demo\">\n    <img class=\"smart\" src=\"assets/icons/Layer 3.png\">\n      <p class=\"sma\">SMART CONTRACTS DEVELOPMENT</p>\n    </div>\n    <div class=\"col-lg-4 col-md-6 col-sm-12 demo\">\n        <img class=\"smart\" src=\"assets/icons/Layer 4.png\">\n        <p class=\"sma\">EXCHANGES</p>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12 demo\">\n          <img class=\"smart\" src=\"assets/icons/Layer 5.png\">\n          <p class=\"sma\">BLOCKCHAIN DEVELOPMENT</p>\n        </div>\n        <div class=\"col-lg-4 col-md-6 col-sm-12 demo\">\n            <img class=\"smart\" src=\"assets/icons/Network-512.png\">\n            <p class=\"sma\">HYPERLEDGER</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 col-sm-12 demo\">\n              <img class=\"smart\" src=\"assets/icons/if_Dzone_669685.png\">\n              <p class=\"sma\">PRIVATE BLOCKCHAIN DEVELOPMENT</p>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 demo\">\n                <img class=\"smart\" src=\"assets/icons/Layer 6.png\">\n                <p class=\"sma\">WALLET</p>\n              </div>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary view\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      View All Services\n    </button>\n\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <ul>\n            <li>SMART CONTRACTS DEVELOPMENT</li>\n            <li>EXCHANGES</li>\n            <li>BLOCKCHAIN DEVELOPMENT</li>\n            <li>HYPERLEDGER</li>\n            <li>PRIVATE BLOCKCHAIN DEVELOPMENT</li>\n            <li>WALLET</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"trend\">\n  <img src=\"assets/bg/4683.png\">\n  <p class=\"tre\">TRENDS</p>\n  <div class=\"row tren\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 sli\">\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                  <div class=\"carousel-caption d-none d-md-block\">\n                     \n                      <p>...</p>\n                    </div>\n                <img class=\"d-block w-100\" src=\"assets/slider/Real-Estate-Investment-Dropping.png\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/slider/cybercrime2.png\" alt=\"Second slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/slider/businessman-business-sketch.png\" alt=\"Third slide\">\n              </div>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </div>\n        </div>\n  </div>\n</div>\n<div class=\"contact\">\n  <img src=\"assets/bg/Rectangle 13.png\">\n  <div class=row>\n    <div class=\"col-lg-6 col-md-6 col-sm-6\">\n      <p class=\"new\">New to the Blockchain industry? Or got any queries? We are just one click away!</p>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-6\">\n      <div class=\"frm\">\n        <h1>Contact Us</h1>\n        <p>How can we help you?</p>\n        <form [formGroup]=\"heroForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"emailHelp\" placeholder=\"Your Name\" formControlName=\"name\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Your Email Address\" formControlName=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Company\" formControlName=\"company\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Your Subject\" formControlName=\"subject\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Your Message..\" formControlName=\"message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"heroForm.invalid\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <ul>\n  <li><i class=\"fab fa-facebook\"></i></li>\n  <li><i class=\"fab fa-instagram\"></i></li>\n  <li><i class=\"fab fa-twitter\"></i></li>\n  <li><i class=\"fab fa-pinterest\"></i></li>\n  <li><i class=\"fab fa-linkedin\"></i></li>\n</ul>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(32)
            ]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'company': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]+$')]),
            'subject': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
            'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)])
        });
    };
    AppComponent.prototype.onSubmit = function () {
        alert("Contact form has been submitted successfully");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\machine\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map