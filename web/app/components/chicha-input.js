System.register(['angular2/core', '../sharedService', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, sharedService_1, router_1;
    var ChichaInput;
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
            }],
        execute: function() {
            ChichaInput = (function () {
                function ChichaInput(service, router) {
                    this.bindModelDataChange = new core_1.EventEmitter();
                    this.service = service;
                    this.router = router;
                }
                ChichaInput.prototype.updateData = function (event) {
                    this.bindModelData = event;
                    this.bindModelDataChange.emit(event);
                };
                ChichaInput.prototype.send = function (str) {
                    this.service.saveData(str);
                    this.router.navigate(['/Recommend']);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChichaInput.prototype, "placeHolderText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ChichaInput.prototype, "bindModelData", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ChichaInput.prototype, "bindModelDataChange", void 0);
                ChichaInput = __decorate([
                    core_1.Component({
                        selector: 'chicha-input',
                        template: "<input  type=\"text\" [ngModel]=bindModelData placeholder=\"{{placeHolderText}}\" (ngModelChange)=\"updateData($event)\" class=\"tweet-account-text\" (keyup.enter)=\"send(bindModelData)\">",
                    }), 
                    __metadata('design:paramtypes', [sharedService_1.SharedService, router_1.Router])
                ], ChichaInput);
                return ChichaInput;
            }());
            exports_1("ChichaInput", ChichaInput);
        }
    }
});
//# sourceMappingURL=chicha-input.js.map