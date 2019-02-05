a = {
/** The URL of the image where the annotation should go **/
src : 'http://bdh-rd.bne.es/pdf.raw?query=id:0000010289&jpeg=true&page=1_z.jpg',

/** The annotation text **/
text : 'My annotation',

/** The annotation shape **/
shapes : [{
/** The shape type **/
type : 'rect',

/** The shape geometry (relative coordinates) **/
geometry : { x : 0.1, y: 0.1, width : 0.4, height: 0.3 }
}]
}

anno.addAnnotation(a);