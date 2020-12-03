function f_reverse () 
        {
           
           var s=new String;
          s=document.getElementById('row_type').value;  
         if (s==='row') 
            {
             document.getElementById('row_type').value='column';
             document.getElementById('div_area').className='flex-container-column';
            }
           else
            {
             document.getElementById('row_type').value='row';
             document.getElementById('div_area').className='flex-container-row';
             
            }   
            
        }
    
        function go_home () 
        {
          location.href = "index.html";
        }