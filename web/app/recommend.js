System.register(['angular2/core', './sharedService', 'angular2/router', 'angular2/http', './placeService', './components/city-item-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sharedService_1, router_1, http_1, placeService_1, city_item_component_1;
    var Recommend;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sharedService_1_1) {
                sharedService_1 = sharedService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (placeService_1_1) {
                placeService_1 = placeService_1_1;
            },
            function (city_item_component_1_1) {
                city_item_component_1 = city_item_component_1_1;
            }],
        execute: function() {
            Recommend = (function () {
                function Recommend(router, service, placeService, http) {
                    var _this = this;
                    this.url = 'http://jsonplaceholder.typicode.com/posts/1';
                    this.twitterUrl = '/twitter/user';
                    this.router = router;
                    this.service = service;
                    this.http = http;
                    this.placeService = placeService;
                    this.twitterId = service.getData();
                    var username = JSON.stringify({ 'username': this.twitterId });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.http.post(this.twitterUrl, username, {
                        headers: headers
                    }).subscribe(function (data) {
                        _this.result = data._body;
                        _this.place = service.parseData(_this.result);
                        if (_this.place == "Mumbai") {
                            _this.places = _this.placeService.forMumbai();
                        }
                        else if (_this.place == "Delhi") {
                            _this.places = _this.placeService.forDelhi();
                        }
                        else if (_this.place == "Bangalore") {
                            _this.places = _this.placeService.forBangalore();
                        }
                        else if (_this.place == "Kolkata") {
                            _this.places = _this.placeService.forKolkata();
                        }
                        else {
                            _this.places = _this.placeService.forMumbai();
                        }
                    });
                }
                Recommend.prototype.back = function () {
                    this.router.navigate(['/Home']);
                };
                Recommend = __decorate([
                    core_1.Component({
                        directives: [city_item_component_1.CityItemComponent],
                        templateUrl: 'app/recommend.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, sharedService_1.SharedService, placeService_1.PlaceService, http_1.Http])
                ], Recommend);
                return Recommend;
            }());
            exports_1("Recommend", Recommend);
        }
    }
});
//# sourceMappingURL=recommend.js.map