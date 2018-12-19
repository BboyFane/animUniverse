webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requests_requests__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notificatinons_notificatinons__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__requests_requests__["a" /* RequestsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__notificatinons_notificatinons__["a" /* NotificatinonsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Requests" tabIcon="md-calendar" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Notificatinons" tabIcon="notifications" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Categories" tabIcon="md-apps" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Account" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Chat" tabIcon="md-chatboxes" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatscreenPage = /** @class */ (function () {
    function ChatscreenPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatscreen',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\chatscreen\chatscreen.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span class="profile"><img src="assets/imgs/profile2.png"></span>Aliza Smith <small> | Beauty</small><span> <ion-icon name="md-more"></ion-icon></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <!--    <img src="../../assets/imgs/12b.png">-->\n\n    <ion-card class="send">\n        <h2>Hey Aliza !!</h2>\n        <p>12:30 pm</p>\n    </ion-card>\n    <ion-card class="received">\n        <h2>Hey !!</h2>\n        <p>12:31pm</p>\n    </ion-card>\n    <ion-card class="send">\n        <h2>So are beautician ?</h2>\n        <p>12:32 pm</p>\n    </ion-card>\n    <ion-card class="received">\n        <h2>Yes,How may I help you ma,m?</h2>\n        <p>12:35pm</p>\n    </ion-card>\n\n    <div class="fixed-bottom">\n        <ion-row>\n            <ion-col col-2 class="">\n                <p class="bg-thime" text-center>Book</p>\n            </ion-col>\n            <ion-col col-8>\n                <ion-list class="" no-lines>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Type your message"></ion-input>\n                        <h3 item-end>\n                            <ion-icon><img src="assets/imgs/add-icon.png"></ion-icon>\n                            <ion-icon name="md-mic"></ion-icon>\n                        </h3>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n            <ion-col col-2 class="">\n                <p class="bg-thime" text-center>\n                    <ion-icon name="md-send"></ion-icon>\n                </p>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\chatscreen\chatscreen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ChatscreenPage);
    return ChatscreenPage;
}());

//# sourceMappingURL=chatscreen.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SignupPage.prototype.forgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\signup\signup.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>Sign Up</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-avatar item-start>\n                    <ion-icon name="md-person" class="text-thime"></ion-icon>\n                </ion-avatar>\n                <ion-label class="text-grey" floating>Enter Full Name</ion-label>\n                <ion-input type="text" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-avatar item-start>\n                    <ion-icon name="md-mail" class="text-thime"></ion-icon>\n                </ion-avatar>\n                <ion-label class="text-grey" floating>Enter Email Id</ion-label>\n                <ion-input type="text" value=""></ion-input>\n            </ion-item>\n\n            <ion-item class="otp">\n                <ion-label class="text-grey">Enter OTP Sent to adove given number</ion-label>\n                <ion-input type="password" value="1232"></ion-input>\n            </ion-item>\n        </ion-list>\n        <p class="text-grey resend">00:23 <span class="text-thime">Resend OTP</span></p>\n        <button class="btn" ion-button round full margin-top margin-bottom (click)="tabs()">Sign up now</button>\n        <p class="text-thime" text-center (click)="forgotpassword()">Forgot Password</p>\n        <div class="fixed-bottom">\n            <p class="text-grey" text-center><small>By signing up, you are agree to our <ins>terms & condition</ins></small></p>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestsPage = /** @class */ (function () {
    function RequestsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.requests = "pending";
    }
    RequestsPage.prototype.booking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking__["a" /* BookingPage */]);
    };
    RequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requests',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\requests\requests.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <ion-title>Requests <span><ion-icon name="md-search"></ion-icon></span></ion-title>\n    </ion-navbar>\n\n    <ion-segment [(ngModel)]="requests">\n        <ion-segment-button value="pending">\n            Pending\n        </ion-segment-button>\n        <ion-segment-button value="completed">\n            Completed\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="requests">\n        <ion-list *ngSwitchCase="\'pending\'" no-lines>\n            <ion-item class="" (click)="booking()">\n                <ion-avatar item-start>\n                    <img src="assets/imgs/profile2.png">\n                </ion-avatar>\n                <h2><span class="text-ellipsis">Alizam Smith </span><span class="text-light-grey small">&nbsp; | Plumber</span> <span class="ml-auto small">Pending</span></h2>\n                <p class="text-grey"><span class="text-ellipsis"><img src="assets/imgs/ruppes-icon.png"> 200 / per hover</span> <span class="ml-auto text-ellipsis">21<sup>st</sup> jan, 09:00 - 11:00</span></p>\n            </ion-item>\n            <ion-item class="approved" (click)="booking()">\n                <ion-avatar item-start>\n                    <img src="assets/imgs/profile1.png">\n                </ion-avatar>\n                <h2><span class="text-ellipsis">Alex John</span><span class="text-light-grey small">&nbsp; | Plumber</span> <span class="ml-auto small">Approved</span></h2>\n                <p class="text-grey"><span class="text-ellipsis"><img src="assets/imgs/ruppes-icon.png"> 250 / per hover</span> <span class="ml-auto text-ellipsis">21<sup>st</sup> jan, 09:00 - 11:00</span></p>\n            </ion-item>\n            <ion-item class="rejected" (click)="booking()">\n                <ion-avatar item-start>\n                    <img src="assets/imgs/profile3.png">\n                </ion-avatar>\n                <h2><span class="text-ellipsis">Poul Wiliams</span><span class="text-light-grey small">&nbsp; | Plumber</span> <span class="ml-auto small">Rejected</span></h2>\n                <p class="text-grey"><span class="text-ellipsis"><img src="assets/imgs/ruppes-icon.png"> 200 / per hover</span> <span class="ml-auto text-ellipsis">21<sup>st</sup> jan, 09:00 - 11:00</span></p>\n            </ion-item>\n            <ion-item class="in-process" (click)="booking()">\n                <ion-avatar item-start>\n                    <img src="assets/imgs/profile4.png">\n                </ion-avatar>\n                <h2><span class="text-ellipsis">Beena Smith</span><span class="text-light-grey small">&nbsp; | Plumber</span> <span class="ml-auto small">In process</span></h2>\n                <p class="text-grey"><span class="text-ellipsis"><img src="assets/imgs/ruppes-icon.png"> 200 / per hover</span> <span class="ml-auto text-ellipsis">21<sup>st</sup> jan, 09:00 - 11:00</span></p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'completed\'" no-lines>\n            <ion-item class="approved" (click)="booking()">\n                <ion-avatar item-start>\n                    <img src="assets/imgs/profile1.png">\n                </ion-avatar>\n                <h2><span class="text-ellipsis">Alex John</span><span class="text-light-grey small">&nbsp; | Plumber</span> <span class="ml-auto small">Approved</span></h2>\n                <p class="text-grey"><span class="text-ellipsis"><img src="assets/imgs/ruppes-icon.png"> 250 / per hover</span> <span class="ml-auto text-ellipsis">21<sup>st</sup> jan, 09:00 - 11:00</span></p>\n            </ion-item>\n            <ion-item class="in-process" (click)="booking()">\n                <ion-avatar item-start>\n                    <img src="assets/imgs/profile4.png">\n                </ion-avatar>\n                <h2><span class="text-ellipsis">Beena Smith</span><span class="text-light-grey small">&nbsp; | Plumber</span> <span class="ml-auto small">In process</span></h2>\n                <p class="text-grey"><span class="text-ellipsis"><img src="assets/imgs/ruppes-icon.png"> 200 / per hover</span> <span class="ml-auto text-ellipsis">21<sup>st</sup> jan, 09:00 - 11:00</span></p>\n            </ion-item>\n        </ion-list>\n    </div>\n    <!--    <img src="../../assets/imgs/14.png" (click)="booking()">-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\requests\requests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], RequestsPage);
    return RequestsPage;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\booking\booking.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Job Detail</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <!--    <img src="../../assets/imgs/15.png">-->\n\n    <ion-list class="profile">\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile3.png">\n            </ion-avatar>\n            <h2 class=""><strong class="text-ellipsis">Alizam Smith</strong> <span> | Plumber</span>\n                <ion-icon name="md-text" class="text-thime"></ion-icon>\n            </h2>\n            <div class="details">\n                <p class=""><small>Job Task</small><span class="text-ellipsis">Tab. Wash Basin and sink Problem</span></p>\n\n                <ion-row>\n                    <ion-col col-6>\n                        <p class=""><small>BooKing for</small><span class="text-ellipsis">20<sup>th</sup> Jan, 09:00 - 11:00 </span></p>\n                    </ion-col>\n                    <ion-col col-6>\n                        <p class="job-fess"><small>Job fess</small><span class="text-ellipsis"><img src="assets/imgs/ruppes-icon.png">\n                            200 / per hover</span>\n                        </p>\n                    </ion-col>\n                </ion-row>\n                <p class="job-fess"><small>Address</small><span class="">Home, 140 Shraddha Apatment Ashirwad Society, Ner ICICI Bank, Vadodara. Landmark: Opp. Gandhi Statue.</span></p>\n            </div>\n        </ion-item>\n    </ion-list>\n    <div class="btn-container">\n        <ion-row>\n            <ion-col col-4>\n                <button ion-button icon-start full class="disable"><ion-icon name="md-close"></ion-icon>Cancel</button>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-start full><ion-icon name="md-refresh"></ion-icon>Reschedule</button>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-start full><ion-icon name="md-person"></ion-icon>View Profile</button>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="job-status">\n        <h2>Job Status</h2>\n        <ion-list no-lines>\n            <ion-item class="active">\n                <span item-start class="circle"></span>\n                <div class="text">\n                    <h4 class="text-ellipsis">Booking Accepted\n                        <small>Job Accepted on 19<sup>th</sup> Jan, 08:32</small>\n                    </h4>\n                </div>\n            </ion-item>\n            <ion-item class="disable">\n                <span item-start class="circle"></span>\n                <div class="text">\n                    <h4 class="text-ellipsis">Job In process\n                        <small>Job Started on 20<sup>th</sup> Jan, 09:00 - 11:00</small>\n                    </h4>\n                </div>\n            </ion-item>\n            <ion-item class="disable">\n                <span item-start class="circle"></span>\n                <div class="text">\n                    <h4 class="text-ellipsis">Job Finished\n                        <small>Job Completed on 12:30 | <span>Client Reviewed <span class="text-green"> 4 <ion-icon name="md-star"></ion-icon></span></span></small>\n                    </h4>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\booking\booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificatinonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificatinonsPage = /** @class */ (function () {
    function NotificatinonsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificatinonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificatinons',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\notificatinons\notificatinons.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Notificatinons <span><ion-icon name="md-search"></ion-icon></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list no-lines>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2><span>Found a beautician you may search for. </span><span class="text-grey small">12:31 pm</span></h2>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile3.png">\n            </ion-avatar>\n            <h2><span>You request to Mr.Poul for plumbing is rejected. </span><span class="text-grey small">31 min ago</span></h2>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile4.png">\n            </ion-avatar>\n            <h2><span>You request to My Johnson for Pest control is accepted.</span> <span class="text-grey small">3 hour ago</span></h2>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile5.png">\n            </ion-avatar>\n            <h2><span>Found a beautician you may search for.</span><span class="text-grey small">1 days ago</span></h2>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile5.png">\n            </ion-avatar>\n            <h2><span>You request to Mr.Poul for plumbing is rejected.</span><span class="text-grey small">5 days ago</span></h2>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile4.png">\n            </ion-avatar>\n            <h2><span>You request to My Johnson for Pest control is accepted.</span> <span class="text-grey small">3 hour ago</span></h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\notificatinons\notificatinons.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], NotificatinonsPage);
    return NotificatinonsPage;
}());

