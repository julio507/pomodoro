var run = false;

var working = true;

var min = 25;
var seg = 0;

update = function()
{
    seg = seg < 10 ? '0' + seg : seg

    document.getElementById( "clock" ).innerHTML = min + ":" + seg;
}

start = function()
{
    run = true;
}

pause = function()
{
    run = false;
}

reset = function()
{
    pause();

    min = 25;
    seg = 0;

    update();
}

count = function()
{
    if( run )
    {
        seg --;

        if( seg <= 0 )
        {
            seg = 60;
            min--;
        }

        if( min < 0 )
        {
            if( working )
            {
                min = 5;
                seg = 0;
            }

            else
            {
                min = 25;
                seg = 0;
            }

            working = !working;
        }

        update();
    }
}

window.onload = function()
{
    update();

    setInterval( count, 1000 );

    this.document.getElementById( "start" ).onclick = function()
    {
        if( run )
        {
            pause();
        }
        
        else
        {
            start();
        }
    }

    this.document.getElementById( "reset" ).onclick = function()
    {
        reset();
    }
}

