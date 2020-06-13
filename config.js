/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
    		module: "MMM-COVID19",
    		position: "bottom_right",
    		config: {
      			updateInterval: 300000,
      			worldStats: true,
      			delta: true,
      			lastUpdateInfo: true,
      			countries: [ "S. Korea", "USA", "China", "Japan" ],
      			headerRowClass: "small",
      			rapidapiKey : "0ab64e7c61mshcb8650033f0e939p1c653ajsn95784b21f789" 
			}
  		}, 
  		{
			module: "MMM-json-feed",
			position: "top_left",
			config: {
				urls: "https://github.com/21400262/Data/blob/master/Korea_regional.json",
				arrayName: "koreaRegionalData",
				arraySize: 5,
				values: ["Region", "TotalCases"],
				title: "Regional Cases"
			}
		},
  	/*	{
			module: "MMM-JsonTable",
			position: "bottom_right",
			header: "COVID19_Regional Cases",
			config: {
				url: "~/MagicMirror/modules/MMM-JsonTable/Data.json", // Required
				arrayName: "koreaRegionalData", // Optional
			}			
		},
		{
			module: "MMM-JsonGraph",
			position: "top_left",
			header: "Data",
			config: {
				url: "~/MagicMirror/modules/MMM-JsonGraph/Data.json",
				arrayName: "koreaRegionalData",
				xAxisName: "TotalCases",
				textValue: "Region",
				updateInterval: 60000
			}	
		},*/
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_right"
		},
		{
			module: "MMM-OnScreenMenu",
			position: "bottom_right",
			/* Valid positions: 'top_right', 'top_left', 'bottom_right', 'bottom_left' */
			config: {
				touchMode: false,
				enableKeyboard: true,
				menuItems: {
					reboot: { title: "Reboot", icon: "spinner" },
					shutdown: { title: "Shutdown", icon: "power-off" },
					moduleHide1: { title: "Hide Youtube", icon: "minus-square", name: "MMM-EmbedYoutube" },
					moduleShow1: { title: "Show Youtube", icon: "plus-square", name: "MMM-EmbedYoutube" },
					moduleHide2: { title: "Hide json-feed", icon: "minus-square", name: "MMM-json-feed" },
					moduleShow2: { title: "Show json-feed", icon: "plus-square", name: "MMM-json-feed" },
				}
			}
		},
		{
	  		module: "MMM-EmbedYoutube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
			position: "top_left",	// This can be any of the regions.
			config: {
			// See 'Configuration options' in README.md for more information.
				video_id: "NMre6IAAAiU",
				loop: false
			}
		},
	/*	{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
	*/	{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Yonhap Internatinoal News",
						url: "http://www.yonhapnewstv.co.kr/category/news/international/feed/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},  
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
