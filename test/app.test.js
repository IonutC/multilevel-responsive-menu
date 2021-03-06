define(["app"], function (Menu) {

    describe("Menu Class", function () {
        beforeEach(function () {
            //default config
            let conf = {
                dataURI: "./base/public/js/data/menu.data.json",
                config: {
                    menuClass: ".menu_holder"
                }
            };
            this.menu = new Menu(conf);
        });
        it("should return an object", function () {
            expect(this.menu).toEqual(jasmine.any(Object));
        });
    })
})
