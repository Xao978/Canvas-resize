// Zone Importion Modules  
   // import * as elementsDom from './elementsDom.js';

// Zone Importion Modules  


// Zone Déclarations
    let canvas = document.getElementsByTagName("canvas");
    let c = canvas[0].getContext("2d"), dimCanvas;
    
// Zone Déclarations

function changerBackgroundCanvas(couleur, canvas) {

    canvas.style.backgroundColor = couleur;
    
}

function tailleCanevas(partParentWidth, partParentHeight, canvas) {

    canvas.width = window.innerWidth*partParentWidth;
    canvas.height = window.innerHeight*partParentHeight;
   return [canvas[0].width, canvas[0].height];        
}

function tracerDroiteCanevas(pt1_absc, pt1_ord, pt2_absc, pt2_ord, couleur, context) {

    context.beginPath();
    context.strokeStyle = couleur;
    context.moveTo(pt1_absc, pt1_ord);
    context.lineTo(pt2_absc, pt2_ord);
    context.stroke();        
}

function translaterDroite(liste2pts,liste2ptsVectTrans, couleur , context) {
    
    let vectTransAbsc, vectTransOrd;

    vectTransAbsc = liste2ptsVectTrans[2]-liste2ptsVectTrans[0];

    vectTransOrd = liste2ptsVectTrans[3]-liste2ptsVectTrans[1];

    liste2pts[0] = liste2pts[0] + vectTransAbsc;

    liste2pts[1] = liste2pts[1] + vectTransOrd;

    liste2pts[2] = liste2pts[2] + vectTransAbsc;

    liste2pts[3] = liste2pts[3] + vectTransOrd;

    tracerDroiteCanevas(liste2pts[0], liste2pts[1], liste2pts[2], liste2pts[3], couleur, context);

    return [vectTransAbsc,vectTransOrd];
}


function tracerParallelogramme(liste3pts, couleur, context) {

    let cordonneesVectTransOblique; 

    tracerDroiteCanevas(liste3pts[0], liste3pts[1], liste3pts[2], liste3pts[3], couleur, context);
    tracerDroiteCanevas(liste3pts[2], liste3pts[3], liste3pts[4], liste3pts[5], couleur, context);    
    cordonneesVectTransOblique = translaterDroite([liste3pts[2], liste3pts[3], liste3pts[4], liste3pts[5]],[liste3pts[2], liste3pts[3], liste3pts[0], liste3pts[1]], couleur);
    translaterDroite([liste3pts[0], liste3pts[1], liste3pts[2], liste3pts[3]],[liste3pts[2], liste3pts[3], liste3pts[4], liste3pts[5]], couleur, context);
    tracerDroiteCanevas(liste3pts[2], liste3pts[3], cordonneesVectTransOblique[0] + liste3pts[4], cordonneesVectTransOblique[1] + liste3pts[5], couleur, context);
    tracerDroiteCanevas(liste3pts[0], liste3pts[1], liste3pts[4], liste3pts[5], couleur, context);
    
}
   
// Zone Déclarations

// Zone d'exécution du programme
      changerBackgroundCanvas("rgba(133, 126, 126, 0.58)", canvas[0]);
      dimCanvas = tailleCanevas(1, 1, canvas[0]);
    //tracerArcDeCercleV3(30, [200,200],[0,2], "rgb(4, 114, 133)");
    //afficherDimensionElement("canvas");    
    //ajouterGrilleRepere(dimCanvas[0], dimCanvas[1], 50, "rgba(255, 255, 255, 0.16)");
    //creerAxesRepere(dimCanvas[0],dimCanvas[1],"rgb(13, 4, 52)");
    //tracerArcDeCercle(50+dimCanvas[0]/2, -50+dimCanvas[1]/2, dimCanvas[0]/2, dimCanvas[1]/2, 0, 2*Math.PI, "rgb(8, 116, 11)");
    //tracerDroiteCanevas(200,200,dimCanvas[0]/2, dimCanvas[1]/2, "rgb(234, 14, 190)");
    
    
    
    

   



