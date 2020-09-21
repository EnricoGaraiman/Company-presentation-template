    $(document).ready(function() {
        $(".bars").on("click", function() {
            $("nav ul").toggleClass("nav_showing");
        });
     });

     function myFunction(x) {
  			x.classList.toggle("change");
		}

		$(function () {
			x=0;
    		$('#portfolio .portfolio_box').slice(0, 0).show();
    		$('#loadMore').on('click', function (e) {
        		e.preventDefault();
        		x = x+1;
        		$('#portfolio .portfolio_box').slice(0, x).slideDown();
    		});
		});

		$(function () {
			$('#Hide').on('click', function (e) {
				$('#portfolio .portfolio_box').slideUp();
				x=0;
			});	
		});