function func()
{
    setInterval(valuerun,100);
    setInterval(valuerun1,1000);
    setInterval(valuerun2,1000);
    let counter1=0;
    function valuerun()
    {
        if(counter1<140)
        {
            counter1++;
            let store=document.getElementById('run');
            store.innerHTML=counter1;
        }
        else
        {
            clearInterval()
        }
    }
    let counter2=0;
    function valuerun1()
    {
        if(counter2<40)
        {
        counter2++;
        let store=document.getElementById('run1');
        store.innerHTML=counter2;
        }
        else
        {
            clearInterval();
        }
    }

    let counter3=0;
    function valuerun2()
    {
        if(counter3<100)
        {
        counter3++;
        let store=document.getElementById('run2');
        store.innerHTML=counter3;
        }
        else
        {
            clearInterval();
        }
    }
    setTimeout(khulja,2000);
    function khulja()
    {
        document.getElementById('website').style.display="block";
        document.getElementById('starting_animation').style.display="none";
    }
    
}