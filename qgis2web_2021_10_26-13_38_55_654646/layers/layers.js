var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RCI_Lunevillois_170921_1 = new ol.format.GeoJSON();
var features_RCI_Lunevillois_170921_1 = format_RCI_Lunevillois_170921_1.readFeatures(json_RCI_Lunevillois_170921_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCI_Lunevillois_170921_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCI_Lunevillois_170921_1.addFeatures(features_RCI_Lunevillois_170921_1);
var lyr_RCI_Lunevillois_170921_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RCI_Lunevillois_170921_1, 
                style: style_RCI_Lunevillois_170921_1,
                interactive: false,
    title: 'RCI_Lunevillois_170921<br />\
    <img src="styles/legend/RCI_Lunevillois_170921_1_0.png" /> DECI suffisante<br />\
    <img src="styles/legend/RCI_Lunevillois_170921_1_1.png" /> DECI suffisante (privée)<br />\
    <img src="styles/legend/RCI_Lunevillois_170921_1_2.png" /> DECI réduite<br />\
    <img src="styles/legend/RCI_Lunevillois_170921_1_3.png" /> DECI insuffisante<br />\
    <img src="styles/legend/RCI_Lunevillois_170921_1_4.png" /> DECI inexistante<br />'
        });
var format_RCO_Lunevillois_170921_2 = new ol.format.GeoJSON();
var features_RCO_Lunevillois_170921_2 = format_RCO_Lunevillois_170921_2.readFeatures(json_RCO_Lunevillois_170921_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCO_Lunevillois_170921_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCO_Lunevillois_170921_2.addFeatures(features_RCO_Lunevillois_170921_2);
var lyr_RCO_Lunevillois_170921_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RCO_Lunevillois_170921_2, 
                style: style_RCO_Lunevillois_170921_2,
                interactive: false,
    title: 'RCO_Lunevillois_170921<br />\
    <img src="styles/legend/RCO_Lunevillois_170921_2_0.png" /> DECI suffisante<br />\
    <img src="styles/legend/RCO_Lunevillois_170921_2_1.png" /> DECI suffisante (privée)<br />\
    <img src="styles/legend/RCO_Lunevillois_170921_2_2.png" /> DECI réduite<br />\
    <img src="styles/legend/RCO_Lunevillois_170921_2_3.png" /> DECI insuffisante<br />\
    <img src="styles/legend/RCO_Lunevillois_170921_2_4.png" /> DECI inexistante<br />'
        });
var format_DECI_DECI_POINT_EAU_3 = new ol.format.GeoJSON();
var features_DECI_DECI_POINT_EAU_3 = format_DECI_DECI_POINT_EAU_3.readFeatures(json_DECI_DECI_POINT_EAU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECI_DECI_POINT_EAU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECI_DECI_POINT_EAU_3.addFeatures(features_DECI_DECI_POINT_EAU_3);
var lyr_DECI_DECI_POINT_EAU_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DECI_DECI_POINT_EAU_3, 
                style: style_DECI_DECI_POINT_EAU_3,
                interactive: false,
                title: '<img src="styles/legend/DECI_DECI_POINT_EAU_3.png" /> DECI_DECI_POINT_EAU'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RCI_Lunevillois_170921_1.setVisible(true);lyr_RCO_Lunevillois_170921_2.setVisible(true);lyr_DECI_DECI_POINT_EAU_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RCI_Lunevillois_170921_1,lyr_RCO_Lunevillois_170921_2,lyr_DECI_DECI_POINT_EAU_3];
