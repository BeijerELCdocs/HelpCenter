$(document).ready(function () {
    setWelcomeText();
    $(document).ajaxComplete(function () {
    setWelcomeText();
    });
var icon1 = "https://www.beijerelectronics.com/-/media/beijerelectronics,-d-,com/Images/News___and___Events/Webinar/Webinar___images___585x400_linkedin_201013-17.ashx?as=1&h=136&la=en&mh=200&w=200&hash=B496BF98ADD1E37F70AAB894E95D4AEDF4C7C9C1";
var icon2 = "https://www.beijerelectronics.com/-/media/beijerelectronics,-d-,com/Images/News___and___Events/Webinar/Webinar___images___585x400_linkedin_201013-15.ashx?as=1&h=136&la=en&mh=200&w=200&hash=3BABB1ABFFF7494EF993640A72A6928F0226B2C3"
var icon3 = "https://www.beijerelectronics.com/-/media/beijerelectronics,-d-,com/Images/News___and___Events/Webinar/Webinar-images-power-generators-585x585.ashx?as=1&h=136&la=en&mh=200&w=200&hash=AFF64520D8CE7A51F8DEEC48DA8DAC4769530391";

$(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
$(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
$(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");

$(".publication-icon").remove();
});

function setWelcomeText(){
    for (var key in welcomeTextDict) {
        var element = $("header.portal-header[data-portal-language=" + key +"] h1");
        element.text(welcomeTextDict[key])
    }
}
var welcomeTextDict = { "en" : "Welcome to our Help Center. How can we help?",
                        "ja" : "Text displayed in Japanese"};