//# sourceMappingURL=notificatinons.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.city = "Mumbai";
    }
    HomePage.prototype.category = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\home\home.html"*/'<ion-header class="bg-transparent ">\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="pin" class="text-white pin-icon"></ion-icon>\n            <span class="city" style="margin-left: 0 !important;">\n                <ion-label class="text-white">Location For service</ion-label>\n                <ion-icon name="ios-arrow-down-outline"></ion-icon>\n                <ion-select [(ngModel)]="city" class="text-white select-city">\n                    <ion-option value="Mumbai" class="text-ellipsis">Mumbai, Bandra </ion-option>\n                    <ion-option value="Delhi" class="text-ellipsis">Delhi</ion-option>\n                </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="banner">\n        <img src="assets/imgs/banner.jpg">\n        <h1 class="text-white">How Can We Help You Today?</h1>\n    </div>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for service"></ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor="let item of items">\n            {{ item }}\n        </ion-item>\n    </ion-list>\n    <!--    <img src="../../assets/imgs/05.png" (click)="category()">-->\n\n\n    <div class="home-menu">\n        <ion-row>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_beauty.png">\n                    <p class="text-ellipsis">Beauty</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_homecare.png">\n                    <p class="text-ellipsis">Home Care</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_pestcontrol.png">\n                    <p class="text-ellipsis">Pest Control</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_car.png">\n                    <p class="text-ellipsis">Car & Bike</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_computer.png">\n                    <p class="text-ellipsis">Computer</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_electric.png">\n                    <p class="text-ellipsis">Electric</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_healthcare.png">\n                    <p class="text-ellipsis">Health Care</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_plumbing.png">\n                    <p class="text-ellipsis">Plumbing</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_appliances.png">\n                    <p class="text-ellipsis">Appliances</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_healthcare.png">\n                    <p class="text-ellipsis">Health Care</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_plumbing.png">\n                    <p class="text-ellipsis">Plumbing</p>\n                </div>\n            </ion-col>\n            <ion-col col-4 (click)="category()">\n                <div class="menu-item">\n                    <img src="assets/imgs/ic_appliances.png">\n                    <p class="text-ellipsis">Appliances</p>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listofplumber_listofplumber__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CategoryPage.prototype.listofplumber = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listofplumber_listofplumber__["a" /* ListofplumberPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\category\category.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span><ion-icon name="md-search"></ion-icon></span></ion-title>\n    </ion-navbar>\n    <div class="logo-box bg-thime">\n        <div class="logo" text-center>\n            <img src="assets/imgs/plaumbing-logo.png">\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines>\n        <ion-item (click)="listofplumber()">\n            <h2><span class="text-ellipsis">Tab Wash Basin and shink Problem</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item (click)="listofplumber()">\n            <h2><span class="text-ellipsis">Bathroom Water Filters</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item (click)="listofplumber()">\n            <h2><span class="text-ellipsis">Bathroom Fitting</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item (click)="listofplumber()">\n            <h2><span class="text-ellipsis">Bathroom Water Filters</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item (click)="listofplumber()">\n            <h2><span class="text-ellipsis">Block & leakages</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item (click)="listofplumber()">\n            <h2><span class="text-ellipsis">Watter tank problem</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item (click)="listofplumber()">\n            <h2><span class="text-ellipsis">Pineline & pumps</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListofplumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plumberprofile_plumberprofile__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListofplumberPage = /** @class */ (function () {
    function ListofplumberPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gaming = "nes";
    }
    ListofplumberPage.prototype.plumberprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plumberprofile_plumberprofile__["a" /* PlumberprofilePage */]);
    };
    ListofplumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listofplumber',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\listofplumber\listofplumber.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <ion-title> <span><ion-icon name="md-search"></ion-icon></span></ion-title>\n    </ion-navbar>\n\n    <ion-list no-lines>\n        <ion-item>\n            <ion-select [(ngModel)]="gaming">\n                <ion-option value="nes">Tab, Wash Basin and sink problem</ion-option>\n                <ion-option value="n64">Bathroom Water Filters</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list no-lines>\n        <ion-item class="" (click)="plumberprofile()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>\n                <span class="text-ellipsis">Aliza Smith </span>\n                <span class="text-light-grey small">&nbsp; | Plumber</span>\n                <span class="ml-auto small text-green">4.1  <ion-icon name="md-star"></ion-icon> <small>(121)</small></span>\n            </h2>\n            <p class="text-grey">\n                <span class="text-ellipsis">\n                    <img src="assets/imgs/ruppes-icon.png"> 200 / per hover\n                </span>\n                <span class="ml-auto text-ellipsis">2.0 km away</span></p>\n        </ion-item>\n\n        <ion-item class="" (click)="plumberprofile()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2>\n                <span class="text-ellipsis">Alex John</span>\n                <span class="text-light-grey small">&nbsp; | Plumber</span>\n                <span class="ml-auto small text-green">3.5  <ion-icon name="md-star"></ion-icon> <small>(121)</small></span>\n            </h2>\n            <p class="text-grey">\n                <span class="text-ellipsis">\n                    <img src="assets/imgs/ruppes-icon.png"> 250 / per hover\n                </span>\n                <span class="ml-auto text-ellipsis">2.3 km away</span></p>\n        </ion-item>\n\n        <ion-item class="" (click)="plumberprofile()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile3.png">\n            </ion-avatar>\n            <h2>\n                <span class="text-ellipsis">Poul Wiliams</span>\n                <span class="text-light-grey small">&nbsp; | Plumber</span>\n                <span class="ml-auto small text-green">4.2  <ion-icon name="md-star"></ion-icon> <small>(121)</small></span>\n            </h2>\n            <p class="text-grey">\n                <span class="text-ellipsis">\n                    <img src="assets/imgs/ruppes-icon.png"> 250 / per hover\n                </span>\n                <span class="ml-auto text-ellipsis">5.1 km away</span></p>\n        </ion-item>\n\n        <ion-item class="" (click)="plumberprofile()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile4.png">\n            </ion-avatar>\n            <h2>\n                <span class="text-ellipsis">Beena Smith </span>\n                <span class="text-light-grey small">&nbsp; | Plumber</span>\n                <span class="ml-auto small text-green">4.5  <ion-icon name="md-star"></ion-icon> <small>(121)</small></span>\n            </h2>\n            <p class="text-grey">\n                <span class="text-ellipsis">\n                    <img src="assets/imgs/ruppes-icon.png"> 200 / per hover\n                </span>\n                <span class="ml-auto text-ellipsis">6.0 km away</span></p>\n        </ion-item>\n        <ion-item class="" (click)="plumberprofile()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile4.png">\n            </ion-avatar>\n            <h2>\n                <span class="text-ellipsis">John Rodriks </span>\n                <span class="text-light-grey small">&nbsp; | Plumber</span>\n                <span class="ml-auto small text-green">3.9  <ion-icon name="md-star"></ion-icon> <small>(66)</small></span>\n            </h2>\n            <p class="text-grey">\n                <span class="text-ellipsis">\n                    <img src="assets/imgs/ruppes-icon.png"> 150 / per hover\n                </span>\n                <span class="ml-auto text-ellipsis">6.2 km away</span></p>\n        </ion-item>\n\n        <ion-item class="" (click)="plumberprofile()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2>\n                <span class="text-ellipsis">Alex John</span>\n                <span class="text-light-grey small">&nbsp; | Plumber</span>\n                <span class="ml-auto small text-green">3.5  <ion-icon name="md-star"></ion-icon> <small>(121)</small></span>\n            </h2>\n            <p class="text-grey">\n                <span class="text-ellipsis">\n                    <img src="assets/imgs/ruppes-icon.png"> 250 / per hover\n                </span>\n                <span class="ml-auto text-ellipsis">2.3 km away</span></p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\listofplumber\listofplumber.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ListofplumberPage);
    return ListofplumberPage;
}());

