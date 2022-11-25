$(document).ready(function () {
    setWelcomeText();
    $(document).ajaxComplete(function () {
    setWelcomeText();
    });
var icon1 = "https://www.beijerelectronics.se/-/media/beijerelectronics,-d-,com/Images/Products/X2/585x400/585x400_X2_base_v2_group.ashx?mw=110&hash=438A0E59F4FE671F72E408B41B2B7A7DB353EDE8";
var icon2 = "https://www.beijerelectronics.se/-/media/beijerelectronics,-d-,com/Images/Products/iX___Software/iX___HMI___Software/585x400_ix-software_logo.ashx?mw=110&hash=3892F1EE208881769D0FFCFE605813E12E741D48";
var icon3 = "https://www.beijerelectronics.com/-/media/beijerelectronics,-d-,com/Images/Products/Fast___track___to___the___cloud/acirro-driverlist_585x400-icon.ashx?mw=110&hash=98B5ADACF3464D6E022D12E5E82502CA2D66AA6E";

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