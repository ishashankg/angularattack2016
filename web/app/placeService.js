System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlaceService;
    return {
        setters:[],
        execute: function() {
            PlaceService = (function () {
                function PlaceService() {
                    this.MUMBAI = [
                        { "name": "Gateway of India", "type": "Historic", "image": "http://www.sites4uall.com/IMAGES/ALL%20IMAGES/TOURIST/GATE%20OF%20INDIA/5.jpg", "url": "https://en.wikipedia.org/wiki/Gateway_of_India" },
                        { "name": "Siddhivinayak Temple", "type": "Religious", "image": "http://www.mapsofindia.com/mumbai/places-of-interest/images/siddhivinayak-temple.jpg", "url": "https://en.wikipedia.org/wiki/Siddhivinayak_Temple,_Mumbai" },
                        { "name": "Elephanta Caves", "type": "Historic", "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/Ardhanari@_Elephanta_Caves.jpg", "url": "https://en.wikipedia.org/wiki/Elephanta_Caves" },
                        { "name": "Haji Ali Dargah", "type": "Religious", "image": "http://www.mumbailocal.net/wp-content/uploads/2010/11/Haji-Ali-Tomb-or-Haji-Ali-Dargah-Mumbai-1.jpeg", "url": "https://en.wikipedia.org/wiki/Haji_Ali_Dargah" },
                        { "name": "Mahabaleshwar", "type": "Hill Station", "image": "http://ravinehotel.com/images/mahabaleshwar/Mahabaleshwar-waterfalls.jpg", "url": "http://wikitravel.org/en/Mahabaleshwar" },
                        { "name": "Kashid", "type": "Beach", "image": "https://www.tourmyindia.com/images/kashid-beach-tour.jpg", "url": "http://wikitravel.org/en/Kashid" },
                        { "name": "Matheran", "type": "Hill Station", "image": "http://www.outlooktraveller.com/common/uploads/article/2015/x070715155157-Matheran3.jpg.pagespeed.ic.1kJ19BbqX5.jpg", "url": "http://wikitravel.org/en/Matheran" },
                        { "name": "Raigad", "type": "Fort", "image": "http://image1.oktatabyebye.com/picture-gallery-images-large/lg55884086158.JPG", "url": "http://wikitravel.org/en/Raigad" },
                        { "name": "Shirdi", "type": "Religious", "image": "http://www.tourismandfood.com/wp-content/uploads/2016/01/Idol-of-Shirdi-Sai-Baba.jpg", "url": "http://wikitravel.org/en/Shirdi" },
                        { "name": "Lonavala", "type": "Hill Station", "image": "http://image3.mouthshut.com/images/imagesp/925003646s.jpg", "url": "http://wikitravel.org/en/Lonavala" },
                        { "name": "Igatpuri", "type": "Religious", "image": "https://upload.wikimedia.org/wikipedia/commons/1/11/Myanmargate2.jpg", "url": "http://wikitravel.org/en/Igatpuri" }
                    ];
                    this.DELHI = [
                        { "name": "Bahai Lotus Temple", "type": "Religious", "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/LotusDelhi.jpg", "url": "https://en.wikipedia.org/wiki/Lotus_Temple" },
                        { "name": "India Gate", "type": "Historic", "image": "http://www.honeymoonspecial.com/galleryimg/2845892India%20Gate.jpg", "url": "https://en.wikipedia.org/wiki/India_Gate" },
                        { "name": "Qutub Minar", "type": "Historic", "image": "https://indiaheritagesites.files.wordpress.com/2013/10/qutub-minar-2.jpg", "url": "https://en.wikipedia.org/wiki/Qutb_Minar" },
                        { "name": "Akshardham Temple", "type": "Religious", "image": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Akshardham_Delhi.jpg", "url": "https://en.wikipedia.org/wiki/Akshardham_(Delhi)" },
                        { "name": "Jama Masjid", "type": "Religious", "image": "https://www.makemytrip.com/travel-guide/media/dg_image/delhi/Jama-Masjid-Delhi.jpg", "url": "https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi" },
                        { "name": "Red Fort", "type": "Fort", "image": "http://www.mapsofindia.com/india-images/delhi/landmarks/Red_fort/Red-For-building-with-India-flag-at-the-background.JPG", "url": "https://en.wikipedia.org/wiki/Red_Fort" },
                        { "name": "Humayun Tomb", "type": "Historic", "image": "https://theurgetowander.files.wordpress.com/2013/11/dsc_5242-copy.jpg", "url": "https://en.wikipedia.org/wiki/Humayun%27s_Tomb" },
                        { "name": "Chandni Chowk", "type": "Market", "image": "http://www.holidaytravel.co/userfiles/images/Waling%20Tour%20of%20Chandni%20Chowk.jpg", "url": "https://en.wikipedia.org/wiki/Chandni_Chowk" }
                    ];
                    this.BANGALORE = [
                        { "name": "Gandikota(A.P.)", "type": "Village", "image": "http://media.indiatimes.in/media/content/2015/Sep/gandikota_1443523618_725x725.jpg", "url": "http://wikitravel.org/en/Gandikota" },
                        { "name": "Belum Caves", "type": "Caves", "image": "http://media.indiatimes.in/media/content/2015/Sep/belum_caves_1443523772_725x725.jpg", "url": "http://wikitravel.org/en/Belum_Caves" },
                        { "name": "Skandagiri Hills", "type": "Hills", "image": "http://media.indiatimes.in/media/content/2015/Sep/skandagiri%20hills_1443523860_725x725.jpg", "url": "https://en.wikipedia.org/wiki/Skandagiri" },
                        { "name": "Athirappilly Falls", "type": "Water Fall", "image": "http://media.indiatimes.in/media/content/2015/Sep/athirappilly%20falls_1443523923_725x725.jpg", "url": "https://en.wikipedia.org/wiki/Athirappilly_Falls" },
                        { "name": "Munnar", "type": "Hills", "image": "https://tmi2-tourmyindiapvtlt.netdna-ssl.com/blog/wp-content/uploads/2013/11/munnar.jpg", "url": "http://wikitravel.org/en/Munnar" },
                        { "name": "Idukki", "type": "Hills", "image": "https://tmi2-tourmyindiapvtlt.netdna-ssl.com/blog/wp-content/uploads/2013/11/idukki.jpg", "url": "https://en.wikipedia.org/wiki/Idukki_district" },
                        { "name": "Maravanthe Beach", "type": "Beach", "image": "http://media.indiatimes.in/media/content/2015/Sep/maravanthe%20beach_1443524006_725x725.jpg", "url": "https://en.wikipedia.org/wiki/Maravanthe" },
                        { "name": "Gokarna", "type": "Religious", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Gokarna_Temple.jpg/220px-Gokarna_Temple.jpg", "url": "https://en.wikipedia.org/wiki/Gokarna,_India" },
                        { "name": "Halebidu", "type": "Religious", "image": "http://media.indiatimes.in/media/content/2015/Sep/halebidu_1443524231_725x725.jpg", "url": "https://en.wikipedia.org/wiki/Halebidu" },
                        { "name": "Ponmudi Hills", "type": "Hills", "image": "http://media.indiatimes.in/media/content/2015/Sep/ponmudi-hills-kerala%20tourism_1443524443_725x725.jpg", "url": "http://wikitravel.org/en/Ponmudi_Hills" },
                        { "name": "St. Mary's Islands", "type": "Island", "image": "http://media.indiatimes.in/media/content/2015/Sep/st_marys_island_1443524645_725x725.jpg", "url": "https://en.wikipedia.org/wiki/St._Mary%27s_Islands" },
                        { "name": "Hampi", "type": "Religious", "image": "http://f.tqn.com/y/goindia/1/W/f/1/0/-/152811108.jpg", "url": "http://wikitravel.org/en/Hampi" },
                        { "name": "Ooty", "type": "Hills", "image": "https://tmi2-tourmyindiapvtlt.netdna-ssl.com/blog/wp-content/uploads/2013/11/ooty.jpg", "url": "https://en.wikipedia.org/wiki/Ooty" },
                        { "name": "Coorg", "type": "Hills", "image": "https://tmi2-tourmyindiapvtlt.netdna-ssl.com/blog/wp-content/uploads/2013/11/coorg.jpg", "url": "https://en.wikipedia.org/wiki/Kodagu_district" },
                        { "name": "Dhanushkodi", "type": "Haunted", "image": "http://media.indiatimes.in/media/content/2015/Sep/dhanushkodi%20tamil%20nadu_1443524082_725x725.jpg", "url": "https://en.wikipedia.org/wiki/Dhanushkodi" },
                        { "name": "Hogenakkal Falls", "type": "Water Fall", "image": "http://media.indiatimes.in/media/content/2015/Sep/hogenakkal_1443524312_725x725.jpg", "url": "https://en.wikipedia.org/wiki/Hogenakkal_Falls" },
                        { "name": "Kodaikanal", "type": "Hills", "image": "https://tmi2-tourmyindiapvtlt.netdna-ssl.com/blog/wp-content/uploads/2013/11/kodaikanal.jpg", "url": "https://en.wikipedia.org/wiki/Kodaikanal" },
                        { "name": "Coonoor", "type": "Hills", "image": "https://tmi2-tourmyindiapvtlt.netdna-ssl.com/blog/wp-content/uploads/2013/11/conoor.jpg", "url": "https://en.wikipedia.org/wiki/Coonoor" }
                    ];
                    this.KOLKATA = [
                        { "name": "Howrah Bridge", "type": "Bridge", "image": "http://www.transindiatravels.com/wp-content/uploads/howrah-bridge.jpg", "url": "https://en.wikipedia.org/wiki/Howrah_Bridge" },
                        { "name": "Indian Museum", "type": "Museum", "image": "http://www.transindiatravels.com/wp-content/uploads/indian-museum.jpg", "url": "https://en.wikipedia.org/wiki/Indian_Museum" },
                        { "name": "Victoria Memorial", "type": "Memorial", "image": "http://www.transindiatravels.com/wp-content/uploads/victoria-memorial.jpg", "url": "https://en.wikipedia.org/wiki/Victoria_Memorial_(India)" },
                        { "name": "Birla Temple", "type": "Religious", "image": "http://www.transindiatravels.com/wp-content/uploads/birla-temple.jpg", "url": "https://en.wikipedia.org/wiki/Birla_Mandir,_Kolkata" }
                    ];
                }
                PlaceService.prototype.forMumbai = function () {
                    return this.MUMBAI;
                };
                PlaceService.prototype.forDelhi = function () {
                    return this.DELHI;
                };
                PlaceService.prototype.forBangalore = function () {
                    return this.BANGALORE;
                };
                PlaceService.prototype.forKolkata = function () {
                    return this.KOLKATA;
                };
                return PlaceService;
            }());
            exports_1("PlaceService", PlaceService);
        }
    }
});
//# sourceMappingURL=placeService.js.map