//# sourceMappingURL=listofplumber.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlumberprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booknow_booknow__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatscreen_chatscreen__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlumberprofilePage = /** @class */ (function () {
    function PlumberprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.plumber = "about";
    }
    PlumberprofilePage.prototype.booknow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booknow_booknow__["a" /* BooknowPage */]);
    };
    PlumberprofilePage.prototype.chatscreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatscreen_chatscreen__["a" /* ChatscreenPage */]);
    };
    PlumberprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plumberprofile',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\plumberprofile\plumberprofile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span> <ion-icon name="md-share"></ion-icon></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n    <div class="bg-light profile-box">\n        <div class="profile">\n            <div class="profile-img">\n                <img src="assets/imgs/profile2.png">\n            </div>\n            <p class="retaing text-green" text-right>3.5 <span class="text-light-grey"><ion-icon name="star" class="text-green"></ion-icon> (98)</span></p>\n            <h2 text-center><span text-ellipsis>Alex John</span> <span class="type"> | Plumber</span></h2>\n\n            <ion-row>\n                <ion-col col-6>\n                    <h3 text-center><img src="assets/imgs/ruppes-icon.png">250</h3>\n                    <p text-center>per hover</p>\n                </ion-col>\n                <ion-col col-6>\n                    <h3 text-center> 2.3 km</h3>\n                    <p text-center>away from you</p>\n                </ion-col>\n            </ion-row>\n            <ion-row class="btn-box">\n                <ion-col col-6>\n                    <button ion-button icon-start full class="btn" (click)="booknow()">\n                        <ion-icon name="md-checkmark-circle" ></ion-icon>\n                        Book now\n                    </button>\n                </ion-col>\n                <ion-col col-6>\n                    <button ion-button icon-start full class="btn message-btn text-thime" (click)="chatscreen()">\n                        <ion-icon name="md-text" ></ion-icon>\n                      Message\n                    </button>\n                </ion-col>\n            </ion-row>\n        </div>\n        <ion-segment [(ngModel)]="plumber">\n            <ion-segment-button value="about">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="reviews">\n                Reviews\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div class="tab">\n        <div [ngSwitch]="plumber" class="tab-container">\n            <ion-list *ngSwitchCase="\'about\'">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>\n                <div class="services">\n                    <h6 class="text-thime">\n                        Services\n                    </h6>\n                    <p>Tab, Wash Basin and Shink Problem</p>\n                    <p>Bathroom Watter Filters</p>\n                    <p>Bathroom fittings</p>\n                    <p>Bathroom tank problem</p>\n                    <p>Block & Leackages</p>\n                </div>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'reviews\'" no-lines class="reviews">\n                <ion-item>\n                    <div class="reviews-details">\n                        <div class="review-img">\n                            <img src="assets/imgs/profile2.png">\n                        </div>\n                        <h2 class="text-ellipsis">Emol Williams <br><small class="text-green">4.0 <ion-icon name="star" class="text-green"></ion-icon></small></h2>\n                        <p class="text-ellipsis">21<sup>st</sup> Jan\' 18 </p>\n                    </div>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.</p>\n                </ion-item>\n                <ion-item>\n                    <div class="reviews-details">\n                        <div class="review-img">\n                            <img src="assets/imgs/profile3.png">\n                        </div>\n                        <h2 class="text-ellipsis">Emol Williams <br><small class="text-green">5.0 <ion-icon name="star" class="text-green"></ion-icon></small></h2>\n                        <p class="text-ellipsis">21<sup>st</sup> Jan\' 18 </p>\n                    </div>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.</p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\plumberprofile\plumberprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PlumberprofilePage);
    return PlumberprofilePage;
}());

