document.addEventListener("DOMContentLoaded", function() {
    function updateWidth() {
        var containers = document.querySelectorAll('.custom-container');

        containers.forEach(function(container) {
            var containerWidth = container.offsetWidth;
            var containerWidthElement = container.querySelector('.width');
            containerWidthElement.innerText = "Width: " + containerWidth + "px";
        });
    }

    // Initial update on page load
    updateWidth();

    // Update on window resize
    window.addEventListener("resize", updateWidth);
});
