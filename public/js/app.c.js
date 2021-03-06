define(["app.m", "app.v"], function (MenuModel, MenuView) {

    /*
     * default conf if user doens't send any
    */
    const defaults = {
        dataURI: "dist/js/data/menu.data.json",
        menuClass: ".menu_holder",
        respondTo: {
            width: 700,
            height: "auto",
            collapsed: false
        },
        beforeRespond: {
            mode: "overlap",
            direction: "ttb", //ttb, rtl, btt
        },
        afterRespond: {
            place: "top", //bottom
            //text
            backText: "Back",
            menuTitle: "Main Menu",
            //icons
            menuIcon: "url/icon.png",
            backIcon: "icon-class",
            //animations
            mode: "push", //overlap,
            direction: "ltr", //ttb, rtl, btt
            subnavShow: "toggle", //push-over, fade-in, fade-out
        },
        speed: "fast", //meidum, slow, number
    }

    class MenuController {

        /*
         * Main Constructor
         * @conf {object} - configuration sent by the dev
         * @this.model {object} - the main model for data
         * @this.view {object} - the view
         */
        constructor (conf) {
            this.conf = conf;
            //init the model with the url to retrive the data later 
            this.model = new MenuModel();
            //init the view
            this.view = new MenuView();
            //checks for different configurations sent on init
            this.checksConf();
        }

        /*
         * Checks for configuration and validates them
         * If all OK then fetch the data using the config
         *
         * @check {menuClass} - required class for nav rendering
         * @check {dataURI} - check if user sent a giving uri to get data
         */
        checksConf () {
            let menuClass, that = this;
            this.data = [];

            //check for the menu class where the menu is going to be rendered
            if ('config' in this.conf) {
                if ('menuClass' in this.conf) {
                    menuClass = this.conf.menuClass || defaults.menuClass;
                }
            }

            //check for a URI if sent by user
            if (!("dataURI" in this.conf) || this.conf.dataURI === "") this.conf.dataURI = defaults.dataURI;
            
            //load the data from the model
            that.loadData().then( (data) => {
                //push the data into the parent scope
                that.data.push(data); 
                that.renderView();
            });
        }

        /*
         * Load's data from the model using the giving uri
         * @return {object} - returns an object of data
         */
        loadData () {
            return this.model.loadData(this.conf.dataURI);
        }

        /*
         * Renders the view tempalte withe data
         * @return {null} - should render view
         */
        renderView () {
            let that = (typeof this !== "undefined") ? this : {};
            //render the view
            return that.view.render(that.data, that.conf.menuClass);
        }
    }

    return MenuController;
});
