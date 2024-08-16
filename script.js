let languageStatus = "english";

function changeLanguage() {
    
    // Call all the html elements that contain text
    let langButton = document.getElementById("language-button");
    let productLink = document.getElementById("product-link");
    let historyLink = document.getElementById("history-link");
    let heroTitle = document.getElementById("title");
    let slogan = document.getElementById("slogan-banner");
    let foodTitle = document.getElementById("food-title");
    let snacksTitle = document.getElementById("snacks-title");
    let beveragesTitle = document.getElementById("beverages-title");
    let suppliesTitle = document.getElementById("supplies-title");
    let wifiTitle = document.getElementById("wifi-title");
    let stepsTitle = document.getElementById("steps-title");
    let steps = document.getElementById("steps");
    let wifiRate = document.getElementById("wifi-rate");
    let voucher = document.getElementById("voucher");
    let price = document.getElementById("price");
    let time = document.getElementById("time");
    let pause = document.getElementById("pause");
    let vPrice = document.getElementById("v-price");
    let vTime = document.getElementById("v-time");
    let vPause = document.getElementById("v-pause");
    let twelveMinutes = document.getElementById("12-minute");
    let thirtyMinutes = document.getElementById("30-minute");
    let oneHour = document.getElementById("1-hour");
    let fourHours = document.getElementById("4-hour");
    let twelveHours = document.getElementById("12-hour");
    let oneDay = document.getElementById("1-day");
    let fiveDays = document.getElementById("5-day");
    let sixHours = document.getElementById("6-hour");
    let twelveVhours = document.getElementById("12-vhour");
    let oneVday = document.getElementById("1-vday");
    let historyTitle = document.getElementById("history-title");
    let historyOne = document.getElementById("history-1");
    let historyTwo = document.getElementById("history-2");
    let schedule = document.getElementById("schedule");
    let followUs = document.getElementById("follow-us");

    if (languageStatus === "english"){
        //Language Button
        languageStatus = "tagalog";
        langButton.innerHTML = "Click for English";
        
        // Navbar Text
        productLink.innerHTML = "Mga produkto";
        historyLink.innerHTML = "Tungkol sa Amin";

        // Hero-image Text
        heroTitle.innerHTML = "Maligayang pagdating sa<br>Lisbo Sari-Sari Store";

        // Slogan-banner Text
        slogan.innerHTML = "";
        const slogan_h1 = document.createElement("h1");
        const slogan_h5 = document.createElement("h5");
        const h1_content = document.createTextNode("Tingnan ang aming tindahan!");
        const h5_content = document.createTextNode("Mula sa de-latang pagkain hanggang sa \
            matamis,inumin, pantry staples, malamig na yelo, at mga gamit sa paaralan, \
            nag-aalok kami ng magkakaibang pagpipilian para sa iyong pang-araw-araw na pangangailangan!");
        slogan_h1.appendChild(h1_content);
        slogan_h5.appendChild(h5_content);
        slogan.appendChild(slogan_h1);
        slogan.appendChild(slogan_h5);

        // Circle-image Text
        foodTitle.innerHTML = "Pagkain";
        snacksTitle.innerHTML = "Meryenda";
        beveragesTitle.innerHTML = "Inumin";
        suppliesTitle.innerHTML = "Bagay";

        // Wifi table text
        wifiTitle.innerHTML = "Kailangan ng Koneksyon sa Internet?<br>\
        Subukan ang Nai-Nai Piso Wifi!";
        stepsTitle.innerHTML = "Mga hakbang upang kumonekta";
        steps.innerHTML = "• Pindutin ang pindutan ng pagpasok ng pera<br>• \
        Ipasok ang iyong pera<br>• Kapag tapos na, pindutin ang pindutan ng kumonekta sa internet";
        wifiRate.innerHTML = "Rate ng Wifi";
        voucher.innerHTML = "Rate ng Voucher Wifi";
        price.innerHTML = "Presyo";
        time.innerHTML = "Oras";
        pause.innerHTML = "Huminto";
        vPrice.innerHTML = "Presyo";
        vTime.innerHTML = "Oras";
        vPause.innerHTML = "Huminto";
        twelveMinutes.innerHTML = "minuto";
        oneHour.innerHTML = "oras";
        thirtyMinutes.innerHTML = "minuto";
        fourHours.innerHTML = "oras";
        twelveHours.innerHTML = "oras";
        oneDay.innerHTML = "araw";
        fiveDays.innerHTML = "araw";
        sixHours.innerHTML = "oras";
        twelveVhours.innerHTML = "oras";
        oneVday.innerHTML = "araw";
        
        // About Us text
        historyTitle.innerHTML = "Ang ating Kasaysayan";
        historyOne.innerHTML = "Nagsimula ang kasaysayan ng tindahan noong unang \
        bahagi ng ika-20 siglo bilang isang maliit na tindahan ng Sari-Sari. Ang \
        aming ina ay naglalakbay sa mainland at nakilala ang isang taong may-ari \
        ng isang grocery store. Pagkatapos ay nagsimula siyang (Alsada) ng mga \
        produkto at ibenta ang mga ito pabalik sa bahay upang kumita ng katamtamang \
        kita. Ang tindahang ito ay kung saan kami lumaki kasama ang aming ina habang \
        binabalanse niya ang pagiging isang full-time na ina, nagtatrabaho sa labas \
        ng bahay sa mga trabahong pagsasaka, at pamamahala sa Sari-Sari store.";
        historyTwo.innerHTML = "Sa paglipas ng mga taon, madalas na naka-on at off \
        ang tindahan dahil sa mga paghihirap sa pananalapi hanggang sa lumaki ang \
        lahat ng kanyang mga anak at lumipat sa iba't ibang lugar upang makahanap \
        ng mas magagandang pagkakataon. Nagpasya ang aming ina na pansamantalang \
        isara ang Sari-Sari store upang matulungan ang kanyang mga anak sa lungsod \
        sa pamamagitan ng paggawa ng mga gawaing bahay, na mabigyan sila ng mas \
        maraming oras sa pag-aaral habang nagtatrabaho. Sa sandaling ang lahat ng \
        kanyang mga anak ay may sariling pamilya at buhay, nagpasya siyang buksan \
        muli ang tindahan sa tulong nila. Ang kanyang tiyaga, determinasyon, at \
        pagsusumikap ay nagtayo ng Lisbo Sari-Sari store na mayroon tayo ngayon!";
        schedule.innerHTML = '<i class="bi bi-clock-fill"></i> Mga Oras ng Negosyo: Bukas Araw-araw • 7am - 8pm\
        <br><i class="bi bi-geo-alt-fill"></i> Lokasyon: Brgy. Tamulalod, Dumarao, Capiz';

        // Follow our Facebook text
        followUs.innerHTML = "Sundan ang aming Facebook Page!";
        
    } else if (languageStatus === "tagalog") {
        languageStatus = "english";
        langButton.innerHTML = "I-click para sa Tagalog";
        
        // Navbar Text
        productLink.innerHTML = "Products";
        historyLink.innerHTML = "About Us";

        // Hero-image Text
        heroTitle.innerHTML = "Welcome to the<br>Lisbo Sari-Sari Store";

        // Slogan-banner Text
        slogan.innerHTML = "";
        const slogan_h1 = document.createElement("h1");
        const slogan_h5 = document.createElement("h5");
        const h1_content = document.createTextNode("Check out our store!");
        const h5_content = document.createTextNode("From canned food to sweets,\
            drinks, pantry staples, chilled ice, and school supplies, we offer a\
            diverse selection for your everyday needs!");
        slogan_h1.appendChild(h1_content);
        slogan_h5.appendChild(h5_content);
        slogan.appendChild(slogan_h1);
        slogan.appendChild(slogan_h5);

        //Circle-image text
        foodTitle.innerHTML = "Food";
        snacksTitle.innerHTML = "Snacks";
        beveragesTitle.innerHTML = "Beverages";
        suppliesTitle.innerHTML = "Supplies";

        // Wifi table text
        wifiTitle.innerHTML = "Need Internet Connection?<br>Try Nai-Nai Piso Wifi!";
        stepsTitle.innerHTML = "Steps to Connect";
        steps.innerHTML = "• Press insert money button\
        <br>• Insert your money<br>• Once done, press connect to internet button";
        wifiRate.innerHTML = "Wifi Rate";
        voucher.innerHTML = "Voucher Rate Wifi";
        price.innerHTML = "Price";
        time.innerHTML = "Time";
        pause.innerHTML = "Pause";
        vPrice.innerHTML = "Price";
        vTime.innerHTML = "Time";
        vPause.innerHTML = "Pause";
        twelveMinutes.innerHTML = "minutes";
        oneHour.innerHTML = "hour";
        thirtyMinutes.innerHTML = "minutes";
        fourHours.innerHTML = "hours";
        twelveHours.innerHTML = "hours";
        oneDay.innerHTML = "day";
        fiveDays.innerHTML = "days";
        sixHours.innerHTML = "hours";
        twelveVhours.innerHTML = "hours";
        oneVday.innerHTML = "day";

        // About Us text
        historyTitle.innerHTML = "Our history";
        historyOne.innerHTML = "The store's history began in the early 20th century \
        as a tiny Sari-Sari store. Our mother would travel to the mainland and became \
        acquainted with someone who owned a grocery store. She then began to (Alsada) \
        the products and sell them back home to make a modest profit. This store is \
        where we grew up alongside our mother as she balanced being a full-time mom, \
        working outside the home in farming jobs, and managing the Sari-Sari store.";
        
        historyTwo.innerHTML = "Over the years, the store was often on and off due to \
        financial struggles until all her children grew up and moved to different places \
        to find better opportunities. Our mother decided to close the Sari-Sari store \
        temporarily to help her children in the city by doing household chores, giving \
        them more time to study while working. Once all her children had their own families \
        and lives, she decided to reopen the store with their help. Her perseverance, \
        determination, and hard work built the Lisbo Sari-Sari store we have today!";
        
        schedule.innerHTML = '<i class="bi bi-clock-fill"></i> Buisness Hours: Open Daily • 7am - 8pm\
        <br><i class="bi bi-geo-alt-fill"></i> Location: Brgy. Tamulalod, Dumarao, Capiz';

        // Follow Our Facebook
        followUs.innerHTML = "Follow our Facebook Page!";
    }
}