function refrescaranotacionestexto(){if("undefined"!=typeof currentannotation&&""!=currentannotation)var a=currentannotation;var e="";if(void 0!==a&&void 0!==a.datos){var t=a.datos;if(void 0!==t.personas&&(e+="<div><span class='ntipo'>Personas:</span>",$(t.personas).each(function(a,t){var o=t.text;e+="<p> "+o+"</p>"}),e+="</div>"),void 0!==t.entidades&&(e+="<div><span class='ntipo'>Entidades:</span>",$(t.entidades).each(function(a,t){var o=t.text;e+="<p> "+o+"</p>"}),e+="</div>"),void 0===t.titulos&&void 0===t.autores||(void 0!==t.titulos&&t.titulos.length>0&&(e+="<div><span class='ntipo'>Títulos:</span>",$(t.titulos).each(function(a,t){var o=t.text;e+="<p> "+o+"</p>"}),e+="</div>"),void 0!==t.autores&&t.autores.length>0&&(e+="<div><span class='ntipo'>Autores:</span>",$(t.autores).each(function(a,t){var o=t.text;e+="<p> "+o+"</p>"}),e+="</div>")),void 0!==t.lugares&&(e+="<div><span class='ntipo'>Lugar:</span>",$(t.lugares).each(function(a,t){var o=t.text;e+="<p> "+o+"</p>"}),e+="</div>"),void 0!==t.etiquetadosocial&&(e+="<div><span class='ntipo'>Etiquetas temáticas:</span>",$(t.etiquetadosocial).each(function(a,t){var o=t.id;e+="<p> "+o+"</p>"}),e+="</div>"),void 0!==t.textoasociado){e+="<div><span class='ntipo'>Texto asociado:</span>";var o=t.textoasociado;e+="<p> "+o+"</p>",e+="</div>"}}$("#listaetiquetastexto").html(e)}function refrescaranotaciones(){$("#listanotaciones").html("");var a=anno.getAnnotations();$(a).each(function(a,e){if(void 0!==e.datos){var t=e.datos;if(void 0!==t.personas&&$(t.personas).each(function(e,t){var o=t.text;$("#listanotaciones").prepend('<li class="datoanotacion" tipo="personas" data="'+a+'" dataid="'+t.id+'"> '+o+'  <div class="delaedit" data-original-title="Pulsa en este botón para editar la etiqueta."></div> <div class="dela" data-original-title="Pulsa en este botón para eliminar la etiqueta."></div></li>')}),void 0!==t.entidades&&$(t.entidades).each(function(e,t){var o=t.text;$("#listanotaciones").prepend('<li class="datoanotacion" tipo="entidades" data="'+a+'" dataid="'+t.id+'"> '+o+'  <div class="delaedit" data-original-title="Pulsa en este botón para editar la etiqueta."></div> <div class="dela" data-original-title="Pulsa en este botón para eliminar la etiqueta."></div></li>')}),void 0===t.titulos&&void 0===t.autores||($(t.titulos).each(function(e,t){var o=t.text;$("#listanotaciones").prepend('<li class="datoanotacion" tipo="obras" data="'+a+'" dataid="'+t.id+'"> '+o+'  <div class="delaedit" data-original-title="Pulsa en este botón para editar la etiqueta."></div> <div class="dela" data-original-title="Pulsa en este botón para eliminar la etiqueta."></div></li>')}),$(t.autores).each(function(e,t){var o=t.text;$("#listanotaciones").prepend('<li class="datoanotacion" tipo="obras" data="'+a+'" dataid="'+t.id+'"> '+o+'  <div class="delaedit" data-original-title="Pulsa en este botón para editar la etiqueta."></div> <div class="dela" data-original-title="Pulsa en este botón para eliminar la etiqueta."></div></li>')})),void 0!==t.lugares&&$(t.lugares).each(function(e,t){var o=t.text;$("#listanotaciones").prepend('<li class="datoanotacion" tipo="lugares" data="'+a+'" dataid="'+t.id+'"> '+o+'  <div class="delaedit" data-original-title="Pulsa en este botón para editar la etiqueta."></div> <div class="dela" data-original-title="Pulsa en este botón para eliminar la etiqueta."></div></li>')}),void 0!==t.etiquetadosocial&&$(t.etiquetadosocial).each(function(e,t){var o=t.id;$("#listanotaciones").prepend('<li class="datoanotacion" tipo="etiquetadosocial" data="'+a+'" dataid="'+t.id+'"> '+o+'  <div class="delaedit" data-original-title="Pulsa en este botón para editar la etiqueta."></div> <div class="dela" data-original-title="Pulsa en este botón para eliminar la etiqueta."></div></li>')}),void 0!==t.textoasociado){var o=t.textoasociado;$("#listanotaciones").prepend('<li class="datoanotacion" tipo="textoasociado" data="'+a+'" dataid="'+o+'"> '+o+'  <div class="delaedit" data-original-title="Pulsa en este botón para editar la etiqueta."></div> <div class="dela" data-original-title="Pulsa en este botón para eliminar la etiqueta."></div></li>')}}}),setTimeout(function(){$(".delaedit, .dela").tooltip({title:function(){return $(this).prev().attr("data-original-title")}})},1e3)}function formatRepo(a){return a.loading,a.text}function formatRepoSelection(a){return a.full_name||a.text}function cargardatosetiquetado(){$.ajax({url:urlval+"endpoint/get_etiquetasocial?p="+proyectid,data:{}}).done(function(a){if(""!=a){var e=jQuery.parseJSON(a),t="";$.each(e.items,function(a,e){t+="<option value='"+e.id+"'>"+e.text+"</option>"}),$(".js-data-ajax-etiquetasocial").append(t)}var o=$(".js-data-ajax-etiquetasocial").attr("placeholder"),i=getBool($(".js-data-ajax-etiquetasocial").attr("nonorm"));$(".js-data-ajax-etiquetasocial").select2({language:"es",theme:"bootstrap",placeholder:o,tags:i,minimumInputLength:3}),$(".js-data-ajax-etiquetasocial").val("").trigger("change")})}function limpiarfront(){$("#selectordetipoetiqueta").val(""),$("#persona").val("").trigger("change"),$("#entidad").val("").trigger("change"),$("#titulo").val("").trigger("change"),$("#autor").val("").trigger("change"),$("#textoasociadoarea").val(""),$("#nombredellugar").val("").trigger("change"),$("#direccion").val(""),$("#etiquetassociales").val("").trigger("change")}function getotrascolaboraciones(a){$.ajax({url:urlval+"endpoint/get_etiquetas?t="+a,data:{}}).done(function(a){if(""!=a){var e=jQuery.parseJSON(a);$.each(e,function(a,e){var t="";e.length>0?($.each(e,function(e,o){switch(a){case"personas":case"entidades":case"titulos":case"autores":t+='<div class="colbloquecolaboracion" datatipo="'+a+'" dataid="'+o.id+'" datatxt="'+o.text+'">'+o.text+"</div>";break;case"lugares":t+='<div class="colbloquecolaboracion" datatipo="'+a+'" dataid="'+o.id+'" datatxt="'+o.text+'" datalat="'+o.lat+'" datalng="'+o.lng+'">'+o.text+"</div>";break;case"etiquetadosocial":t+='<div class="colbloquecolaboracion" datatipo="'+a+'" dataid="'+o.id+'" datatxt="'+o.id+'">'+o.id+"</div>";break;case"textoasociado":t+='<div class="colbloquecolaboracion" datatipo="'+a+'" dataid="'+o+'" datatxt="'+o+'">'+o+"</div>"}}),$("#otrascolaboraciones"+a+" .colbloque").html(t),$("#otrascolaboraciones"+a).show()):$("#otrascolaboraciones"+a).hide()})}})}function cargarAnotacion(a){if(limpiarfront(),void 0!==a.datos){var e=a.datos;if(void 0!==e.personas){var t=[];$(e.personas).each(function(a,e){if($("#persona").find("option[value='"+e.id+"']").length)t.push(e.id);else{var o=new Option(e.text,e.id,!0,!0);$("#persona").append(o).trigger("change")}}),t.length>0&&$("#persona").val(t).trigger("change")}if(void 0!==e.entidades){t=[];$(e.entidades).each(function(a,e){if($("#entidad").find("option[value='"+e.id+"']").length)t.push(e.id);else{var o=new Option(e.text,e.id,!0,!0);$("#entidad").append(o).trigger("change")}}),t.length>0&&$("#entidad").val(t).trigger("change")}if(void 0!==e.titulos||void 0!==e.autores){t=[];$(e.titulos).each(function(a,e){if($("#titulo").find("option[value='"+e.id+"']").length)t.push(e.id);else{var o=new Option(e.text,e.id,!0,!0);$("#titulo").append(o).trigger("change")}}),t.length>0&&$("#titulo").val(t).trigger("change");t=[];$(e.autores).each(function(a,e){if($("#autor").find("option[value='"+e.id+"']").length)t.push(e.id);else{var o=new Option(e.text,e.id,!0,!0);$("#autor").append(o).trigger("change")}}),t.length>0&&$("#autor").val(t).trigger("change")}if(void 0!==e.lugares){t=[];var o=0,i=0;$(e.lugares).each(function(a,e){if($("#nombredellugar").find("option[value='"+e.id+"']").length)t.push(e.id);else{var n=new Option(e.text,e.id,!0,!0);$("#nombredellugar").append(n).trigger("change")}o=e.lat,i=e.lng}),t.length>0&&$("#nombredellugar").val(t).trigger("change"),deleteMarkers();var n={lat:o,lng:i};addMarker(n),centerMap(n)}if(void 0!==e.etiquetadosocial){t=[];$(e.etiquetadosocial).each(function(a,e){if($("#etiquetassociales").find("option[value='"+e.id+"']").length)t.push(e.id);else{var o=new Option(e.id,e.id,!0,!0);$("#etiquetassociales").append(o).trigger("change")}}),t.length>0&&$("#etiquetassociales").val(t).trigger("change")}void 0!==e.textoasociado&&$("#textoasociadoarea").val(e.textoasociado)}}function eventoscampos(){$(".comon-single").each(function(a){var e=$(this).attr("placeholder");$(this).select2({language:"es",theme:"bootstrap",placeholder:e,tags:!0}),$(this).val("").trigger("change")}),$(".js-data-ajax").each(function(){var a=$(this).attr("placeholder"),e=$(this).attr("tipe");$(this).select2({theme:"bootstrap",tags:!0,placeholder:a,language:"es",ajax:{url:urlval+"endpoint/get_databne?type="+e,dataType:"json",delay:250,data:function(a){return{q:a.term}},processResults:function(a,e){return{results:a.items}},cache:!0},escapeMarkup:function(a){return a},minimumInputLength:3,templateResult:formatRepo,templateSelection:formatRepoSelection}),$(this).val("").trigger("change")})}function montaratributoaselectores(){$.each(dataConfigEtiquetas,function(a,e){var t=e.id,o=e.datononormalizado,i=e.codigoautocompletado;if("si"==o)var n=!0;else n=!1;switch(t){case"personas":$("#persona").attr("nonorm",n);break;case"entidades":$("#entidad").attr("nonorm",n);break;case"obras":$("#titulo").attr("nonorm",n),$("#autor").attr("nonorm",n);break;case"lugares":$("#nombredellugar").attr("nonorm",n),$("#nombredellugar").attr("tipe",i);break;case"etiquetadosocial":$("#etiquetassociales").attr("nonorm",n)}})}var map;$(document).ready(function(){function a(a,e){var t=a.indexOf(e);return-1!==t&&a.splice(t,1),a}$(".modal-dialog").draggable({handle:".modal-header"}),$("#zoomblock").draggable({start:function(){},drag:function(){},stop:function(){}}),dataConfig.length,$("body").on("mouseover","#listanotaciones li",function(){var a=anno.getAnnotations(),e=$(this).attr("data");anno.showSelectionWidget(a[e]),anno.highlightAnnotation(a[e])}),$("body").on("click","div.colbloquecolaboracion",function(){var a=$(this).attr("datatipo"),e=$(this).attr("dataid"),t=$(this).attr("datatxt");switch(a){case"personas":var o=[];if($("#persona").find("option[value='"+e+"']").length)$($("#persona").select2("data")).each(function(a,e){o.push(e.id)}),o.push(e),$("#persona").val(o).trigger("change");else{var i=new Option(t,e,!0,!0);$("#persona").append(i).trigger("change")}break;case"entidades":o=[];if($("#entidad").find("option[value='"+e+"']").length)$($("#entidad").select2("data")).each(function(a,e){o.push(e.id)}),o.push(e),$("#entidad").val(o).trigger("change");else{i=new Option(t,e,!0,!0);$("#entidad").append(i).trigger("change")}break;case"titulos":o=[];if($("#titulo").find("option[value='"+e+"']").length)$($("#titulo").select2("data")).each(function(a,e){o.push(e.id)}),o.push(e),$("#titulo").val(o).trigger("change");else{i=new Option(t,e,!0,!0);$("#titulo").append(i).trigger("change")}break;case"autores":o=[];if($("#autor").find("option[value='"+e+"']").length)$($("#autor").select2("data")).each(function(a,e){o.push(e.id)}),o.push(e),$("#autor").val(o).trigger("change");else{i=new Option(t,e,!0,!0);$("#autor").append(i).trigger("change")}break;case"lugares":if($("#nombredellugar").find("option[value='"+e+"']").length)$("#nombredellugar").val(e).trigger("change");else{i=new Option(t,e,!0,!0);$("#nombredellugar").append(i).trigger("change")}deleteMarkers();var n={lat:parseFloat($(this).attr("datalat")),lng:parseFloat($(this).attr("datalng"))};addMarker(n),centerMap(n);break;case"etiquetadosocial":o=[];if($("#etiquetassociales").find("option[value='"+e+"']").length)$($("#etiquetassociales").select2("data")).each(function(a,e){o.push(e.id)}),o.push(e),$("#etiquetassociales").val(o).trigger("change");else{i=new Option(t,e,!0,!0);$("#etiquetassociales").append(i).trigger("change")}break;case"textoasociado":$("#textoasociadoarea").val(t)}}),$("body").on("click","div.dela",function(){$(this).parent().remove();var e=$(this).parent().attr("data"),t=anno.getAnnotations()[e].datos,o=$(this).parent().attr("dataid");void 0!==t.personas&&($(t.personas).each(function(e,i){i.id==o&&(t.personas=a(t.personas,i))}),0==t.personas.length&&delete t.personas),void 0!==t.entidades&&($(t.entidades).each(function(e,i){i.id==o&&(t.entidades=a(t.entidades,i))}),0==t.entidades.length&&delete t.entidades),void 0!==t.titulos&&($(t.titulos).each(function(e,i){i.id==o&&(t.titulos=a(t.titulos,i))}),0==t.titulos.length&&delete t.titulos),void 0!==t.autores&&($(t.autores).each(function(e,i){i.id==o&&(t.autores=a(t.autores,i))}),0==t.autores.length&&delete t.autores),void 0!==t.lugares&&($(t.lugares).each(function(e,i){i.id==o&&(t.lugares=a(t.lugares,i))}),0==t.lugares.length&&delete t.lugares),void 0!==t.etiquetadosocial&&($(t.etiquetadosocial).each(function(e,i){i.id==o&&(t.etiquetadosocial=a(t.etiquetadosocial,i))}),0==t.etiquetadosocial.length&&delete t.etiquetadosocial),void 0!==t.textoasociado&&t.textoasociado==o&&delete t.textoasociado,anno.getAnnotations()[e].datos=t,jQuery.isEmptyObject(anno.getAnnotations()[e].datos)&&anno.removeAnnotation(anno.getAnnotations()[e]),refrescaranotaciones()}),$("body").on("click","div.delaedit",function(){var a=$(this).parent().attr("data"),e=$(this).parent().attr("tipo"),t=anno.getAnnotations()[a];objetoanotator.editAnnotation(t),$("html, body").animate({scrollTop:$(".annotorious-editor").offset().top},1e3),setTimeout(function(){$("#selectordetipoetiqueta").val(e).trigger("change")},1300)}),"undefined"==typeof loadcampos?(montaratributoaselectores(),componercampos(),$("input[maxlength]").maxlength()):eventoscampos(),cargardatosetiquetado(),$("body").on("click",".guardardata",function(){var a=$(this).attr("tipo");if(void 0!==currentannotation.datos){var e=currentannotation.datos;editardatosmodal=1}else{e={};editardatosmodal=0}var t=0,o="",i="";switch(a){case"personas":e.personas=[],$($("#persona").select2("data")).each(function(a,t){e.personas.push({id:t.id,text:t.text}),i=t.text}),void 0===$($("#persona").select2("data"))[0]&&(t=1,o="Es obligatorio añadir al menos una persona.");break;case"entidades":e.entidades=[],$($("#entidad").select2("data")).each(function(a,t){e.entidades.push({id:t.id,text:t.text}),i=t.text}),void 0===$($("#entidad").select2("data"))[0]&&(t=1,o="Es obligatorio añadir al menos una entidad.");break;case"obras":var n="",s="";e.titulos=[],$($("#titulo").select2("data")).each(function(a,t){e.titulos.push({id:t.id,text:t.text}),n=t.text}),e.autores=[],$($("#autor").select2("data")).each(function(a,t){e.autores.push({id:t.id,text:t.text}),s=t.text}),void 0===$($("#titulo").select2("data"))[0]&&void 0===$($("#autor").select2("data"))[0]&&(t=1,o="Es obligatorio añadir al menos un título o autor."),i=n+" "+s;break;case"lugares":if("null"==typeof $("#nombredellugar").val()||""==$("#nombredellugar").val())t=1,o="Es obligatorio añadir un lugar.";else{var r=$("#nombredellugar").select2("data")[0].id,l=$("#nombredellugar").select2("data")[0].text;i=l,e.lugares=[],e.lugares.push({id:r,text:l}),deleteMarkers()}break;case"etiquetadosocial":e.etiquetadosocial=[],$($("#etiquetassociales").select2("data")).each(function(a,t){e.etiquetadosocial.push({id:t.id}),i=t.id}),void 0===$($("#etiquetassociales").select2("data"))[0]&&(t=1,o="Es obligatorio añadir al menos una etiqueta social.");break;case"textoasociado":""==$("#textoasociadoarea").val()?(t=1,o="Es obligatorio añadir un texto."):(e.textoasociado=$("#textoasociadoarea").val(),i=$("#textoasociadoarea").val())}if(0==t){var d=JSON.parse(JSON.stringify(e));$("#myModal"+a).modal("hide"),setTimeout(function(){1==editardatosmodal?(currentannotation.datos=d,currentannotation.text="",objetoanotator.fireEvent("onAnnotationUpdated",currentannotation,objetoanotator.getItem())):(currentannotation.datos=d,currentannotation.text="",currentannotation.texto=i,objetoanotator.addAnnotation(currentannotation),objetoanotator.fireEvent("onAnnotationCreated",currentannotation,objetoanotator.getItem())),$("#selectordetipoetiqueta").val(""),refrescaranotacionestexto()},500)}else pybossaNotify(o,"error",!0);refrescaranotacionestexto()}),setTimeout(function(){$("span.select2.select2-container").tooltip({title:function(){return $(this).prev().attr("data-original-title")}})},1e3)});var markers=[];function initMap(a,e,t){var o={lat:a,lng:e};inputdir=document.getElementById("direccion"),map=new google.maps.Map(document.getElementById("mapa"),{zoom:t,center:o,mapTypeId:"roadmap",mapTypeControl:!1,styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2e5d4"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{lightness:20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"transit.station.bus",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.station.rail",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#acbcc9"}]}]}),iconomapa={url:"/uploads/ico_circle_75x75.png",anchor:new google.maps.Point(38,38),size:new google.maps.Size(77,77),origin:new google.maps.Point(0,0)},map.addListener("click",function(a){deleteMarkers(),addMarker(a.latLng)});var i=new google.maps.places.Autocomplete(inputdir);i.bindTo("bounds",map),i.addListener("place_changed",function(){var a=i.getPlace();a.geometry?(map.setCenter(a.geometry.location),map.setZoom(nivelzoommapabusqueda)):pybossaNotify("No se ha podido encontrar una dirección valida.","error",!0)})}function clearMarkers(){setMapOnAll(null)}function addMarker(a){}function showMarkers(){setMapOnAll(map)}function deleteMarkers(){clearMarkers(),markers=[]}function setMapOnAll(a){for(var e=0;e<markers.length;e++)markers[e].setMap(a)}function centerMap(a){}nivelzoommapa=6,nivelzoommapabusqueda=17,pybossa.taskLoaded(function(a,e){if($.isEmptyObject(a))e.resolve(a);else{var t=$("<img />");if(t.load(function(){e.resolve(a)}),void 0!==a.info.resource)var o=a.info.resource;else o="http://bdh-rd.bne.es/pdf.raw?query=id:"+a.info.id+"&jpeg=true&page="+a.info.page;t.attr("src",o),t.attr("id","imagenlugartranscribir"),t.addClass("img-polaroid"),t.addClass("annotable"),a.info.image=t}}),pybossa.presentTask(function(a,e){if($.isEmptyObject(a))pybossaNotify("Ya ha contribuido en todas las tareas del proyecto, muchas gracias por su colaboración.","info",!0),$("#contenedortarea").hide(),$("#finalizado").show();else{if(cargarenlaceurl(a),obtenersiguientetarea(a.project_id,a.id),loadUserProgress(),getotrascolaboraciones(a.id),void 0!==a.info.resource)var t=a.info.resource;else t="http://bdh-rd.bne.es/pdf.raw?query=id:"+a.info.id+"&jpeg=true&page="+a.info.page;$("#documentopdftranscribir").html("").append(a.info.image),anno.makeAnnotatable(document.getElementById("imagenlugartranscribir")),anno.addHandler("onAnnotationCreated",function(a){}),anno.addHandler("onAnnotationRemoved",function(a){refrescaranotaciones()}),anno.addHandler("onAnnotationUpdated",function(a){});var o=$(".annotorious-annotationlayer");$(o).trigger("zoom.destroy"),$(o).zoom({url:t,on:"mouseover",target:"#zoomblock",magnify:1}),$(o).mousemove(function(a){if(!blockfollow){$("#zoomblock").css("top",a.pageY+25),$("#zoomblock").css("left",a.pageX+25)}}),$("#guardar").off("click").on("click",function(){var t={},o=!1;if($.each(dataConfig,function(a,e){var i=e.tipo,n=e.id;switch(i){case"selectsimpleauto":t[n+"id"]=$("#"+n).val(),""!=t[n+"id"]&&null!=t[n+"id"]?(t[n+"txt"]=$("#"+n).select2("data")[0].text,o=!0):(t[n+"id"]="",t[n+"txt"]="");break;case"selectsimplemanual":t[n+"id"]=$("#"+n).val(),null==t[n+"id"]?t[n+"id"]="":o=!0;break;case"selectmultipleauto":void 0===t[n]&&(t[n]=[]),$($("#"+n).select2("data")).each(function(a,e){o=!0,t[n].push({id:e.id,text:e.text})});break;case"text":case"number":t[n]=$("#"+n).val(),""!=t[n]&&(o=!0);break;case"selectsimpleagrupado":void 0===t[n]&&(t[n]=[]);var s=e.select1.id,r=e.select2.id;if(void 0!==e.select3)var l=e.select3.id;else l="nodefinido";$("."+n).each(function(a,e){t[n].push({["id"+s]:$(e).attr("dat"+s+"id"),["text"+s]:$(e).attr("dat"+s+"txt"),["id"+r]:$(e).attr("dat"+r+"id"),["text"+r]:$(e).attr("dat"+r+"txt"),["id"+l]:$(e).attr("dat"+l+"id"),["text"+l]:$(e).attr("dat"+l+"txt")}),o=!0})}}),t.anotaciones=anno.getAnnotations(),1==o||t.anotaciones.length){t.dataConfig=JSON.stringify(dataConfig),t.dataConfigEtiquetas=JSON.stringify(dataConfigEtiquetas),t.id=a.info.id,t.page=a.info.page,void 0!==a.info.resource&&(t.resource=a.info.resource),t.comentario=$("#comentario").val(),t.infoadicional=$("#infoadi").val();var i=[];$(".datoenlacefuente").each(function(a,e){""!=$(e).text()&&i.push({url:$(e).text()})}),t.enlacesfuentesdatos=i;var n=JSON.stringify(t);pybossa.saveTask(a.id,n).done(function(a){$("#comentario").val(""),$("#comentario").hide(),$("#infoadi").val(""),$(".datoenlacefuente").remove(),$(".eliminardatoenlacefuente").remove(),$.each(dataConfig,function(a,e){var t=e.tipo,o=e.id;if("selectsimpleauto"==t||"selectsimplemanual"==t||"selectmultipleauto"==t)$("#"+o).val(null).trigger("change");else if("text"==t||"number"==t)$("#"+o).val("");else if("selectsimpleagrupado"==t){$("."+o).remove();var i=e.select1,n=e.select2,s=e.select3;$("#"+i.id).val(null).trigger("change"),$("#"+n.id).val(null).trigger("change"),void 0!==s&&$("#"+s.id).val(null).trigger("change")}}),anno.reset(),deleteMarkers(),$("#listanotaciones").html(""),pybossaNotify("Gracias por su contribución.","success",!0),$("html, body").animate({scrollTop:$(".container-fluid").offset().top},2e3),e.resolve()})}else pybossaNotify("Es obligatorio rellenar la siguiente información.","error",!0)})}});