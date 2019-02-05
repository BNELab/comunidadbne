<script type="text/javascript">
  var csrftoken = "{{ csrf_token() }}";

  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
  });



  
  $SCRIPT_ROOT = {{ request.script_root|tojson|safe }};
  function add(project_id) {
      var url = $SCRIPT_ROOT + "/admin/featured/" + project_id;
      var xhr = $.ajax({
          type: 'POST',
          url: url,
          dataType: 'json',
      });
      xhr.done(function(){
        console.log("ABC");
          $("#projectBtnDel" + project_id).show();
          $("#projectBtnAdd" + project_id).hide();
          $("#projectBtnDel" + project_id).text("Eliminar");
          $("#projectBtnAdd" + project_id).text("Añadir");
      });
  }
  function del(project_id) {
      var url = $SCRIPT_ROOT + "/admin/featured/" + project_id;
      var xhr = $.ajax({
          type: 'DELETE',
          url: url,
          dataType: 'json',
      });
      xhr.done(function(){
          $("#projectBtnDel" + project_id).hide();
          $("#projectBtnAdd" + project_id).show();
          $("#projectBtnDel" + project_id).text("Eliminar");
          $("#projectBtnAdd" + project_id).text("Añadir");

      });
  }


</script>