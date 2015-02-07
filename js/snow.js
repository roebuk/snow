(function() {
    'use strict';

    const SNOWFLAKES_COUNT = 400;
    var container = document.querySelector('.container'),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        i,
        width = container.clientWidth,
        height = container.clientHeight,
        snowflake,
        snowflakes = [];

    class Snowflake {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.vx = 0;
            this.vy = 0;
            this.r = 0;
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.vx = 0.5 - Math.random();
            this.vy = Math.random() + 1;
            this.r = 1 + Math.random() * 2;
            this.o = 0.5 + Math.random() * 0.5;
        }
    }

    for (i = 0; i < SNOWFLAKES_COUNT; i++) {
        snowflake = new Snowflake();
        snowflake.reset();
        snowflakes.push(snowflake);
    }

    function update() {
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < SNOWFLAKES_COUNT; i++) {
            let snowflake = snowflakes[i];
            snowflake.x += snowflake.vx;
            snowflake.y += snowflake.vy;

            ctx.globalAlpha = snowflake.o;
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();

            if (snowflake.y > height) {
                snowflake.reset();
            }
        }

        window.requestAnimationFrame(update);
    }


    function resize() {
        width = container.clientWidth;
        height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize, false);

    resize();
    update();
    container.appendChild(canvas);

})();
