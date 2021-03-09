infiniteScroll({
    container: ".tab_container",
    item: ".tab-content",
    next: ".next",
    nextCallback: (newElement) => {
        // 바닐라
        newElement.classList.add("foo")
    },
    prevCallback: function(newElement) {
        newElement.style.opacity = "0.5"
    }
})