//# sourceMappingURL=plumberprofile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooknowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooknowPage = /** @class */ (function () {
    function BooknowPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gaming = "nes";
        this.where = "nes";
    }
    BooknowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booknow',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\booknow\booknow.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Book now <span> <ion-icon name="md-checkmark"></ion-icon></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class="profile bg-thime">\n        <ion-item class=" bg-thime">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2 class="text-white">Alex John <span> | Plumber</span></h2>\n            <p class="text-white">Tab. Wash Basin and sink Problem</p>\n        </ion-item>\n    </ion-list>\n    <ion-scroll scrollX="true" style="height: 120px;; white-space: nowrap;" class=" bg-thime">\n        <div class="select-date active">\n            <p text-center>Mon</p>\n            <h2 text-center>23</h2>\n        </div>\n        <div class="select-date">\n            <p text-center>The</p>\n            <h2 text-center>24</h2>\n        </div>\n        <div class="select-date">\n            <p text-center>Web</p>\n            <h2 text-center>25</h2>\n        </div>\n        <div class="select-date">\n            <p text-center>Thu</p>\n            <h2 text-center>26</h2>\n        </div>\n        <div class="select-date">\n            <p text-center>Frt</p>\n            <h2 text-center>27</h2>\n        </div>\n        <div class="select-date">\n            <p text-center>Sat</p>\n            <h2 text-center>28</h2>\n        </div>\n        <div class="select-date">\n            <p text-center>Sun</p>\n            <h2 text-center>29</h2>\n        </div>\n    </ion-scroll>\n\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item class="select-box">\n                <ion-label class="text-thime">When?</ion-label>\n                <ion-select [(ngModel)]="gaming">\n                    <ion-option value="nes">09:00am - 11:00 am</ion-option>\n                    <ion-option value="n64">11:00 am - 09:00am</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item class="select-box">\n                <ion-label class="text-thime">Where?</ion-label>\n                <ion-select [(ngModel)]="where">\n                    <ion-option value="nes">Aadarsh Society</ion-option>\n                    <ion-option value="n64">Nintendo64</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-row>\n                <ion-col col-4 padding-right>\n                    <ion-item>\n                        <ion-label class="text-grey" floating>House num</ion-label>\n                        <ion-input type="text" value="104"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-8 padding-left>\n                    <ion-item>\n                        <ion-label class="text-grey" floating>Society / Building</ion-label>\n                        <ion-input type="text" value="Shraddha residency"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-item>\n                <ion-label class="text-grey" floating>Full Address</ion-label>\n                <ion-input type="text" value="Behind Golden plaza, Delhi."></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label class="text-grey" floating>Landmark</ion-label>\n                <ion-input type="text" value="Mg Statue"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\booknow\booknow.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BooknowPage);
    return BooknowPage;
}());