lyr_RCI_Lunevillois_170921_1.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_RCO_Lunevillois_170921_2.set('fieldAliases', {'FID': 'FID', 'Type': 'Type', 'layer': 'layer', 'path': 'path', });
lyr_DECI_DECI_POINT_EAU_3.set('fieldAliases', {'NOM': 'NOM', 'SOURCE': 'SOURCE', 'DATEDEMISE': 'DATEDEMISE', 'OBSERVATIO': 'OBSERVATIO', 'OPERATEURS': 'OPERATEURS', 'TOPOLOGIEE': 'TOPOLOGIEE', 'ANCIENIDEN': 'ANCIENIDEN', 'CAPACITE': 'CAPACITE', 'DATEMAJISI': 'DATEMAJISI', 'DEBIT': 'DEBIT', 'DEBIT_1BAR': 'DEBIT_1BAR', 'DERNIERVIS': 'DERNIERVIS', 'DIAMETRECO': 'DIAMETRECO', 'GC_KEY': 'GC_KEY', 'GCKEYDECIC': 'GCKEYDECIC', 'IDENTIFIAN': 'IDENTIFIAN', 'INDISPONIB': 'INDISPONIB', 'INDISPONI1': 'INDISPONI1', 'INDISPONI2': 'INDISPONI2', 'INDISPONI3': 'INDISPONI3', 'PUB_NOM': 'PUB_NOM', 'NATURE': 'NATURE', 'NOMRUE': 'NOMRUE', 'NUMEROPOTE': 'NUMEROPOTE', 'PRESSIONDY': 'PRESSIONDY', 'PRESSIONST': 'PRESSIONST', 'PUBLIQUE': 'PUBLIQUE', 'TYPEPOINTD': 'TYPEPOINTD', 'UTILISABLE': 'UTILISABLE', 'UTILISABL1': 'UTILISABL1', 'COMMUNE': 'COMMUNE', 'PUB_DEC_X_': 'PUB_DEC_X_', 'PUB_DEC_Y_': 'PUB_DEC_Y_', 'PUB_DEC_X1': 'PUB_DEC_X1', 'PUB_DEC_Y1': 'PUB_DEC_Y1', 'DECAL_X_CA': 'DECAL_X_CA', 'DECAL_Y_CA': 'DECAL_Y_CA', 'PUB_VISIBL': 'PUB_VISIBL', 'PUB_DEC_X2': 'PUB_DEC_X2', 'PUB_DEC_Y2': 'PUB_DEC_Y2', 'ACCES_UNIQ': 'ACCES_UNIQ', 'RESERVE_RE': 'RESERVE_RE', 'INSEE': 'INSEE', 'CARTO_REF': 'CARTO_REF', 'NUM': 'NUM', 'NAT_PT_EAU': 'NAT_PT_EAU', 'DPT_NUM': 'DPT_NUM', 'COD_INSEE': 'COD_INSEE', 'ETAT_PT_EA': 'ETAT_PT_EA', 'CS_COD': 'CS_COD', 'CARTO_ETAR': 'CARTO_ETAR', 'CARTO_VOIE': 'CARTO_VOIE', 'NUM_VOIE': 'NUM_VOIE', 'CPL_NUM_VO': 'CPL_NUM_VO', 'STATUT': 'STATUT', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'PAGE': 'PAGE', 'COORD_LIB': 'COORD_LIB', 'DIAM_CANAL': 'DIAM_CANAL', 'DEBIT_SIMU': 'DEBIT_SIMU', 'CAPA_THEO': 'CAPA_THEO', 'TYP_PLATF': 'TYP_PLATF', 'COD_DISP_A': 'COD_DISP_A', 'DEBIT_REAL': 'DEBIT_REAL', 'DIAM_REALI': 'DIAM_REALI', 'COD_VALID': 'COD_VALID', });
lyr_RCI_Lunevillois_170921_1.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_RCO_Lunevillois_170921_2.set('fieldImages', {'FID': 'TextEdit', 'Type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DECI_DECI_POINT_EAU_3.set('fieldImages', {'NOM': 'TextEdit', 'SOURCE': 'TextEdit', 'DATEDEMISE': 'DateTime', 'OBSERVATIO': 'TextEdit', 'OPERATEURS': 'TextEdit', 'TOPOLOGIEE': 'TextEdit', 'ANCIENIDEN': 'TextEdit', 'CAPACITE': 'TextEdit', 'DATEMAJISI': 'DateTime', 'DEBIT': 'TextEdit', 'DEBIT_1BAR': 'TextEdit', 'DERNIERVIS': 'TextEdit', 'DIAMETRECO': 'TextEdit', 'GC_KEY': 'TextEdit', 'GCKEYDECIC': 'TextEdit', 'IDENTIFIAN': 'TextEdit', 'INDISPONIB': 'TextEdit', 'INDISPONI1': 'TextEdit', 'INDISPONI2': 'TextEdit', 'INDISPONI3': 'TextEdit', 'PUB_NOM': 'TextEdit', 'NATURE': 'TextEdit', 'NOMRUE': 'TextEdit', 'NUMEROPOTE': 'TextEdit', 'PRESSIONDY': 'TextEdit', 'PRESSIONST': 'TextEdit', 'PUBLIQUE': 'TextEdit', 'TYPEPOINTD': 'TextEdit', 'UTILISABLE': 'TextEdit', 'UTILISABL1': 'TextEdit', 'COMMUNE': 'TextEdit', 'PUB_DEC_X_': 'TextEdit', 'PUB_DEC_Y_': 'TextEdit', 'PUB_DEC_X1': 'TextEdit', 'PUB_DEC_Y1': 'TextEdit', 'DECAL_X_CA': 'TextEdit', 'DECAL_Y_CA': 'TextEdit', 'PUB_VISIBL': 'TextEdit', 'PUB_DEC_X2': 'TextEdit', 'PUB_DEC_Y2': 'TextEdit', 'ACCES_UNIQ': 'TextEdit', 'RESERVE_RE': 'TextEdit', 'INSEE': 'TextEdit', 'CARTO_REF': 'TextEdit', 'NUM': 'TextEdit', 'NAT_PT_EAU': 'TextEdit', 'DPT_NUM': 'TextEdit', 'COD_INSEE': 'TextEdit', 'ETAT_PT_EA': 'TextEdit', 'CS_COD': 'TextEdit', 'CARTO_ETAR': 'TextEdit', 'CARTO_VOIE': 'TextEdit', 'NUM_VOIE': 'TextEdit', 'CPL_NUM_VO': 'TextEdit', 'STATUT': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'PAGE': 'TextEdit', 'COORD_LIB': 'TextEdit', 'DIAM_CANAL': 'TextEdit', 'DEBIT_SIMU': 'TextEdit', 'CAPA_THEO': 'TextEdit', 'TYP_PLATF': 'TextEdit', 'COD_DISP_A': 'TextEdit', 'DEBIT_REAL': 'TextEdit', 'DIAM_REALI': 'TextEdit', 'COD_VALID': 'TextEdit', });
lyr_RCI_Lunevillois_170921_1.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_RCO_Lunevillois_170921_2.set('fieldLabels', {'FID': 'no label', 'Type': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_DECI_DECI_POINT_EAU_3.set('fieldLabels', {'NOM': 'no label', 'SOURCE': 'no label', 'DATEDEMISE': 'no label', 'OBSERVATIO': 'no label', 'OPERATEURS': 'no label', 'TOPOLOGIEE': 'no label', 'ANCIENIDEN': 'no label', 'CAPACITE': 'no label', 'DATEMAJISI': 'no label', 'DEBIT': 'no label', 'DEBIT_1BAR': 'no label', 'DERNIERVIS': 'no label', 'DIAMETRECO': 'no label', 'GC_KEY': 'no label', 'GCKEYDECIC': 'no label', 'IDENTIFIAN': 'no label', 'INDISPONIB': 'no label', 'INDISPONI1': 'no label', 'INDISPONI2': 'no label', 'INDISPONI3': 'no label', 'PUB_NOM': 'no label', 'NATURE': 'no label', 'NOMRUE': 'no label', 'NUMEROPOTE': 'no label', 'PRESSIONDY': 'no label', 'PRESSIONST': 'no label', 'PUBLIQUE': 'no label', 'TYPEPOINTD': 'no label', 'UTILISABLE': 'no label', 'UTILISABL1': 'no label', 'COMMUNE': 'no label', 'PUB_DEC_X_': 'no label', 'PUB_DEC_Y_': 'no label', 'PUB_DEC_X1': 'no label', 'PUB_DEC_Y1': 'no label', 'DECAL_X_CA': 'no label', 'DECAL_Y_CA': 'no label', 'PUB_VISIBL': 'no label', 'PUB_DEC_X2': 'no label', 'PUB_DEC_Y2': 'no label', 'ACCES_UNIQ': 'no label', 'RESERVE_RE': 'no label', 'INSEE': 'no label', 'CARTO_REF': 'no label', 'NUM': 'no label', 'NAT_PT_EAU': 'no label', 'DPT_NUM': 'no label', 'COD_INSEE': 'no label', 'ETAT_PT_EA': 'no label', 'CS_COD': 'no label', 'CARTO_ETAR': 'no label', 'CARTO_VOIE': 'no label', 'NUM_VOIE': 'no label', 'CPL_NUM_VO': 'no label', 'STATUT': 'no label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'PAGE': 'no label', 'COORD_LIB': 'no label', 'DIAM_CANAL': 'no label', 'DEBIT_SIMU': 'no label', 'CAPA_THEO': 'no label', 'TYP_PLATF': 'no label', 'COD_DISP_A': 'no label', 'DEBIT_REAL': 'no label', 'DIAM_REALI': 'no label', 'COD_VALID': 'no label', });
lyr_DECI_DECI_POINT_EAU_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});