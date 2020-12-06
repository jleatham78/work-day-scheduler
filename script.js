    $(document).ready(function(){
      $(".btn").click(function() {
      var description = $(this).siblings(".description").val();
      var rowId = $(this).parent().attr("id");
      localStorage.setItem(rowId, description);
      console.log(rowId);
      console.log(description);
      });

      updateHourColors = function() {
        
        var now = moment().hour();

        $(".time-block").each(function(){
          var getTime = parseInt($(this).attr("id").split("-")[1]);
          console.log(typeof(getTime));
         

          if (getTime < now) {
          $(this).addClass("past");
          }

          else if (getTime > now) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
          
          else if (getTime === now) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
          }
        
        });
      }
        updateHourColors()

        setInterval(updateHourColors, 60000)

      $("#row-9 .description").val(localStorage.getItem("row-9"));
      $("#row-10 .description").val(localStorage.getItem("row-10"));
      $("#row-11 .description").val(localStorage.getItem("row-11"));
      $("#row-12 .description").val(localStorage.getItem("row-12"));
      $("#row-13 .description").val(localStorage.getItem("row-13"));
      $("#row-14. description").val(localStorage.getItem("row-14"));
      $("#row-15. description").val(localStorage.getItem("row-15"));
      $("#row-16 .description").val(localStorage.getItem("row-16"));
      $("#row-17 .description").val(localStorage.getItem("row-17"));
    });
  