//# sourceMappingURL=booknow.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manageaddress_manageaddress__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_privacy__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faqs_faqs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage.prototype.manageaddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__manageaddress_manageaddress__["a" /* ManageaddressPage */]);
    };
    AccountPage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    AccountPage.prototype.privacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__privacy_privacy__["a" /* PrivacyPage */]);
    };
    AccountPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]);
    };
    AccountPage.prototype.faqs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__faqs_faqs__["a" /* FaqsPage */]);
    };
    AccountPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signin_signin__["a" /* SigninPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\account\account.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Account</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list no-lines>\n        <ion-item class="profile">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2><span class="text-ellipsis">Alizam Smith </span>\n                <ion-icon name="md-create"></ion-icon>\n            </h2>\n            <p class="text-grey">+91 123 456 7890</p>\n        </ion-item>\n\n        <ion-item class="" (click)="manageaddress()">\n            <h2>\n                <ion-icon name="ios-pin" class="mr-auto text-thime"></ion-icon> <span class="text-ellipsis">Manage Address</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item class="" (click)="contact()">\n            <h2>\n                <ion-icon name="ios-mail" class="mr-auto text-thime"></ion-icon> <span class="text-ellipsis">Contact us</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item class="" (click)="privacy()">\n            <h2>\n                <ion-icon name="md-lock" class="mr-auto text-thime"></ion-icon> <span class="text-ellipsis">Privacy Policy</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item class="" (click)="about()">\n            <h2>\n                <ion-icon class="mr-auto text-thime"> <img src="assets/imgs/about-icon.png"></ion-icon> <span class="text-ellipsis">About us</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n        <ion-item class="" (click)="faqs()">\n            <h2>\n                <ion-icon class="mr-auto text-thime"> <img src="assets/imgs/faqs-icon.png"></ion-icon> <span class="text-ellipsis">FAQs & Terms</span>\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h2>\n        </ion-item>\n\n    </ion-list>\n    <ion-list no-lines (click)="signin()">\n        <ion-item class="sign-out">\n            <h2 text-center>\n                <strong class="text-ellipsis text-thime" text-center>Sign out</strong>\n\n            </h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageaddressPage = /** @class */ (function () {
    function ManageaddressPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ManageaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manageaddress',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\manageaddress\manageaddress.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Manage Address</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <!--    <img src="../../assets/imgs/19.png">-->\n    <h2>Saved Address</h2>\n    <ion-list no-lines>\n        <ion-item>\n            <h3>Home</h3>\n            <p class="text-grey">\n                <ion-icon name="ios-pin"></ion-icon> 104, Shraddha Apartment Opp Natraj Cinema, Raliway Godi Road Vadodara, Gujarat - 3900020\n            </p>\n            <p class="text-grey">\n                <ion-icon name="md-phone-portrait"></ion-icon>+91 903 356 708\n            </p>\n            <ion-icon name="md-create" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item>\n            <h3>Office</h3>\n            <p class="text-grey">\n                <ion-icon name="ios-pin"></ion-icon> 205, Geroge Tower Newar ICICI bank, MG road, Vadodara, Gujarat - 3900020\n            </p>\n            <p class="text-grey">\n                <ion-icon name="md-phone-portrait"></ion-icon>+91 987 654 3210\n            </p>\n            <ion-icon name="md-create" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item class="add-item">\n            <h2 class="text-thime" text-center>\n                <ion-icon name="md-add-circle"></ion-icon>Add New\n            </h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\manageaddress\manageaddress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ManageaddressPage);
    return ManageaddressPage;
}());

//# sourceMappingURL=manageaddress.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Contact Us</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!--    <img src="../../assets/imgs/20.png">-->\n    <div class="call-now bg-thime">\n        <h6 text-center class=" text-white">Call to speak with us</h6>\n        <button class="btn text-thime" ion-button round full margin-top margin-bottom icon-start> <ion-icon name="md-call" padding-right></ion-icon><strong>Call Now</strong></button>\n    </div>\n    <h5 text-center margin-top margin-bottom padding-bottom class="text-thime">Or Write us your issue</h5>\n\n    <div class="form">\n        <ion-list no-lines padding-bottom>\n            <ion-item>\n                <ion-avatar item-start>\n                    <ion-icon name="md-person" class="text-thime"></ion-icon>\n                </ion-avatar>\n                <ion-label class="text-grey" floating>Your Name</ion-label>\n                <ion-input type="text" value="Alizam Smith"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-avatar item-start style="margin-bottom: 3px; margin-right: 28px;">\n                    <ion-icon name="md-phone-portrait" class="text-thime"></ion-icon>\n                </ion-avatar>\n                <ion-label class="text-grey" floating>Mobile Number</ion-label>\n                <ion-input type="text" value="+91 903 335 7608"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-avatar item-start style="margin-bottom: 3px; margin-right: 28px;">\n                    <ion-icon name="md-mail" class="text-thime"></ion-icon>\n                </ion-avatar>\n                <ion-label class="text-grey">Your message</ion-label>\n                <ion-textarea type="text" class="placeholder-color" placeholder="Type your message here"></ion-textarea>\n            </ion-item>\n        </ion-list>\n        <button class="btn" ion-button round full margin-top>Submit</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\privacy\privacy.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Privacy Policy\n        </ion-title>\n    </ion-navbar>\n    <div class="logo-box bg-thime">\n        <div class="logo">\n            <img src="assets/imgs/logo.png">\n            <!-- <h1 class="text-white">HANDY<span>MAN</span></h1> -->\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="text">\n        <h2 class="text-thime">Our Privacy Policy</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ga centuries</p>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\privacy\privacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            About Us\n        </ion-title>\n    </ion-navbar>\n    <div class="logo-box bg-thime">\n        <div class="logo">\n            <img src="assets/imgs/logo.png">\n            <!-- <h1 class="text-white">HANDY<span>MAN</span></h1> -->\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="text">\n        <h2 class="text-thime">About us</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ga centuries</p>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqsPage = /** @class */ (function () {
    function FaqsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FaqsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faqs',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\faqs\faqs.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>FAQs & Terms</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list no-lines>\n        <ion-item class="">\n            <h2>\n                <span class="text-ellipsis">About Services</span>\n                <ion-icon name="ios-arrow-down-outline"></ion-icon>\n            </h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n        </ion-item>\n        <ion-item class="">\n            <h2>\n                <span class="text-ellipsis">Sign in & Sign up</span>\n                <ion-icon name="ios-arrow-down-outline"></ion-icon>\n            </h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n        </ion-item>\n        <ion-item class="">\n            <h2>\n                <span class="text-ellipsis">Payment Policy</span>\n                <ion-icon name="ios-arrow-down-outline"></ion-icon>\n            </h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n        </ion-item>\n        <ion-item class="">\n            <h2>\n                <span class="text-ellipsis">Searching Service</span>\n                <ion-icon name="ios-arrow-down-outline"></ion-icon>\n            </h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n        </ion-item>\n        <ion-item class="">\n            <h2>\n                <span class="text-ellipsis">Ratings</span>\n                <ion-icon name="ios-arrow-down-outline"></ion-icon>\n            </h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n        </ion-item>\n        <ion-item class="">\n            <h2>\n                <span class="text-ellipsis">Chatting</span>\n                <ion-icon name="ios-arrow-down-outline"></ion-icon>\n            </h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\faqs\faqs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FaqsPage);
    return FaqsPage;
}());

