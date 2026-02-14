ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([84.006583, 19.998211, 97.975119, 27.690498]);
var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BangladeshParliamentaryElection2026_2 = new ol.format.GeoJSON();
var features_BangladeshParliamentaryElection2026_2 = format_BangladeshParliamentaryElection2026_2.readFeatures(json_BangladeshParliamentaryElection2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BangladeshParliamentaryElection2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangladeshParliamentaryElection2026_2.addFeatures(features_BangladeshParliamentaryElection2026_2);
var lyr_BangladeshParliamentaryElection2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangladeshParliamentaryElection2026_2, 
                style: style_BangladeshParliamentaryElection2026_2,
                popuplayertitle: 'Bangladesh Parliamentary Election 2026',
                interactive: true,
    title: 'Bangladesh Parliamentary Election 2026<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_0.png" /> Bangladesh Khelafat Majlis<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_1.png" /> BJP<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_2.png" /> BNP<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_3.png" /> Independent<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_4.png" /> Islami Andolan<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_5.png" /> Jamaat-e-Islami<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_6.png" /> NCP<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_7.png" /> No Data<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_8.png" /> Postponed<br />\
    <img src="styles/legend/BangladeshParliamentaryElection2026_2_9.png" /> <br />' });

lyr_Satellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BangladeshParliamentaryElection2026_2.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_OpenStreetMap_1,lyr_BangladeshParliamentaryElection2026_2];
lyr_BangladeshParliamentaryElection2026_2.set('fieldAliases', {'Upazila': 'Upazila', 'District': 'District', 'Division': 'Division', 'Constituen': 'Constituen', 'Winning_Pa': 'Winning_Pa', });
lyr_BangladeshParliamentaryElection2026_2.set('fieldImages', {'Upazila': 'TextEdit', 'District': 'TextEdit', 'Division': 'TextEdit', 'Constituen': 'TextEdit', 'Winning_Pa': 'TextEdit', });
lyr_BangladeshParliamentaryElection2026_2.set('fieldLabels', {'Upazila': 'header label - always visible', 'District': 'inline label - always visible', 'Division': 'inline label - always visible', 'Constituen': 'header label - always visible', 'Winning_Pa': 'inline label - always visible', });
lyr_BangladeshParliamentaryElection2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});