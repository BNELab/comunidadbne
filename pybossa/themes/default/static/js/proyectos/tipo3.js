function obtener_pista_audio(){var t=tarea.info.id,e=tarea.info.page;$.ajax({url:urlval+"endpoint/get_audio_tracks?id="+t+"&page="+e,data:{}}).done(function(t){var e=JSON.parse(t);$("#audio").attr("src",e.mp3),$("#titulo").text(e.titulo),$("#carantula").text(e.carantula),audi.play()})}function formatRepo(t){return t.loading,t.text}function formatRepoSelection(t){return t.full_name||t.text}audi=document.getElementById("audio"),$(document).ready(function(){$("#textotranscrito").popover({container:"body",content:$("#textotranscrito").attr("placeholder"),html:!1,placement:"top",trigger:"hover"}),audi.onerror=function(){obtener_pista_audio()},"undefined"==typeof loadcampos&&(componercampos(),$("input[maxlength]").maxlength())}),pybossa.taskLoaded(function(t,e){$.isEmptyObject(t),e.resolve(t)}),pybossa.presentTask(function(t,e){$.isEmptyObject(t)?(pybossaNotify("Ya ha contribuido en todas las tareas del proyecto, muchas gracias por su colaboración.","info",!0),$("#contenedortarea").hide(),$("#finalizado").show()):(cargarenlaceurl(t),obtenersiguientetarea(t.project_id,t.id),loadUserProgress(),tarea=t,obtener_pista_audio(),$("#guardar").off("click").on("click",function(){var a={},i=!1;$.each(dataConfig,function(t,e){var i=e.tipo,o=e.id;switch(i){case"selectsimpleauto":a[o+"id"]=$("#"+o).val(),""!=a[o+"id"]&&null!=a[o+"id"]?(a[o+"txt"]=$("#"+o).select2("data")[0].text,!0):(a[o+"id"]="",a[o+"txt"]="");break;case"selectsimplemanual":a[o+"id"]=$("#"+o).val(),null==a[o+"id"]?a[o+"id"]="":!0;break;case"selectmultipleauto":void 0===a[o]&&(a[o]=[]),$($("#"+o).select2("data")).each(function(t,e){!0,a[o].push({id:e.id,text:e.text})});break;case"text":case"number":a[o]=$("#"+o).val(),""!=a[o]&&!0;break;case"selectsimpleagrupado":void 0===a[o]&&(a[o]=[]);var n=e.select1.id,r=e.select2.id;if(void 0!==e.select3)var l=e.select3.id;else l="nodefinido";$("."+o).each(function(t,e){a[o].push({["id"+n]:$(e).attr("dat"+n+"id"),["text"+n]:$(e).attr("dat"+n+"txt"),["id"+r]:$(e).attr("dat"+r+"id"),["text"+r]:$(e).attr("dat"+r+"txt"),["id"+l]:$(e).attr("dat"+l+"id"),["text"+l]:$(e).attr("dat"+l+"txt")}),!0})}});var o=$("#textotranscrito").val();if(""!=o&&(i=!0),1==i){a.id=t.info.id,a.page=t.info.page,a.comentario=$("#comentario").val(),a.infoadicional=$("#infoadi").val(),a.textotranscrito=o;var n=[];$(".datoenlacefuente").each(function(t,e){""!=$(e).text()&&n.push({url:$(e).text()})}),a.enlacesfuentesdatos=n,a.dataConfig=JSON.stringify(dataConfig);var r=JSON.stringify(a);pybossa.saveTask(t.id,r).done(function(t){$("#comentario").val(""),$("#comentario").hide(),$("#infoadi").val(""),$(".datoenlacefuente").remove(),$(".eliminardatoenlacefuente").remove(),$("#textotranscrito").val(""),$.each(dataConfig,function(t,e){var a=e.tipo,i=e.id;if("selectsimpleauto"==a||"selectsimplemanual"==a||"selectmultipleauto"==a)$("#"+i).val(null).trigger("change");else if("text"==a||"number"==a)$("#"+i).val("");else if("selectsimpleagrupado"==a){$("."+i).remove();var o=e.select1,n=e.select2,r=e.select3;$("#"+o.id).val(null).trigger("change"),$("#"+n.id).val(null).trigger("change"),void 0!==r&&$("#"+r.id).val(null).trigger("change")}}),pybossaNotify("Gracias por su contribución.","success",!0),$("html, body").animate({scrollTop:$(".container-fluid").offset().top},2e3),e.resolve()})}else pybossaNotify("Es obligatorio rellenar la transcripción de la pista de audio.","error",!0)}))}),pybossa.run(nombreshortproyect);