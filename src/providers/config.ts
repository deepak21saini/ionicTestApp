export class Config {
	public static SITE_URL = "http://asm.nascenture.com";
    public static API_ENDPOINT = "http://asm.nascenture.com/api/";
    public static SERVER_URL = "http://localhost:5000/";
	public static BUSINESS_IMAGES = "https://cryptic-beach-64691.herokuapp.com/upload/";
	public static VERIFICATION_TYPE = "email";
	public static API_URLS = {
		LOGIN:   	Config.API_ENDPOINT+"login",
		REGISTER:   Config.API_ENDPOINT+"register",
		USERIMAGE: 	Config.API_ENDPOINT+"userImage",
		ASSETS:     Config.API_ENDPOINT+"getAssets",
		GETUSERBYID: Config.API_ENDPOINT+"userDetailGetbyID",
		VERIFY_PIN : Config.API_ENDPOINT+"verifyPin",
		FORGOT_PASSWORD: Config.API_ENDPOINT+"forgotPassword",
		SEND_PIN: Config.API_ENDPOINT+"sendPin",
		UPDATE_PROFILE: Config.API_ENDPOINT + "updateProfile",
		RESET_PASSWORD: Config.API_ENDPOINT+"resetPassword",
		DELETE_IMAGE: Config.API_ENDPOINT+"deleteImage",
		EVENTS : {
			LIST: Config.API_ENDPOINT+"getEvents",
			ADD: Config.API_ENDPOINT+"addEvent",
			EDIT: Config.API_ENDPOINT+"updateEvent",
			DELETE: Config.API_ENDPOINT+"destroyEvent",
			ADD_SHAGUN: Config.API_ENDPOINT+"eventAmount",
			SHAGUNS: Config.API_ENDPOINT+"getEventAmounts",
			DELETE_SHAGUN: Config.API_ENDPOINT+"destroyEventAmount",
			NOTIFICATIONS : Config.API_ENDPOINT+"getNotifications",
			UPDATE_SHAGUN: Config.API_ENDPOINT+"updateEventAmount",
			DELETE_SHAGUN_IMAGE: Config.API_ENDPOINT+"deleteShagunImage"

			
		} 

		 
	}
  
	
}
