<script>
        var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
    
        /* for hiding contents when we will click on link*/
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");/*display the color particularly*/
            /* the tabname means when we will click on education it will show only education content*/
           document.getElementById(tabname).classList.add("active-tab");
        }

        /* for side menu */
        function openmenu(){
            document.getElementById("sidemenu").style.right="0";//whenevr right =0 it willbe visible
        }
        function closemenu(){
            document.getElementById("sidemenu").style.right="-200px";
        }
    </script>
