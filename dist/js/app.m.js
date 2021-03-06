"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(function () {
    var MenuModel = (function () {

        /*
         * Main Model Constructor
         */

        function MenuModel() {
            _classCallCheck(this, MenuModel);
        }

        /*
         * Load's data with a required URI static || sent by user
         * @param {dataURI} - the URI wich the data will be loaded
         * @return {JSON object} - returns JSON oject
         */

        _createClass(MenuModel, [{
            key: "loadData",
            value: function loadData(dataURI) {
                if (!dataURI) return "Please provide a URI, to load data from";

                return this.get(dataURI).then(JSON.parse);
            }

            /*
             * AJAX call require's an URI and get's the result
             * using response and reject promises
             * @param {url} - URI where the ajax will do call
             * @return {new promise} - return's a prmoise which can be used later
             */
        }, {
            key: "get",
            value: function get(url) {
                return new Promise(function (resolve, reject) {
                    var req = new XMLHttpRequest();
                    //request type
                    req.open("GET", url);
                    req.onload = function () {
                        req.status == 200 ? resolve(req.response) : reject(Error(req.statusText));
                    };
                    req.onerror = function () {
                        reject(Error("Network Error"));
                    };
                    req.send();
                });
            }
        }]);

        return MenuModel;
    })();

    return MenuModel;
});