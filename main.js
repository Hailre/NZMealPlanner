//Recipe Scroll (Up and Down)

const ele = document.getElementById('recipes');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);

///////////////////////////////////////////////////////////  Filters Scroll (Right and Left)  /////////////////////////////////////////////////////////////////


const ele2 = document.getElementById('filters');
    ele2.style.cursor = 'grab';

    let pos2 = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler2 = function (e) {
        ele2.style.cursor = 'grabbing';
        ele2.style.userSelect = 'none';

        pos2 = {
            left: ele2.scrollLeft,
            top: ele2.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler2);
        document.addEventListener('mouseup', mouseUpHandler2);
    };

    const mouseMoveHandler2 = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;

        // Scroll the element
        ele2.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler2 = function () {
        ele2.style.cursor = 'grab';
        ele2.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler2);
        document.removeEventListener('mouseup', mouseUpHandler2);
    };

    // Attach the handler
    ele2.addEventListener('mousedown', mouseDownHandler2);