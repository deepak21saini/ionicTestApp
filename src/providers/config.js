var Config = /** @class */ (function () {
    function Config() {
    }
    Config.SITE_URL = "http://asm.nascenture.com";
    Config.API_ENDPOINT = "http://asm.nascenture.com/api/";
    Config.SERVER_URL = "http://localhost:5000/";
    Config.BUSINESS_IMAGES = "https://cryptic-beach-64691.herokuapp.com/upload/";
    Config.VERIFICATION_TYPE = "email";
    Config.API_URLS = {
        LOGIN: Config.API_ENDPOINT + "login",
        REGISTER: Config.API_ENDPOINT + "register",
        USERIMAGE: Config.API_ENDPOINT + "userImage",
        ASSETS: Config.API_ENDPOINT + "getAssets",
        GETUSERBYID: Config.API_ENDPOINT + "userDetailGetbyID",
        VERIFY_PIN: Config.API_ENDPOINT + "verifyPin",
        FORGOT_PASSWORD: Config.API_ENDPOINT + "forgotPassword",
        SEND_PIN: Config.API_ENDPOINT + "sendPin",
    };
    return Config;
}());
export { Config };
//# sourceMappingURL=config.js.map