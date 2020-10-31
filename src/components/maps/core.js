import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(document).ready(function(){
    autoloadVectorMap();
});


function generateInfo(id)
{
    // sample catch trigger code here !
    alert('id = '+id+' , Gunakan parameter "id" untuk calling endpoint {{Ip}}/api/partai/dpd/data');
}

function autoloadVectorMap()
{
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-aceh');}, 100);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sumatera-utara');}, 200);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-jambi');}, 300);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-bengkulu');}, 400);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-lampung');}, 500);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-bangka-belitung');}, 600);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-riau');}, 700);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sumatera-barat');}, 800);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sumatera-selatan');}, 900);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-banten');}, 1000);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-jawa-barat');}, 1100);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-jakarta');}, 1200);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-jawa-tengah');}, 1300);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-yogyakarta');}, 1400);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-jawa-timur');}, 1500);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-bali');}, 1600);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-nusa-tenggara-barat');}, 1700);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-nusa-tenggara-timur');}, 1800);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-maluku');}, 1900);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-papua-barat');}, 2000);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-papua');}, 2100);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-maluku-utara');}, 2200);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sulawesi-tenggara');}, 2300);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sulawesi-selatan');}, 2400);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sulawesi-barat');}, 2500);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sulawesi-tengah');}, 2600);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-gorontalo');}, 2700);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-sulawesi-utara');}, 2800);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-kalimantan-timur');}, 2900);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-kalimantan-selatan');}, 3000);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-kalimantan-tengah');}, 3100);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-kalimantan-barat');}, 3200);
    setTimeout(function(){ $('#main-image-map').attr('class', 'map-kalimantan-utara');}, 3300);
    setTimeout(function(){ $('#main-image-map').attr('class', '');}, 3400);
    setTimeout(function(){ 
        $('#map-loader').css('opacity', 0);  
        $('#map-loader').remove(); 
        $('#app-loader').fadeOut('slow'); 
    }, 3500);
    setTimeout(function(){ $('#main-image-map').css('opacity', 1);}, 3500);
}