//# sourceMappingURL=faqs.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatscreen_chatscreen__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatPage.prototype.chatscreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatscreen_chatscreen__["a" /* ChatscreenPage */]);
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\chat\chat.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Chat</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list no-lines>\n        <ion-item (click)="chatscreen()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2><span class="text-ellipsis">Aliza Smith </span>\n                <span class="text-light-grey small">&nbsp; | Beauty</span>\n                <span class="ml-auto small">12:31pm</span>\n            </h2>\n            <p class="text-grey text-ellipsis">Yes, How may i help you?</p>\n        </ion-item>\n\n        <ion-item (click)="chatscreen()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2><span class="text-ellipsis">Alex John</span>\n                <span class="text-light-grey small">&nbsp; | Home care</span>\n                <span class="ml-auto small">31 min ago</span>\n            </h2>\n            <p class="text-grey text-ellipsis">Yes, How may i help you?</p>\n        </ion-item>\n        <ion-item (click)="chatscreen()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile3.png">\n            </ion-avatar>\n            <h2><span class="text-ellipsis">Poul Wiliams</span>\n                <span class="text-light-grey small">&nbsp; | Pest Control</span>\n                <span class="ml-auto small">3 Hour ago</span>\n            </h2>\n            <p class="text-grey text-ellipsis">Okey done ! Will be there.</p>\n        </ion-item>\n        <ion-item (click)="chatscreen()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile4.png">\n            </ion-avatar>\n            <h2><span class="text-ellipsis">Beena Smith </span>\n                <span class="text-light-grey small">&nbsp; | Beauty</span>\n                <span class="ml-auto small">1 day ago</span>\n            </h2>\n            <p class="text-grey text-ellipsis">Fine its 2500 last.</p>\n        </ion-item>\n        <ion-item (click)="chatscreen()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile5.png">\n            </ion-avatar>\n            <h2><span class="text-ellipsis">john Rodriks</span>\n                <span class="text-light-grey small">&nbsp; | Plumbing</span>\n                <span class="ml-auto small">12:31pm</span>\n            </h2>\n            <p class="text-grey text-ellipsis">We hope you are satisfied with our service</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\chat\chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ForgotpasswordPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\forgotpassword\forgotpassword.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>Forgot Password?</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="form">\n        <p class="text-grey" text-center>Enter your rgisterd email address.<br>we\'ll send password reset info on mail.</p>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-avatar item-start>\n                    <ion-icon name="md-mail" class="text-thime"></ion-icon>\n                </ion-avatar>\n                <ion-label class="text-grey" floating>Enter Email ID</ion-label>\n                <ion-input type="text" value=""></ion-input>\n            </ion-item>\n        </ion-list>\n        <button class="btn" ion-button round full margin-top margin-bottom (click)="tabs()">Submit</button>\n\n        <div class="fixed-bottom">\n            <p class="text-grey" text-center><small>By signing up, you are agree to our <ins>terms & condition</ins></small></p>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\forgotpassword\forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_booking_booking__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_booknow_booknow__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_category_category__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatscreen_chatscreen__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_faqs_faqs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listofplumber_listofplumber__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_manageaddress_manageaddress__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notificatinons_notificatinons__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_privacy_privacy__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_plumberprofile_plumberprofile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_requests_requests__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_booknow_booknow__["a" /* BooknowPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatscreen_chatscreen__["a" /* ChatscreenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faqs_faqs__["a" /* FaqsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listofplumber_listofplumber__["a" /* ListofplumberPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_manageaddress_manageaddress__["a" /* ManageaddressPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_notificatinons_notificatinons__["a" /* NotificatinonsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_plumberprofile_plumberprofile__["a" /* PlumberprofilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_requests_requests__["a" /* RequestsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_booknow_booknow__["a" /* BooknowPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatscreen_chatscreen__["a" /* ChatscreenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faqs_faqs__["a" /* FaqsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listofplumber_listofplumber__["a" /* ListofplumberPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_manageaddress_manageaddress__["a" /* ManageaddressPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_notificatinons_notificatinons__["a" /* NotificatinonsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_plumberprofile_plumberprofile__["a" /* PlumberprofilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_requests_requests__["a" /* RequestsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\signin\signin.html"*/'<!--\n<ion-header>\n    <ion-navbar>\n        <ion-title>Signin</ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content>\n    <div class="logo-box bg-thime">\n        <div class="logo">\n            <img src="assets/imgs/logo.png">\n            <!-- <h1 class="text-white">HANDY<span>MAN</span></h1> -->\n        </div>\n    </div>\n\n    <p class="text-grey" text-center>Sign in or Sign up to continue</p>\n\n    <div class="form">\n        <ion-list inset padding-bottom>\n            <ion-item>\n                <ion-avatar item-start style="margin-bottom: 3px; margin-right: 28px;">\n                    <ion-icon name="md-mail" class="text-thime"></ion-icon>\n                </ion-avatar>\n                <ion-label class="text-grey" floating>Email</ion-label>\n                <ion-input type="text"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button class="btn" ion-button round full margin-top margin-bottom (click)="signup()">Continue</button>\n        <div class="social">\n            <p class="text-light-grey" text-center>Or Continue with</p>\n\n            <ion-row>\n                <ion-col col-6>\n                    <button class="btn text-thime" ion-button round full margin-top margin-bottom (click)="signup()">Facebook</button>\n                </ion-col>\n                <ion-col col-6>\n                    <button class="btn google" ion-button round full margin-top margin-bottom (click)="signup()">Google+</button>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class="fixed-bottom">\n            <p class="text-grey" text-center><small>By signing up, you are agree to our <ins>terms & condition</ins></small></p>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Fane\dev\imie\cdi\animUniverse\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map