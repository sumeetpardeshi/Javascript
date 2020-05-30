power(2,0);

function power(num,pow){
        
            if(pow==1)
            return num;
            else if(pow==0)
            return 1;
            else
           return num*power(num,pow-1);
         
}
