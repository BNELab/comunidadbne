function createInputHidden(e,t){var a=document.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("name",e),a.setAttribute("value",t),document.getElementById("formdatatipo1").appendChild(a)}function updateUrl(e,t,a){null!=a&&(a=encodeURI(a));var o=e.split("?"),n=o[0],i="",s={};if(o.length>1&&(i=o[1]),""!=i)for(d in i=i.split("&")){var l=i[d],r=(l=l.split("="))[0],c="";l.length>1&&(c=l[1]),s[r]=c}for(var d in null!=a?s[t]=a:delete s[t],i=[],s)i.push(d+"="+s[d]);var u=n;return i.length>0&&(u+="?"+i.join("&")),u}function componerdatosautor(e,t){var a=JSON.parse(t),o="";""!=a.nombre&&(o+="<p class='nombreautor'>"+a.nombre,""!=a.fnfm&&(o+="<span class='fnfm'>  ("+a.fnfm+")</span>"),o+="</p>"),a.infoautor.length>0&&("object"==typeof a.infoautor?$.each(a.infoautor,function(e,t){o+="<p class='infoautor'>"+t+"</p>"}):o+="<p class='infoautor'>"+a.infoautor+"</p>"),void 0!==a.masinfo&&("object"==typeof a.masinfo?(o+='<div class=""><table style="background-color: #F8F8F8" class="table table-condensed table-responsive"><tbody style="padding-left:0px;">',void 0!==a.masinfo.otrosnombres&&a.masinfo.otrosnombres.length>0&&(o+='<tr><td class="label-row" style="padding-left: 0px;"><strong>Otros nombres utilizados:</strong></td><td>',$.each(a.masinfo.otrosnombres,function(e,t){o+="<p>"+t+"</p>"}),o+="</td></tr>"),void 0!==a.masinfo.fuenteconsultada&&a.masinfo.fuenteconsultada.length>0&&(o+='<tr><td class="label-row" style="padding-left: 0px;"><strong>Fuentes consultadas:</strong></td><td>',$.each(a.masinfo.fuenteconsultada,function(e,t){o+="<p>"+t+"</p>"}),o+="</td></tr>"),o+="</tbody></table></div>"):o+="<p>"+a.masinfo+"</p>"),"object"==typeof a.enalcesinteres?(o+="<p class='infoautorenalcesinteres'>Enlaces de interés</p>",o+="<ul class='infoenlacesautor'>",a.enalcesinteres.length>0&&$.each(a.enalcesinteres,function(e,t){o+="<li><a href='"+t+"' target='_blank'>"+t+"</a></li>"}),o+="<li><a href='http://datos.bne.es/resource/"+e+"' target='_blank'>Datos BNE</a></li>",o+="</ul>"):o+="<p>"+a.enalcesinteres+"</p>",$("#bloquedatosautor").html(o)}function formatRepo(e){return e.loading,e.text}function formatRepoSelection(e){return e.full_name||e.text}$(document).ready(function(){"undefined"==typeof loadcampos&&(componercampos(),$("input[maxlength]").maxlength())}),"undefined"==typeof loadcampos&&(pybossa.taskLoaded(function(e,t){$.isEmptyObject(e),t.resolve(e)}),pybossa.presentTask(function(e,t){$.isEmptyObject(e)?(pybossaNotify("Ya ha contribuido en todas las tareas del proyecto, muchas gracias por su colaboración.","info",!0),$("#contenedortarea").hide(),$("#finalizado").show()):(componerdatosautor(e.info.id,e.info.infoextra),cargarenlaceurl(e),obtenersiguientetarea(e.project_id,e.id),loadUserProgress(),$("#guardar").off("click").on("click",function(){var a={},o=!1;if($.each(dataConfig,function(e,t){var n=t.tipo,i=t.id;switch(n){case"selectsimpleauto":a[i+"id"]=$("#"+i).val(),""!=a[i+"id"]&&null!=a[i+"id"]?(a[i+"txt"]=$("#"+i).select2("data")[0].text,o=!0):(a[i+"id"]="",a[i+"txt"]="");break;case"selectsimplemanual":a[i+"id"]=$("#"+i).val(),null==a[i+"id"]?a[i+"id"]="":o=!0;break;case"selectmultipleauto":void 0===a[i]&&(a[i]=[]),$($("#"+i).select2("data")).each(function(e,t){o=!0,a[i].push({id:t.id,text:t.text})});break;case"text":case"number":a[i]=$("#"+i).val(),""!=a[i]&&(o=!0);break;case"selectsimpleagrupado":void 0===a[i]&&(a[i]=[]);var s=t.select1.id,l=t.select2.id;if(void 0!==t.select3)var r=t.select3.id;else r="nodefinido";$("."+i).each(function(e,t){a[i].push({["id"+s]:$(t).attr("dat"+s+"id"),["text"+s]:$(t).attr("dat"+s+"txt"),["id"+l]:$(t).attr("dat"+l+"id"),["text"+l]:$(t).attr("dat"+l+"txt"),["id"+r]:$(t).attr("dat"+r+"id"),["text"+r]:$(t).attr("dat"+r+"txt")}),o=!0})}}),1==o){a.dataConfig=JSON.stringify(dataConfig),a.id=e.info.id,a.page=e.info.page,a.resource="",a.comentario=$("#comentario").val(),a.infoadicional=$("#infoadi").val();var n=[];$(".datoenlacefuente").each(function(e,t){""!=$(t).text()&&n.push({url:$(t).text()})}),a.enlacesfuentesdatos=n;var i=JSON.stringify(a);pybossa.saveTask(e.id,i).done(function(e){$("#comentario").val(""),$("#comentario").hide(),$("#infoadi").val(""),$(".datoenlacefuente").remove(),$(".eliminardatoenlacefuente").remove(),$.each(dataConfig,function(e,t){var a=t.tipo,o=t.id;if("selectsimpleauto"==a||"selectsimplemanual"==a||"selectmultipleauto"==a)$("#"+o).val(null).trigger("change");else if("text"==a||"number"==a)$("#"+o).val("");else if("selectsimpleagrupado"==a){$("."+o).remove();var n=t.select1,i=t.select2,s=t.select3;$("#"+n.id).val(null).trigger("change"),$("#"+i.id).val(null).trigger("change"),void 0!==s&&$("#"+s.id).val(null).trigger("change")}}),pybossaNotify("Gracias por su contribución.","success",!0),$("html, body").animate({scrollTop:$(".container-fluid").offset().top},2e3),t.resolve()})}else pybossaNotify("Es obligatorio rellenar la siguiente información.","error",!0)}))}));